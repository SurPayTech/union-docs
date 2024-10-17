---
sidebar_position: 1
---


# API List

| Service                | Request Type | Endpoint                                                                  | Description                                                               | Sender Admin Role | Receiver Admin Role |
|-----------------------|--------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------|-------------------|---------------------|
| Auth                  | POST         | /union-service/auth/token                                                  | Authentication Token                                                      |  &check;          |      &check;        |
|                       | POST         | /union-service/auth/refresh-token                                          | Refresh Token                                                             |  &check;          |      &check;        |
| Transfer              | POST         | /union-service/transfers                                                   | Creates new transfer request                                              |  &check;          |      &cross;        |
|                       | POST         | /union-service/transfers/validate                                          | Validates if the transfer can be made                                     |  &check;          |      &cross;        |
|                       | POST         | /union-service/transfers/calculate-fee                                     | Calculates and returns transfer union fee for the transfer                |  &check;          |      &cross;        |
|                       | GET          | /union-service/transfers/get                                               | Gets existing transfer's information by transfer reference code           |  &check;          |      &cross;        |
|                       | GET          | /union-service/transfers/pin                                               | Gets existing transfer's pin by transfer reference code                   |  &check;          |      &cross;        |
|                       | GET          | /union-service/transfers/get-by-member-transfer-reference-code             | Gets existing transfer by member transfer reference code                  |  &check;          |      &cross;        |
|                       | GET          | /union-service/transfers/search                                            | Searches transfer with various fields                                     |  &check;          |      &cross;        |
|                       |              |                                                                            |                                                                           |                   |                     |
| Payment               | GET          | /union-service/payments/transfer-info-by-transfer-reference-code           | Gets transfer info by transfer reference code                             |  &cross;          |      &check;        |
|                       | GET          | /union-service/payments/transfer-info-by-transfer-member-reference-code    | Gets transfer info by member transfer reference code                      |  &cross;          |      &check;        |
|                       | PUT          | /union-service/payments/in-progress                                        | Marks payment in-progress for specified amount of time                    |  &cross;          |      &check;        |
|                       | DELETE       | /union-service/payments/cancel-in-progress                                 | Cancels a payment operation marked as in progress                         |  &cross;          |      &check;        |
|                       | PUT          | /union-service/payments/done                                               | Marks payment as done                                                     |  &cross;          |      &check;        |
|                       | DELETE       | /union-service/payments/reverse-done                                       | Returns a transaction which is done                                       |  &cross;          |      &check;        |
|                       |              |                                                                            |                                                                           |                   |                     |
| Branches              | GET          | /union-service/branches                                                    | Gets branch information by code                                           |  &check;          |      &check;        |
|                       | POST         | /union-service/branches                                                    | Creates branch in specified member-code                                   |  &check;          |      &check;        |
|                       | PUT          | /union-service/branches                                                    | Updates specified branch                                                  |  &check;          |      &check;        |
|                       | DELETE       | /union-service/branches                                                    | Marks branch as deleted                                                   |  &check;          |      &check;        |
|                       | GET          | /union-service/branches/search                                             | Searches for branch(es)                                                   |  &check;          |      &check;        |
|                       | POST         | /union-service/branches/branch-limit                                       | Creates branch-limit                                                      |  &check;          |      &cross;        |


## Environments

**UAT** : https://union-uat.ist-pay.com

