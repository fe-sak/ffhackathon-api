# ffhackathon-api

url: https://ff-hackhaton-api.herokuapp.com

| Method /route | expected body                            | response  | Info            |   |
|---------------|------------------------------------------|-----------|-----------------|---|
| GET /health   |                                          | Ok        |                 |   |
| POST /users   | {   email: string,   password: string  } | Ok        | Register a user |   |
| POST /auth    | {   email: string,   password: string  } | jwt token | Log in a user   |   |
