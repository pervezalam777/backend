# Backend
backend development related stuff will go inside this repo


## HTTP Request
http request can be represented in plain text
```
POST /messages/5?validate=true HTTP/1.1
HOST: localhost:6000
Content-Type: application/json

{"content": "hi there"}
```
### First line: `POST /messages/5?validate=true HTTP/1.1`
First line also know as `start line` contains 
- `METHOD` (e.g. GET or POST or DELETE, or etc). 
- Full route (e.g. /messages/5?validate=true)
- HTTP protocol (e.g. HTTP/1.1)

### HEADERS
From second line all the headers are captured e.g.
```
HOST: localhost:6000
Content-Type: application/json
``` 

### BODY
After header there should be a body part which contains data as per specified by `Content-Type` header
```
{"content": "hi there"}
```

## HTTP Response
http response can also be represented in plain text e.g.
```
HTTP/1.1 200 OK
X-Powered-By: Express
Date: Wed, 15 Feb 2023 14:49:19 GMT
Connection: close
Content-Length: 0

```

# Rainbow Table Attack
- Some malicious person get all the most popular password list across the world (e.g. `password`, `picture`, `hithere`, `test`, `mypassword`, ...)
- They could create a hash or the most popular password ahead of time
- If they get hold of the database they could compare hash against the table and could figure out the password.
- **adding salt in hashing makes it more difficult for rainbow table attack
