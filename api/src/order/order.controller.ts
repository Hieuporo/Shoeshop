import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import JwtAuthenticationGuard from '../auth/guard/Jwt-authentication.guard';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/createOrder.dto';
import { plainToClass } from 'class-transformer';

@Controller('order')
@UseGuards(JwtAuthenticationGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('createOrder')
  createOrder(@Body() order: CreateOrderDto, @Request() req) {
    const realOrder = plainToClass(CreateOrderDto, order, {
      excludeExtraneousValues: true,
    });

    return this.orderService.createOrder(realOrder, req);
  }
}
