import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository {
  async findOne(id: string) {
    const messages = await this.findAll();
    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async createMessage(content: string) {
    const messages = await this.findAll();

    const id = Date.now().toString();
    messages[id] = { content, id };

    await writeFile('messages.json', JSON.stringify(messages), 'utf-8')
  }
}