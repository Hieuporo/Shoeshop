import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @Expose()
  @IsString()
  address: string;

  @Expose()
  @IsString()
  shipping: string;
}
