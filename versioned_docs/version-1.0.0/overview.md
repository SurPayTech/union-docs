---
sidebar_position: 1
---

# Overview 

Welcome to the technical reference for the Union API multinational money transfer application! 
Here you will find methods that Union offers with its description, its way of usage and how members can use these APIs to integrate into Union to send transactions.
Our application enables secure and efficient cash transfers across borders. Through our/member’s network of agencies and branches, senders can initiate money transfers, which will then be received by us for further processing. The funds will be delivered to the intended recipients after their verification through authorized agencies or branches.
If you have any questions, feedback, or need assistance, don't hesitate to reach out to our support team.


## Audience

Our application and API are designed to serve financial institutions and money transfer agencies who require reliable and seamless international money transfer services. Whether you are an established business or an individual user, our application offers a user-friendly and robust platform for your money transfer needs.


This document is intended for use by

- Union technical team
- Member technical team


### General API Standards

- **For all API’s below table describes standard data formats.**

| Type                | Format                                                                                     | Example                  |
|---------------------|--------------------------------------------------------------------------------------------|--------------------------|
| Currency Codes      | [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)                                        | USD                      |
| Country Codes       | [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) (2 Digits)                        | US                       |
| Phone Numbers       | [E.164](https://en.wikipedia.org/wiki/E.164) (2 Digit)                                   | +16175551212             |
| Date                | YYYY-MM-DD                                                                                 | 2023-01-25               |
| DateTime (UTC)     | YYYY-MM-DD HH24:MI:SS                                                                     | 2023-01-25 16:23:59      |
| DateTime (Timezone) | YYYY-MM-DD HH24:MI:SS TZH:TZM                                                             | 2023-01-25 16:23:59 +03:00 |
| Output DateTime     | YYYY-MM-DD HH24:MI:SS                                                                     | 2023-01-25 16:23:59 (Always UTC) |
| Errors              | ProblemDetails - [RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807)               |                          |                       
| Type                | Format                                                                                     | Example                  |
| Required Parameters | Required                                                                           | *                  |

* **For all API’s below Http status codes are standard.**

| Code | Description                                                                                     |
|------|-------------------------------------------------------------------------------------------------|
| 400  | Something is wrong with the request. Causes are returned in Problem details format at response. Fix the request and try again. |
| 404  | Specified resource not found. Either endpoint or record not found.                             |
| 422  | Validation error occurred. See Problem details, fix the request and try again.                |
| 500  | Internal server error. If you are sure you are sending the correct request, please contact IstPay. |

* For all API’s  **api-version** is **1** as default. If you would like another version it can be specified with any API. 
For ex: **POST /transfers?api-version=1**

| Code        | Description                     |
|-------------|---------------------------------|
| api-version | The requested API version       |

- **Rate Limiting**

To maintain system stability and prevent abuse, our API implements rate limiting. This means there are limits on the number of API requests you can make within a certain time frame. The rate limit details, including the allowed number of requests and the time window, will be provided separately.

We are committed to providing a reliable and developer-friendly API experience. The following sections will dive into the specific details of each endpoint, authentication process, error handling, and more. If you have any questions or require further assistance, please reach out to our support team.

### Role/API Structure
Union has authorization for every APIs. This Role/API matrix defines which role accesses which APIs.

- **Sender Admin Role** is used for sender members and parent branches that are allowed to send money. 
Members who have this role can access Transfer and Member services.
- **Receiver Admin Role** is used for receiver members and parent branches that are allowed to receive money. 
Members who have this role can access Payment and Member services.

Some abbreviations are used to increase the readability of the table. Explanations are given below:
- OM (Only Member): This abbreviation represents that the method can be called only for the  member itself. Members can create, update, read, and delete for themselves. 
- ALL (Member and Branch): This abbreviation represents that the method can be called for the member itself and its sub-branches. Members can create, update, read, and delete for themselves and on behalf of their sub-branches.
  - For these payment services, members can only call these methods if Payments In-progress API is called.
    - payments/cancel-in-progress
    - payments/done
    - payments/cancel-done
