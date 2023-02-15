# Nest

## API Request stages in nest
1. Validate data contained in the request
2. Make sure the user is authenticated 
  - If authentication is required
  - If there is no request proxy (e.g. tyk)
3. Route the request to a particular function
4. Run some business logic
5. Access a database

## Parts of Nest
### `Pipe` for Validation
### `Guard` for Authentication
### `Controller` for request function
### `Service` for business logic
### `Repository` for Database access
### `Modules` for groups together code
### `Filters` for Handles errors that occur during request handling
### `Interceptors` for adding extra logic to incoming request or outgoing responses

<br /><br />

# Decorators
## Type of decorators
- `Class decorators` use just above the class e.g. `@Module()`, `@Controller()`, etc.
- `Method decorators` use just above the function/methods e.g. `@Get()`, `@Post()`, etc.
- `Argument decorators` use as function parameters e.g. `@Body()`, `@Param()`, etc.

## List of decorators
### @Module()
### @Controller()
### @Get('/:id')
### @Post()
### @Param('id')
### @Query()
### @Header()
### @Body()

<br /><br />

# Pipes
## List of pipes
### ValidationPipe

<br /><br />

# Setting up Automatic Validation
- Tell nest to use global validation (check `/learn/message/src/main.ts`)
- Create a class that describe the different properties that the request body should have `Data transfer object (Dto)` (check `/learn/message/src/messages/dtos/create-message.dto.ts`)
- Add Validation rules to the class (check `/learn/message/src/messages/dtos/create-message.dto.ts`)
- Apply that class to the request handler (check `/learn/message/src/messages/message.controller.ts`)