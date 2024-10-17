---
sidebar_position: 4
---

# Error Messages

In case of errors or exceptional scenarios, our API provides informative error
responses. These responses include appropriate HTTP status codes and error
messages to help you identify and handle errors effectively. The error handling section
of our documentation will provide you with insights into the possible error scenarios
and their corresponding error codes.
Below you can find all error messages returned in ProblemDetails format

General rules are:

- First character of the Response code defines the error type. If it starts with
    - V: validation error,
    - T: Technical error
- 3-4 th characters specifies application that generates error message
    - TS: Transfer Service
    - PS: Payment Service
    - MS:Member Service

## Business Errors
| Response Code                                          | Response Messages                                                                                                           | HTTP Status |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------------|
| V-TS-LimitNotAvailable                                 | Limit not available. memberCode: iom currency: USD amount: 559.25 type: DAILY                                            | 400         |
| V-TS-TransferReferenceCodeAlreadyExists                | Member transfer reference code already exists for the member. MemberTransferReferenceCode: ffabca20-9095-4221-22ae-53e1a224f02e | 400         |
| V-TS-TransferReferenceCodeAlreadyExists                | Member transfer reference code already exists for the member. MemberTransferReferenceCode: ffabca20-9095-4221-22ae-53e1a224f02e | 400         |
| V-TS-CreateTransferDescriptionLengthMax256            | The length of 'Description' must be 256 characters or fewer. You entered 1512 characters.                                 | 422         |
| V-TS-CreateTransferReceiveInCountryCodeIsNotIso3166TwoDigit | The specified condition was not met for 'ReceiveInCountryCode'.                                                            | 422         |
| V-TS-CreateTransferCurrencyCodeIsNotIso4217          | The specified condition was not met for 'Currency'.                                                                        | 422         |
| V-TS-CreateTransferAmountShouldGreaterThan0           | Amount' must be greater than '0'.                                                                                         | 422         |
| V-TS-CreateTransferAmountPrecisionCannotMoreThan2     | Amount' must not be more than 32 digits in total, with allowance for 2 decimals. 2 digits and 6 decimals were found.     | 422         |
| V-TS-CreateTransferSenderBranchCodeShouldBeGiven      | SenderBranchCode' must not be empty.                                                                                      | 422         |
| V-TS-SenderCustomerBirthDateCannotBeNull              | BirthDate' must not be empty.                                                                                             | 422         |
| V-TS-SenderCustomerPhoneNumberCannotBeNull            | PhoneNumber' must not be empty.                                                                                           | 422         |
| V-TS-TransferSenderCustomerLegalFullNameShouldBeGiven | LegalFullName' must not be empty.                                                                                         | 422         |
| V-TS-CreateTransferReceiverCustomerPhoneNumberShouldBeGiven | PhoneNumber' must not be empty.                                                                                           | 422         |
| V-TS-CreateTransferReceiverCustomerLegalFullNameShouldBeGiven | LegalFullName' must not be empty.                                                                                         | 422         |
| V-TS-SenderCustomerBirthDateCannotBeNull              | BirthDate' must not be empty.                                                                                             | 422         |
| V-MS-CountryCodeIsEmpty                                | CountryCode' must not be empty.                                                                                           | 422         |
| V-MS-BranchCodeMustBe8                                 | ParentBranchCode' must be between 9 and 9 characters. You entered 12 characters.                                         | 422         |
| V-MS-ProvinceIsEmpty                                   | Province' must not be empty.                                                                                              | 422         |
| V-MS-CityIsEmpty                                       | City' must not be empty.                                                                                                  | 422         |
| V-MS-PostalCodeIsEmpty                                 | PostalCode' must not be empty.                                                                                            | 422         |

## Not Found Errors

| Response Code                                          | Response Messages                                                                                                           | HTTP Status |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------------|
| V-TS-TransferNotFound                                 | Transfer not found. transferCode: Wr8o-WuYC-bmO1                                                                         | 404         |
| V-TS-TransferNotFound                                 | Transfer not found. transferReferenceCode: Wr8o-WuYC-bmO1                                                                 | 404         |
| V-PS-PaymentNotFound                                  | Payment could not be done. transferId: Wr8o-WuYC-bmOK                                                                    | 404         |
| V-MS-FeeProfileGroupNotFound                          | FeeProfileGroup not found: Wr8o-WuYC-bmO1                                                                                 | 404         |
| V-MS-ParentBranchIsNotFound                           | Branch not found: Wr8o-WuYC-bmO1                                                                                         | 404         |
| V-MS-BranchNotFound                                   | Branch not found. BranchCode: Wr8o-WuYC-bmO1                                                                              | 404         |
| V-MS-BranchIdNotFound                                 | Branch not found: Wr8o-WuYC-bmO1                                                                                         | 404         |

## 400-Bad Request
```json
{
    "errors": {
        "last-row-index": [
            "A value for the 'last-row-index' parameter or property was not provided."
        ],
        "first-row-index": [
            "A value for the 'first-row-index' parameter or property was not provided."
        ]
    },
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "traceId": "00-e3834f94470cb1568a1c6e854b08fb52-307c6b87d61de9e1-01"
}
```

## 500-Internal Server Error
```json
{
  "type": "string",
  "title": "string",
  "status": 0,
  "detail": "string",
  "instance": "string",
  "property1": null,
  "property2": null
}
```




