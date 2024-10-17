---
sidebar_position: 3
---

# Terminology


This section discusses the details regarding the general terminology used for documentation.


Regarding the request and response tables:

 - asterisk (*) indicates a required field. **For example**, in a request body, a field marked with an asterisk must be included to successfully process the request.
 
 - a.b refers to the **b** field of the **a** data transfer object. **For example**, in a JSON object representing an address, it could look like this:
   ```json
   {
     "address": {
       "line1": "123 Main St",
       "line2": "Apt 4B",
       "city": "Ankara",
       "province": "Ankara",
       "countryCode": "TR",
       "postalCode": "06000"
     }
   }
   ```
 
 - a[].b indicates that a is an array, and it corresponds to the **b** field of the **a** array at iteration **x**. **For example**, in a JSON object representing branch limits, it could look like this:
   ```json
   {
     "branchLimits": [
       {
         "limitType": "PerTransfer",
         "currencyCode": "USD",
         "totalLimit": 1000
       },
       {
         "limitType": "Daily",
         "currencyCode": "EUR",
         "totalLimit": 5000
       }
     ]
   }
   ```