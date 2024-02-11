import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { ObjectId } from 'mongoose'

@Schema({
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Product {
  @Prop({
    type: String,
    required: true,
  })
  description: string
  @Prop({
    type: Number,
    required: true,
  })
  price: number
  @Prop({
    type: String,
    required: true,
  })
  name: number
}
export const ProductSchema = SchemaFactory.createForClass(Product)

