import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import JwtAuthenticationGuard from '../auth/guard/Jwt-authentication.guard';
import { PrismaService } from '../prisma/prisma.service';
import { CartService } from '../cart/cart.service';
import { CreateOrderDto } from './dto/createOrder.dto';

@Injectable()
@UseGuards(JwtAuthenticationGuard)
export class OrderService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cartService: CartService,
  ) {}

  async createOrder(orderData: CreateOrderDto, req) {
    const user = req.user as {
      id: string;
      email: string;
      role: string;
    };

    // check cart
    const cart = await this.cartService.checkUserHasCart(user.id);
    if (!cart) throw new BadRequestException('Cart not found');

    const cartItems = await this.cartService.getAllCartItemsWithPrice(req);

    if (!cartItems.length) throw new BadRequestException('Cart has no items');

    const order = await this.prismaService.order.create({
      data: {
        userId: user.id,
        totalPrice: cartItems.reduce(
          (acc, item) => acc + item.price * ((100 - item.discount) / 100),
          0,
        ),
        status: 'pending',
        shipping: orderData.shipping,
        address: orderData.address,
      },
    });

    if (!order) {
      throw new ForbiddenException('Something went wrong');
    }

    const createOrderItems = await Promise.all(
      cartItems.map(async (cartItem) => {
        const orderItem = await this.prismaService.orderItem.create({
          data: {
            orderId: order.id,
            quantity: cartItem.quantity,
            productId: cartItem.productId,
          },
        });

        return orderItem;
      }),
    );

    if (!createOrderItems) {
      throw new ForbiddenException('Something went wrong');
    }

    // delete cart items after order has been created
    await this.prismaService.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });

    return order;
  }

  async updateOrderInfo(orderData: CreateOrderDto, req, orderId: string) {
    const user = req.user as {
      id: string;
      email: string;
      role: string;
    };

    const isYourOrder = await this.prismaService.order.findFirst({
      where: {
        id: orderId,
        userId: user.id,
      },
    });

    if (!isYourOrder) {
      throw new BadRequestException('Order is not exist');
    }

    const orderAfterUpdate = await this.prismaService.order.update({
      where: {
        id: orderId,
      },
      data: {
        ...orderData,
      },
    });

    return orderAfterUpdate;
  }

  async removeOrder(orderId: string, req) {
    const user = req.user as {
      id: string;
      email: string;
      role: string;
    };

    const isYourOrder = await this.prismaService.order.findFirst({
      where: {
        id: orderId,
        userId: user.id,
      },
    });

    if (!isYourOrder) {
      throw new BadRequestException('Something went wrong');
    }

    // delete all order items
    await this.prismaService.orderItem.deleteMany({
      where: {
        orderId: orderId,
      },
    });

    return this.prismaService.order.delete({
      where: {
        id: orderId,
      },
    });
  }

  getAllOrders(req) {
    const user = req.user as {
      id: string;
      email: string;
      role: string;
    };

    return this.prismaService.order.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  async getProductsByStatus() {
    const pendingOrder = await this.prismaService.order.findMany({
      where: {
        status: 'pending',
      },
    });

    const processingOrder = await this.prismaService.order.findMany({
      where: {
        status: 'isDelivering',
      },
    });

    const deliveredOrder = await this.prismaService.order.findMany({
      where: {
        status: 'delivered',
      },
    });

    const rejectOrder = await this.prismaService.order.findMany({
      where: {
        status: 'reject',
      },
    });

    return {
      pending: pendingOrder,
      processing: processingOrder,
      delivered: deliveredOrder,
      rejected: rejectOrder,
    };
  }

  async changeProductStatus(body, orderId: string) {
    const order = await this.prismaService.order.findUnique({
      where: {
        id: orderId,
      },
    });

    if (!order) {
      throw new BadRequestException('Order not found');
    }

    return this.prismaService.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: body.status,
      },
    });
  }

  confirmOrder(orderId) {}

  rejectOrder(orderId) {}
}
