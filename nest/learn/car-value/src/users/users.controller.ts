import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {

  @Post('/signup')
  createUser(@Body() body: CreateUserDto){
    console.log(body)
  }

  @Get('/:id')
  findUser(@Param() id: string) {}

  @Get('?email')
  findAllUsers() {}

  @Patch('/:id')
  updateUser(@Param() id: string) {}

  @Delete('/:id')
  removeUser(@Param() id: string) {}
}
