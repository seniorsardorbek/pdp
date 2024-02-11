import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { ObjectId } from 'mongoose'

@Schema({
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class User {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  phone: string
  @Prop({
    type: String,
    required: true,
  })
  password: string

}
export const UserSchema = SchemaFactory.createForClass(User)

