# Pharmacy Management System – Backend (Spring Boot)

This project is a **Pharmacy Management System backend application** developed using **Spring Boot** and **PostgreSQL**.  
It handles pharmacy orders, prescriptions, medicine dispensing, and stock management with proper transactional consistency.

---

## 🚀 Features

- Manage pharmacy orders and order items
- Dispense medicines based on prescriptions
- Track prescribed vs dispensed quantities
- Automatically update order status
- Maintain medicine stock availability
- RESTful APIs for pharmacy operations
- Transaction-safe business logic

---

## 🛠️ Tech Stack

- **Java 25**
- **Spring Boot 3.5.9**
- **Spring Data JPA**
- **Hibernate**
- **PostgreSQL**
- **Maven (Maven Wrapper)**
- **REST APIs**

---

## 📁 Project Structure

Directory structure:
└── saanjalibelgavi-pharmacy-restapi/
    ├── README.md
    ├── mvnw
    ├── mvnw.cmd
    ├── pom.xml
    ├── pharmacy/
    │   ├── README.md
    │   ├── mvnw
    │   ├── mvnw.cmd
    │   ├── pom.xml
    │   ├── src/
    │   │   ├── main/
    │   │   │   ├── java/
    │   │   │   │   └── com/
    │   │   │   │       └── crinsun/
    │   │   │   │           └── pharmacy/
    │   │   │   │               ├── PharmacyApplication.java
    │   │   │   │               ├── controller/
    │   │   │   │               │   └── PharmacyOrderController.java
    │   │   │   │               ├── dto/
    │   │   │   │               │   ├── DispenseRequestDTO.java
    │   │   │   │               │   └── PharmacyOrderItemDTO.java
    │   │   │   │               ├── entity/
    │   │   │   │               │   ├── PharmacyOrder.java
    │   │   │   │               │   ├── PharmacyOrderItem.java
    │   │   │   │               │   ├── Prescription.java
    │   │   │   │               │   └── StockItem.java
    │   │   │   │               ├── enums/
    │   │   │   │               │   ├── OrderStatus.java
    │   │   │   │               │   └── VisitType.java
    │   │   │   │               ├── repository/
    │   │   │   │               │   ├── PharmacyOrderItemRepository.java
    │   │   │   │               │   ├── PharmacyOrderRepository.java
    │   │   │   │               │   ├── PrescriptionRepository.java
    │   │   │   │               │   └── StockItemRepository.java
    │   │   │   │               └── service/
    │   │   │   │                   └── PharmacyOrderService.java
    │   │   │   └── resources/
    │   │   │       └── application.properties
    │   │   └── test/
    │   │       └── java/
    │   │           └── com/
    │   │               └── crinsun/
    │   │                   └── pharmacy/
    │   │                       └── PharmacyApplicationTests.java
    │   └── .mvn/
    │       └── wrapper/
    │           └── maven-wrapper.properties
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   │   └── com/
    │   │   │       └── crinsun/
    │   │   │           └── pharmacy/
    │   │   │               ├── PharmacyApplication.java
    │   │   │               ├── controller/
    │   │   │               │   └── PharmacyOrderController.java
    │   │   │               ├── dto/
    │   │   │               │   └── DispenseRequestDTO.java
    │   │   │               ├── entity/
    │   │   │               │   ├── PharmacyOrder.java
    │   │   │               │   ├── PharmacyOrderItem.java
    │   │   │               │   ├── Prescription.java
    │   │   │               │   └── StockItem.java
    │   │   │               ├── enums/
    │   │   │               │   ├── OrderStatus.java
    │   │   │               │   └── VisitType.java
    │   │   │               ├── repository/
    │   │   │               │   ├── PharmacyOrderItemRepository.java
    │   │   │               │   ├── PharmacyOrderRepository.java
    │   │   │               │   ├── PrescriptionRepository.java
    │   │   │               │   └── StockItemRepository.java
    │   │   │               └── service/
    │   │   │                   └── PharmacyOrderService.java
    │   │   └── resources/
    │   │       └── application.properties
    │   └── test/
    │       └── java/
    │           └── com/
    │               └── crinsun/
    │                   └── pharmacy/
    │                       └── PharmacyApplicationTests.java
    └── .mvn/
        └── wrapper/
            └── maven-wrapper.properties

---

## 📦 Domain Model

### Entities

- **PharmacyOrder**
  - Represents an order created from a prescription
  - Maintains order status and creation time

- **PharmacyOrderItem**
  - Individual medicine items in an order
  - Stores prescribed and dispensed quantities

- **Prescription**
  - Contains patient details and visit type (OPD / IPD)

- **StockItem**
  - Tracks medicine stock and available quantity

---


