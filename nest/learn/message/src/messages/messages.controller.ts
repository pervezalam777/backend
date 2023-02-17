import { Controller, Get, Post, Body, Param,  NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body)
    return this.messagesService.createMessage(body.content)
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    console.log('id', id)
    const message = await this.messagesService.findOne(id);

    if(!message) {
      throw new NotFoundException('Message not found')
    }

    return message;
  }
}
