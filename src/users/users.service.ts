import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcryptjs'
import { Model } from 'mongoose'
import { User } from './Schema/Users'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
const saltOrRounds = 12
@Injectable()
export class UsersService {
  constructor (@InjectModel(User.name) private userModel: Model<User>) {}
  async create (data: CreateUserDto) {
    try {
      const phone = await this.userModel.findOne({ phone: data.phone })
      if (phone) {
        throw new BadRequestException({
          msg: 'Phone number allqachon foydalanilgan',
        })
      }
      data.password = await bcrypt.hash(data.password, saltOrRounds)
      return this.userModel.create(data)
    } catch (error) {
      throw new BadRequestException({
        msg: "Keyinroq urinib ko'ring...",
        error,
      })
    }
  }

  async findAll () {
    try {
      return this.userModel.find()
    } catch (error) {
      throw new BadRequestException({ msg: "Keyinroq urinib ko'ring..." })
    }
  }

  findOne (id : string) {
    try {
      const user = this.userModel.findById(id).select('-password')
      return user
    } catch (error) {
      throw new BadRequestException({ msg: "Keyinroq urinib ko'ring..." })
    }
  }
}
