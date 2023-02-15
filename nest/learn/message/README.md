
## Nest message backend application


## Commands

### `nest new message`
- will generate boiler plate with nest re-commanded setup 

### `nest generate module messages` 
- will generate a messages folder with `messages.module.ts` file inside it

### `nest generate controller messages/messages --flat`
- will generate `messages.controller.ts` and `messages.controller.spec.ts`
- will update the `message.module.ts` with dependencies. 
- `--flat` to prevent creation of `controller` folder inside the `messages` folder

### `npm install class-validator class-transformer`
- [`class-transformer`](https://github.com/typestack/class-transformer): *Nowadays you are working with classes and constructor objects more than ever. Class-transformer allows you to `transform plain object to some instance of class and versa`*

- [`class-validator`](https://github.com/typestack/class-validator): *Allows use of decorator and non-decorator based validation. Internally uses [validator.js](https://github.com/validatorjs/validator.js) to perform validation. Class-validator works on both browser and node.js platforms.*


# [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
