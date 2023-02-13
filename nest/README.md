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