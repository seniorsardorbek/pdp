import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Product } from './Schema/Product'
import { Model } from 'mongoose'

@Injectable()
export class ProductsService {
  constructor (
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  
  create (createProductDto: CreateProductDto) {
    try {
      return this.productModel.create(createProductDto)
    } catch (error) {
      throw new BadRequestException({ msg: 'Keyinroq urinib koring', error })
    }
  }

  findAll () {
    try {
      return this.productModel.find()
    } catch (error) {
      throw new BadRequestException({ msg: 'Keyinroq urinib koring', error })
    }
  }

  findOne (id: string) {
    try {
      
      return this.productModel.findById(id)
    } catch (error) {
      throw new BadRequestException({ msg: 'Keyinroq urinib koring', error })
    }
  }

  async update (id: string, updateProductDto: UpdateProductDto) {
    try {
      const exist = await this.productModel.findById(id)
      if (!exist) throw new BadRequestException({ msg: "Product not found"})
      return this.productModel.findByIdAndUpdate(id, updateProductDto , {new : true})
    } catch (error) {
      throw new BadRequestException({ msg: 'Keyinroq urinib koring', error })
    }
  }

 async remove (id: string) {
    try {
      const exist = await this.productModel.findById(id)
      if (!exist) throw new BadRequestException({ msg: "Product not found"})
      return this.productModel.findByIdAndDelete(id)
    } catch (error) {
      throw new BadRequestException({ msg: 'Keyinroq urinib koring', error })
    }
  }
}
