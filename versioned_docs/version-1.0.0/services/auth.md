---
sidebar_label: 'Auth'
sidebar_position: 1
---

# Authorization & Authentication

To access our API endpoints, you need to authenticate your requests using JWT (JSON
Web Tokens). Upon successful registration and obtaining your API credentials, you will
receive an authentication token that needs to be included in the headers of your API
requests. This ensures the security and integrity of your transactions.


## POST /auth/token

This API is used to get JWT token that will be used to call all other services. According
to the given credentials, the system generates “Bearer| token that will be used
“Authorization” header of API’s.

:::note
Please note that “Content-Type” is “application/json”.
:::

JWT Tokens have an expiration that is specified in expires in the field. Once you get the
token you can use this token in the Authorization header for the specified amount of
time in expires in. You do not need to call this API before each API call.

The suggested scenario is, you can get JWT token and store a refresh token somewhere
secure and before the token expiration time, call Refresh JWT token. This method is
faster and more secure according to this API each time before expiring.


**Endpoint:**
```
POST /union-service/auth/token?api-version=1.0
```


### Request Fields
| Name         | Located in | Description                          | Required | Schema |
|--------------|------------|--------------------------------------|----------|--------|
| api-version  | query      | The requested API version            | No       | string |
| username     | body       | The username of the user             | Yes      | string |
| password     | body       | The password of the user             | Yes      | string |


### Response Codes

| Code | Description |
| ---- | ----------- |
| 200 | Returned authentication token |
| 500 | Internal Error |

### Response Fields

| Parameter Name       | Description                                                  |
|----------------------|--------------------------------------------------------------|
| access_token         | Token that will be used in Authorization header for subsequent API calls |
| expires_in           | Token expires in seconds                                     |
| refresh_expires_in   | Refresh token expire time in seconds                        |
| refresh_token        | Token that will be used to refresh token without credentials |
| token_type           | Always “Bearer”                                             |
| not-before-policy     | For internal use                                            |
| session_state        | For internal use                                            |
| scope                | For internal use                                            |



### Example Request

```curl
curl -X 'POST' \
  'https://{{environment}}.com/union-service/auth/token?api-version=1.0' \
  -H 'accept: application/vnd.restful+json' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "username": "string",
  "password": "string"
}'
```

**Content:**
```json
{
    "username": "member-user",
    "password": "member-password"
}
```


### Example Response

Below is an example response returned from the API:

```json
{
    "access_token": "access_token_value",
    "expires_in": 36000,
    "refresh_expires_in": 1800,
    "refresh_token": "refresh_token_value",
    "token_type": "Bearer",
    "not-before-policy": 0,
    "session_state": "session_state_value",
    "scope": "email scope profile"
}
```


## POST /auth/refresh-token

After getting a JWT token and stored refresh_token in a secure place with api 1.1 Getting
JWT token, this api can be called refresh_token.

**Endpoint:**
```
POST /union-service/auth/refresh-token?api-version=1.0
```

### Request Fields
| Name         | Located in | Description                          | Required | Schema |
|--------------|------------|--------------------------------------|----------|--------|
| api-version  | query      | The requested API version            | No       | string |
| refreshToken | body       | The refresh token of the user        | Yes      | string |

### Response Fields

| Parameter Name       | Description                                                  |
|----------------------|--------------------------------------------------------------|
| access_token         | Token that will be used in Authorization header for subsequent API calls |
| expires_in           | Token expires in seconds                                     |
| refresh_expires_in   | Refresh token expire time in seconds                        |
| refresh_token        | Token that will be used to refresh token without credentials |
| token_type           | Always “Bearer”                                             |
| not-before-policy     | For internal use                                            |
| session_state        | For internal use                                            |
| scope                | For internal use                                            |

### Response Codes

| Code | Description |
| ---- | ----------- |
| 200 | Returned new authentication token |
| 500 | Internal Error |

### Example Request

```curl 
curl -X 'POST' \
  'https://{{environment}}.com/union-service/auth/refresh-token?api-version=1.0' \
  -H 'accept: application/vnd.restful+json' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "refreshToken": "string"
}'
```

**Content:**
```json
{
    "refreshToken": "your_refresh_token_value"
}
```

### Example Response

Below is an example response returned from the API:

```json
{
    "access_token": "new_access_token_value",
    "expires_in": 36000,
    "refresh_expires_in": 1800,
    "refresh_token": "new_refresh_token_value",
    "token_type": "Bearer",
    "not-before-policy": 0,
    "session_state": "new_session_state_value",
    "scope": "email scope profile"
}
```