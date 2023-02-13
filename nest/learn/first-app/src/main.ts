import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootStrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}

bootStrap();