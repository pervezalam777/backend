import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

  constructor(private userService: UsersService){}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto){
    console.log(body)
    return this.userService.create(body.email, body.password);
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
