# Nest setup without nest cli

```bash
# create package json
$ npm init -y

# Add dependencies for nest application
$ npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2

# Run nest application
$ npx ts-node-dev src/main.ts

# check in browser
# `http://localhost:5000/app/root`
```



## @nestjs/common 
Contains vast majority of functions, classes, etc, that we need from Nest

## @nestjs/platform-express
Lets Nest use Express JS for handling HTTP requests

## reflect-metadata
Helps make decorators work.

## Typescript
Nest js app are generally written in typescript

## experimentalDecorators

## emitDecoratorMetadata (true)
TS code
```typescript
import { CreateMessageDto } from './dtos/create-message.dto';
...
...
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body)
  }
...
```

JS code:
```javascript
...
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "createMessage", null);
...
```