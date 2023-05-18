// create-review.dto.ts

import { Expose } from 'class-transformer';
import { IsInt, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class UpdateReviewDto {
  @Expose()
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  star: number;

  @Expose()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  content: string;
}
