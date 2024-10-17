---
sidebar_label: Branches
sidebar_position: 3
---

# Branches
Branch Post APIs are used for creating, updating, and soft deleting branches. Branch
Get APIs are used for searching

## Get Branch Information

Gets branch information by code

Searches for branch(es) using parameters

#### URL

```
GET /union-service/branches?member-code={{MemberCode}}&branch-code={{BranchCode}}&embed-limits=true&embed-address=true&isInternalMessage=true&api-version=1.0
```

#### Request Fields
| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| member-code | query |  | Yes | string |
| branch-code | query |  | Yes | string |
| embed-limits | query | Specifies return value will include branch limits or  not. Default is false | No | boolean |
| embed-address | query | Specifies return value will include branch address  or not. Default is false | No | boolean |
| isInternalMessage | query | for internal use. Default is false | No | boolean |
| api-version | query | The requested API version | No | string |

#### Response Fields
| Name                             | Located in | Description                                             | Required | Schema   |
|-----------------------------------|------------|---------------------------------------------------------|----------|----------|
| parentBranchCode                  | Body       | Parent Branch Code if Exists                            | No       | string \| null |
| branchAddress.line1               | Body       | Free format address line 1                              | Yes      | string |
| branchAddress.line2               | Body       | Free format address line 2                              | No       | string \| null |
| branchAddress.countryCode         | Body       | Country Code (ISO 3166 1 alpha 2)                       | No       | string \| null |
| branchAddress.province            | Body       | State Province                                          | No       | string \| null |
| branchAddress.city                | Body       | State City                                              | No       | string \| null |
| branchAddress.postalCode          | Body       | Postal Code                                             | No       | string \| null |
| coordinate.latitude               | Body       | Latitude                                                | No       | string \| null |
| coordinate.longitude              | Body       | Longitude                                               | No       | string \| null |
| branchName                        | Body       | Branch Name (max 32 char)                               | No       | string \| null |
| branchCode                        | Body       | Branch Code (Min 1 char)                                | Yes      | string |
| createdAt                         | Body       | Branch Creation Date                                    | No       | date-time |
| updatedAt                         | Body       | Branch Last Update Date                                 | No       | date-time \| null |
| branchLimits[].limitType          | Body       | Allowed values: **PerTransfer** \| **Daily** \| **Monthly** \| **Yearly** \| **MinBalance** | Yes      | enum |
| branchLimits[].currencyCode       | Body       | Currency Code (Min 1 char)                              | Yes      | string |
| branchLimits[].totalLimit         | Body       | Total limit                                             | Yes      | decimal |

#### Response Codes

| Code | Description |
| ---- | ----------- |
| 200 | Returned found branch |
| 404 | Branch not found |
| 500 | Internal Error |

#### Example Request 

```curl
curl -X 'GET' \
  'https://{{environment}}.com/union-service/branches?member-code={{MemberCode}}&branch-code={{BranchCode}}&embed-limits=true&embed-address=true&isInternalMessage=true&api-version=1.0' \
  -H 'accept: application/vnd.restful+json'
```
#### Example Response 

```json
[
  {
    "parentBranchCode": "121212-00001",
    "branchAddress": {
      "line1": "Alabama street",
      "line2": "No 3 apartment 44",
      "countryCode": "US",
      "province": "Missouri",
      "city": "New York",
      "postalCode": "34223"
    },
    "coordinate": {
      "latitude": "55.875166",
      "longitude": "-5.974943"
    },
    "branchName": "Ist-Pay",
    "branchCode": "121212-00092",
    "createdAt": "2001-05-24 14:03:28",
    "updatedAt": "2022-07-28 14:08:55",
    "branchLimits": [
      {
        "limitType": "PerTransfer",
        "currencyCode": "USD",
        "totalLimit": 100000
      }
    ]
  }
]
```

## Create Branch

It is used to create a branch in specified member code.

#### URL
```
POST /union-service/branches?api-version=1.0
```

#### Request Fields
| Name                             | Located in | Description                                             | Required | Schema  |
|-----------------------------------|------------|---------------------------------------------------------|----------|--------|
| branchName                        | Body       | Branch Name (max 16 char)                               | Yes      | string |
| memberCode                        | Body       | Member Code                                             | Yes      | string |
| branchCode                        | Body       | Branch Code of the Branch                               | Yes      | string |
| parentBranchCode                  | Body       | Parent Branch Code if Exists                            | No       | string |
| line1                             | Body       | Free format address line 1 (max 256 char)               | Yes      | string |
| line2                             | Body       | Free format address line 2 (max 256 char)               | No       | string |
| countryCode                       | Body       | Country Code (ISO 3166 1 alpha 2)                       | No       | string |
| province                          | Body       | State Province                                          | No       | string |
| city                              | Body       | Country City                                            | No       | string |
| postalCode                        | Body       | Postal Code                                             | No       | string |
| latitude                          | Body       | Latitude (2-11 char)                                    | No       | string |
| longitude                         | Body       | Longitude (2-11 char)                                   | No       | string |
| api-version                       | query      | The requested API version                               | No       | string |

#### Response Fields
| Name                             | Located in | Description                                             | Required | Schema   |
|-----------------------------------|------------|---------------------------------------------------------|----------|----------|
| parentBranchCode                  | Body       | Parent Branch Code if Exists                            | No       | string   |
| branchAddress.line1               | Body       | Free format address line 1                              | Yes      | string   |
| branchAddress.line2               | Body       | Free format address line 2                              | No       | string   |
| branchAddress.countryCode         | Body       | Country Code (ISO 3166 1 alpha 2)                       | No       | string   |
| branchAddress.province            | Body       | State Province                                          | No       | string   |
| branchAddress.city                | Body       | State City                                              | No       | string   |
| branchAddress.postalCode          | Body       | Postal Code                                             | No       | string   |
| coordinate.latitude               | Body       | Latitude                                                | No       | string   |
| coordinate.longitude              | Body       | Longitude                                               | No       | string   |
| branchName                        | Body       | Branch Name (max 16 char)                               | No       | string   |
| branchCode                        | Body       | Branch Code (Min 1 char)                                | Yes      | string   |

#### Response Codes

| Code | Description |
| ---- | ----------- |
| 201 | Branch successfully created |
| 400 | Problem details |
| 500 | Internal Error |

#### Example Request 
#### Endpoint

```json
{
  "branchName": "Ist-Pay",
  "memberCode": "string",
  "branchCode": "121212",
  "parentBranchCode": "121212-00001",
  "line1": "Alabama street",
  "line2": "No 3 apartment 44",
  "countryCode": "US",
  "province": "Missouri",
  "city": "St Louis",
  "postalCode": "34223",
  "latitude": "55.875166",
  "longitude": "-5.974943"
}
```
```curl
curl -X 'POST' \
  'https://{{environment}}.com/union-service/branches?api-version=1.0' \
  -H 'accept: application/vnd.restful+json' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "branchName": "Ist-Pay",
  "memberCode": "string",
  "branchCode": "121212",
  "parentBranchCode": "121212-00001",
  "line1": "Alabama street",
  "line2": "No 3 apartment 44",
  "countryCode": "US",
  "province": "Missouri",
  "city": "St Louis",
  "postalCode": "34223",
  "latitude": "55.875166",
  "longitude": "-5.974943"
}'
```
#### Example Response 

```json
{
  "parentBranchCode": "121212-00001",
  "branchAddress": {
    "line1": "Alabama street",
    "line2": "No 3 apartment 44",
    "countryCode": "US",
    "province": "Missouri",
    "city": "New York",
    "postalCode": "34223"
  },
  "coordinate": {
    "latitude": "55.875166",
    "longitude": "-5.974943"
  },
  "branchName": "Ist-Pay",
  "branchCode": "121212-00092"
}
```

## Update Branch 

Updates specified branch

#### URL
``` 
PUT /union-service/branches?api-version=1.0
```

#### Request Fields
| Name                             | Located in | Description                                             | Required | Schema  |
|-----------------------------------|------------|---------------------------------------------------------|----------|--------|
| branchName                        | Body       | Branch Name (max 16 char)                               | Yes      | string |
| memberCode                        | Body       | Member Code                                             | Yes      | string |
| branchCode                        | Body       | Branch Code of the Branch                               | Yes      | string |
| parentBranchCode                  | Body       | Parent Branch Code if Exists                            | No       | string |
| line1                             | Body       | Free format address line 1 (max 256 char)               | Yes      | string |
| line2                             | Body       | Free format address line 2 (max 256 char)               | No       | string |
| countryCode                       | Body       | Country Code (ISO 3166 1 alpha 2)                       | No       | string |
| province                          | Body       | State Province                                          | No       | string |
| city                              | Body       | Country City                                            | No       | string |
| postalCode                        | Body       | Postal Code                                             | No       | string |
| latitude                          | Body       | Latitude (2-11 char)                                    | No       | string |
| longitude                         | Body       | Longitude (2-11 char)                                   | No       | string |
| api-version                       | query      | The requested API version                               | No       | string |

#### Response Fields
| Name                             | Located in | Description                                             | Required | Schema   |
|-----------------------------------|------------|---------------------------------------------------------|----------|----------|
| parentBranchCode                  | Body       | Parent Branch Code if Exists                            | No       | string   |
| branchAddress.line1               | Body       | Free format address line 1                              | Yes      | string   |
| branchAddress.line2               | Body       | Free format address line 2                              | No       | string   |
| branchAddress.countryCode         | Body       | Country Code (ISO 3166 1 alpha 2)                       | No       | string   |
| branchAddress.province            | Body       | State Province                                          | No       | string   |
| branchAddress.city                | Body       | State City                                              | No       | string   |
| branchAddress.postalCode          | Body       | Postal Code                                             | No       | string   |
| coordinate.latitude               | Body       | Latitude                                                | No       | string   |
| coordinate.longitude              | Body       | Longitude                                               | No       | string   |
| branchName                        | Body       | Branch Name (max 16 char)                               | No       | string   |
| branchCode                        | Body       | Branch Code (Min 1 char)                                | Yes      | string   |

#### Response Codes

| Code | Description |
| ---- | ----------- |
| 201 | Branch successfully created |
| 400 | Problem details |
| 404 | Branch not found |
| 500 | Internal Error |

#### Example Request 
#### Endpoint

```json
{
  "branchName": "Ist-Pay",
  "memberCode": "string",
  "branchCode": "121212",
  "parentBranchCode": "121212-00001",
  "line1": "Alabama street",
  "line2": "No 3 apartment 44",
  "countryCode": "US",
  "province": "Missouri",
  "city": "St Louis",
  "postalCode": "34223",
  "latitude": "55.875166",
  "longitude": "-5.974943"
}
```
```curl
curl -X 'PUT' \
  'https://{{environment}}.com/union-service/branches?api-version=1.0' \
  -H 'accept: application/vnd.restful+json' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "branchName": "Ist-Pay",
  "memberCode": "string",
  "branchCode": "121212",
  "parentBranchCode": "121212-00001",
  "line1": "Alabama street",
  "line2": "No 3 apartment 44",
  "countryCode": "US",
  "province": "Missouri",
  "city": "St Louis",
  "postalCode": "34223",
  "latitude": "55.875166",
  "longitude": "-5.974943"
}'
```
#### Example Response 

```json
{
  "parentBranchCode": "121212-00001",
  "branchAddress": {
    "line1": "Alabama street",
    "line2": "No 3 apartment 44",
    "countryCode": "US",
    "province": "Missouri",
    "city": "New York",
    "postalCode": "34223"
  },
  "coordinate": {
    "latitude": "55.875166",
    "longitude": "-5.974943"
  }
}
```


## Delete Branch

Deletes branch if no transaction happened.

#### URL
``` 
DELETE /union-service/branches?api-version=1.0
```

#### Request Fields
| Name         | Located in | Description                                   | Required | Schema      |
|--------------|------------|-----------------------------------------------|----------|-------------|
| api-version   | query      | The requested API version                     | No       | string      |
| branchCode   | Body       | Branch Code of the Branch                     | Yes      | string      |
| memberCode   | Body       | Member Code                                   | Yes      | string      |

#### Response Fields
| Name                     | Located in | Description                      | Required | Schema   |
|--------------------------|------------|----------------------------------|----------|----------|
| success                  | body       |  Response of delete branch       | No       | boolean   |


#### Response Codes

| Code | Description |
| ---- | ----------- |
| 200 | Branch successfully deleted |
| 400 | Problem details |
| 404 | Branch not found | 
| 500 | Internal Error |

#### Example Request 
#### Endpoint

```json
{
  "branchCode": "121212",
  "memberCode": "3tR5-ZKGT"
}
```
```curl
curl -X 'DELETE' \
  'https://{{environment}}.com/union-service/branches?api-version=1.0' \
  -H 'accept: application/vnd.restful+json' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "branchCode": "121212",
  "memberCode": "3tR5-ZKGT"
}'
```
#### Example Response 

```json
{
  "success": false
}
```

## Search Branches

Searches for branch(es) using parameters

#### URL
``` 
GET /union-service/branches/search?api-version=1.0
```

#### Request Fields
| Name                | Located in | Description                                   | Required | Schema      |
|---------------------|------------|-----------------------------------------------|----------|-------------|
| member-code         | query      | Member code.                                 | Yes      | string      |
| branchname          | query      | Branch Name                                  | Yes      | string      |
| parent-branch-code  | query      | Parent Branch Code if Exists                 | No       | string      |
| address-includes    | query      | Free format address line                     | No       | string      |
| country-code        | query      | Country Code (ISO 3166 1 alpha 2)            | No      | string      |
| province            | query      | State Province (ignore case)                 | No      | string      |
| province-includes   | query      | State Province Includes (ignore case)        | No       | string      |
| city                | query      | State City (ignore case)                     | No      | string      |
| city-includes       | query      | State City Includes (ignore case)            | No       | string      |
| postal-code         | query      | Postal Code                                  | No      | string      |
| first-row-index     | query      | Gets or sets the number of items to retrieve from the beginning. | Yes      | int32       |
| last-row-index      | query      | Gets or sets the number of items to retrieve from the end. | Yes      | int32       |
| api-version         | query      | The requested API version                    | No       | string      |


#### Response Fields

| Field                             | Type     | Description                          |
|-----------------------------------|----------|--------------------------------------|
| parentBranchCode                  | string   | Parent Branch Code                   |
| branchAddress.line1               | string   | Address line 1                       |
| branchAddress.line2               | string   | Address line 2                       |
| branchAddress.countryCode          | string   | Country Code                         |
| branchAddress.province            | string   | State Province                       |
| branchAddress.city                | string   | City                                 |
| branchAddress.postalCode          | string   | Postal Code                          |
| coordinate.latitude               | string   | Latitude                             |
| coordinate.longitude              | string   | Longitude                            |
| branchName                        | string   | Branch Name                          |
| branchCode                        | string   | Branch Code                          |
| createdAt                         | date-time| Creation date                        |
| updatedAt                         | date-time| Last update date                    |
| branchLimits[].limitType      | enum     | Allowed values: PerTransfer, Daily, Monthly, Yearly, MinBalance |
| branchLimits[].currencyCode    | string   | Currency Code                        |
| branchLimits[].totalLimit      | decimal   | Total limit                          |

#### Response Codes

| Code | Description |
| ---- | ----------- |
| 200 | Returned found branch(es) | 
| 500 | Internal Error |

#### Example Request 

```
https://{{environment}}.com/union-service/branches/search?branchName={{branchName}}&parent-branch-code={{pbCode}}&address-includes={{text}}&country-code={{countryCode}}&province={{province}}&province-includes={{text}}&city={{city}}&city-includes={{text}}&postal-code={{postalCode}}&first-row-index={{firstIndex}}&last-row-index={{lastIndex}}&api-version=1.0
```

#### Example Response 

```json
[
  {
    "parentBranchCode": "121212-00001",
    "branchAddress": {
      "line1": "123 Main St",
      "line2": "Suite 100",
      "countryCode": "US",
      "province": "California",
      "city": "Los Angeles",
      "postalCode": "90001"
    },
    "coordinate": {
      "latitude": "34.0522",
      "longitude": "-118.2437"
    },
    "branchName": "Ist-Pay",
    "branchCode": "121212",
    "createdAt": "2024-10-14T10:45:00.096Z",
    "updatedAt": "2024-10-14T10:45:00.096Z",
    "branchLimits": [
      {
        "limitType": "PerTransfer",
        "currencyCode": "USD",
        "totalLimit": 100000
      }
    ]
  }
]
```


## Create Branch Limits

This API is used for transaction limit restrictions such as daily transaction limit or monthly transaction limit for branches.

#### URL
``` 
POST /union-service/branches/branch-limit
```

#### Request Fields
| Name           | Located in | Description                                                               | Required | Schema      |
|----------------|------------|---------------------------------------------------------------------------|----------|-------------|
| memberCode     | body       | Unique identifier for the member.                                         | Yes      | string      |
| limitType      | body       | Allowed: PerTransfer, Daily, Monthly, Yearly, MinBalace                   | Yes      | enum        |
| currencyCode   | body       | Currency code in ISO 4217 format.                                         | Yes      | string      |
| totalLimit     | body       | The total limit for the specified branch.                                 | Yes      | decimal     |
| branchCode     | body       | Unique identifier for the branch.                                         | Yes      | string      |


#### Response Fields
| Name           | Located in | Description                                                               | Required | Schema      |
|----------------|------------|---------------------------------------------------------------------------|----------|-------------|
| limitType      | body       | The type of limit set for the branch. Allowed values: PerTransfer, Daily, Monthly, Yearly, MinBalace | Yes      | enum        |
| currencyCode   | body       | The currency code associated with the limit, formatted according to ISO 4217 standards. | Yes      | string      |
| totalLimit     | body       | The total limit that has been set for the branch.                        | Yes      | decimal      |
| createdAt      | body       | The date and time when the limit was created.                           | Yes      | date-time   |

#### Response Codes

| Code | Description |
| ---- | ----------- |
| 200 | The branch limit can be created. |
| 400 | Problem details |
| 500 | Internal Error |

#### Example Request 
#### Endpoint

```json
{
  "memberCode": "{{MemberCode}}",
  "limitType": "Daily",
  "currencyCode": "USD",
  "totalLimit": "1000",
  "branchCode": "{{BranchCode}}"
}
```
#### Example Response 

```json
{
    "CreatedAt": "2024-09-16 09:29:17",
    "LimitType": "Daily",
    "CurrencyCode": "USD",
    "TotalLimit": 1000
}
```
