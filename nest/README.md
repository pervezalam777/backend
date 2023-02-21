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
```typescript
 ...
 app.useGlobalPipes(
    new ValidationPipe({
      // Whitelist true means all the extra properties send by client
      // in the body will be stripped off (add some level of security)
      whitelist: true 
    })
 ...
```
For example CreateUserDto require on email and password if user add one more property (e.g. userRole) to request body. It will be remove the 'userRole' from the body and send the dto object with two required property. 

<br /><br />

# Setting up Automatic Validation
- Tell nest to use global validation (check `/learn/message/src/main.ts`)
- Create a class that describe the different properties that the request body should have `Data transfer object (Dto)` (check `/learn/message/src/messages/dtos/create-message.dto.ts`)
- Add Validation rules to the class (check `/learn/message/src/messages/dtos/create-message.dto.ts`)
- Apply that class to the request handler (check `/learn/message/src/messages/message.controller.ts`)

<br /><br />

# Service vs Repositories
Service and Repositories most of time end up having same methods names

## Service
- It is a class.
- Place to put business logic.
- Use one and more repositories to find or stored data.

## Repositories
- It is a class.
- Place to put storage-related logic.
- Usually end up being a TypeORM entity, a Mongoose schema, or similar

<br /><br />

# Dependency Injection
- Dependency injection is the result of Inversion Of Control (IOC) principle.
- `Inversion of Control (IOC)` Principle: Classes should not create instances of its dependencies on its own.
- If we use IOC we could supply dependency when actual code is required (e.g. production, Dev or QA env), but in case of test env we could use fake dependency

## Nest DI Container/Injector
Nest DI container can be logically divided into two sections

- `Section 1`: List of classes and their dependencies
- `Section 2`: List of instances created by nest

### DI container flow
- At startup, register all classes with the container
- Container will figure out what each dependency each class has
- We then ask the container to create an instance/object of a class for us
- Container creates all the required dependencies and gives us the instance/object
- Container will hold onto the created dependency instances and reuse them if needed

### Explained with code
**`Bad Approach`**: instantiating class in the class
```typescript
export class UserService {
  userRepo:UserRepo;
  constructor() {
    this.userRepo = new UserRepo();
  }
}
```

**`Better Approach`**: instantiating class in the class
```typescript
export class UserService {
  userRepo:UserRepo;
  constructor(repo: UserRepo) {
    this.userRepo = repo;
  }
}
```

**`Best Approach`**: instantiating class in the class
```typescript
interface UserRepository {
  find(id: string)
}

export class UserService {
  userRepo:UserRepository;
  constructor(repo: UserRepository) {
    this.userRepo = repo;
  }
}
```

# Nest work well with TypeORM and Mongoose

# TypeORM
## How to add entity in the system
- Create an entity file in the module it should belongs to. (e.g. `nest\learn\car-value\src\reports\report.entity.ts`)
- Create a class list all the properties in it that entity will have. (e.g. `nest\learn\car-value\src\reports\report.entity.ts`)
- Connect the entity to its parent module. This create a repository (e.g. `nest\learn\car-value\src\reports\reports.module.ts`)
- Connect the entity to the root connection (e.g. `nest\learn\car-value\src\app.module.ts`)

## synchronize: true
In `nest\learn\car-value\src\app.module.ts` synchronize flag set to true which is `only for development` purpose, it will automatically update, alter, delete database tables when it detect change in entity files

## [Repository API](https://typeorm.io/repository-api)
- `create()`: makes a new instance of an entity, but does not persist it to the DB
- `save()`: use entity to add or updates a record to the DB
- `find()`: Runs a query and returns a list of entities
- `findOne()`: Run a query, returning the first record matching the search criteria
- `remove()`: use entity to remove a record from the DB
- `update()`:
- `insert()`:

## Create vs Save
- `Create`: creates repository entity instance in memory
- `Save`: Actually save the data into the database

### create gives you some advantages where 
- Auto generated id can be use
- TypeORM provide hooks that can be use for logging (e.g. `AfterInsert()` )




# Exception filters ??