import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { IsLoggedIn } from 'src/auth/is-loggin.guard'

@Controller('users')
export class UsersController {
  constructor (private readonly usersService: UsersService) {}
  @Post()
  create (@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }
  @UseGuards(IsLoggedIn)
  @Get()
  findAll () {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.usersService.findOne(id)
  }
}
