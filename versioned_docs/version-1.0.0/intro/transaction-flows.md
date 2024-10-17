---
sidebar_position: 2
---

# Transaction Flows

## Overview
This document outlines the transaction flows for the Union API, detailing the steps involved in initiating, processing, and completing a money transfer.

The Transfer Services offered by Union that classified 3 categories:
- Transfer to Name
- Transfer to Wallet 
- Transfer to Iban 

![transaction-flows](img/transaction-flows.png)

## 1-Transfer To Name

This service enables the sender to instantly send money to the receiver’s name. The money is transferred to the receiver member. The receiver takes the money from the receiver member. A sender can initiate the money transfer by the sender member. 
Yellow arrows are used for optional services. 
In the given diagram, there are numbers on arrows that show the number of service’s sections. 

<!--![transfer-to-name](img/transfer-to-name.png)-->

```mermaid
sequenceDiagram
    participant Sender
    participant SenderMember
    participant Union
    participant ReceiverMember
    participant Receiver

    Sender->>SenderMember: Receiver (name, phone, address)
    SenderMember->>Union: Transfers Validate Request
    Union-->>SenderMember: Transfers Validate Response
    SenderMember->>Union: Transfers Fee Calculation Request
    Union-->>SenderMember: Transfers Fee Calculation Response
    SenderMember->>Union: Transfer Create Request
    Union-->>SenderMember: Transfer Create Response
    SenderMember->>Sender: Transfer Reference Code and Pin
    Sender-->Receiver: Sender shares Transfer Reference Code, Pin with Receiver
    Receiver-->ReceiverMember: Receiver physically comes to Receiver Member
    ReceiverMember->>Union: Payment in Progress Request
    Union-->>ReceiverMember: Response(Transfer/Reference/Code, Legal FullName)
    ReceiverMember->>ReceiverMember: Validates name by identity card
    ReceiverMember->>Union: Payment Done Request
    Union-->>ReceiverMember: Payment Done Response
    ReceiverMember->>Receiver: Money

```

## 2-Transfer To Wallet

This service enables the sender to instantly send money to a receiver’s wallet. The money is credited to a payment instrument associated with the receiver’s wallet. A sender can initiate the money transfer by the sender member.
Yellow arrows are used for optional services. 
In the given diagram, there are numbers on arrows that show the number of service’s sections.

<!-- ![transfer-to-wallet](img/transfer-to-wallet.png) -->

```mermaid
sequenceDiagram
    participant Sender
    participant SenderMember
    participant Union
    participant ReceiverMember
    participant Receiver

    Sender->>SenderMember: Wallet Id, Receiver Name, Phone Number, Address
    SenderMember->>Union: Validate Wallet Request Transfer-8
    Union-->>SenderMember: Validate Wallet Response

    Union->>ReceiverMember: Validates

    SenderMember->>Union: Transfers Fee Calculation Request Transfer-3
    Union-->>SenderMember: Transfers Fee Calculation Response

    SenderMember->>Union: Transfer Create Request Transfer-1
    Union-->>SenderMember: Transfer Create Response

    Union->>ReceiverMember: Transfer Request Received For Wallet
    ReceiverMember-->>Receiver: Member Notifies Customer
```

## 3-Transfer to IBAN

This service enables the sender to send money to a receiver’s bank account. The money is credited to the beneficiary's bank account. The sender can initiate the money transfer from cash over the counter. 
Yellow arrows are used for optional services. 
In the given diagram, there are numbers on arrows that show the number of service’s sections.


<!--![transfer-to-iban](img/transfer-to-iban.png)-->

```mermaid
sequenceDiagram
    participant Sender
    participant SenderMember
    participant Union
    participant ReceiverMember
    participant Receiver

    Sender->>SenderMember: 

    SenderMember->>Union: Transfer Validate Request Transfer-2
    Union ->>ReceiverMember: Validates
    Union-->>SenderMember: Transfer Validate Response

    SenderMember->>Union: Transfers Fee Calculation Request Transfer-3
    Union-->>SenderMember: Transfers Fee Calculation Response

    SenderMember->>Union: Transfer Create Request Transfer-1
    Union-->>SenderMember: Transfer Create Response

    Union->>ReceiverMember: Transfer Request Received For IBAN
    ReceiverMember->>Receiver: Member Notifies Customer
```