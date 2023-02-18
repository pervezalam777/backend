## Setup
```bash
# setup di project
$ nest new di

## Create modules  -------------------
# create computer module
$ nest g module computer

# create cpu module
$ nest g module cpu

# create disk module
$ nest g module disk

# create power module
$ nest g module power

## Create services ---------------------
# create cpu service
$ nest g service cpu

# create disk service
$ nest g service disk

# create power service
$ nest g service power

## Create controllers -----------------------
# create computer controller
$ nest g controller computer

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
