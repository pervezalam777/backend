# Car value

## Setup
```bash
# Set project
$ nest new car-value

## Create modules -----
# users module
$ nest g module users

# reports module
$ nest g module reports

## Create controllers ----
# users controller
$ nest g controller users

# reports controller
$ nest g controller reports

## Create services -----
# users service
$ nest g service users

# reports service
$ nest g service reports

## Install typeORM and sqlite3
$ npm i @nestjs/typeorm typeorm sqlite3

## Install class validator
$ npm i class-validator class-transformer
```

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
