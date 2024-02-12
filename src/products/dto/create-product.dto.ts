import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  description: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsArray()
  @IsNotEmpty()
  images: string[]
}
