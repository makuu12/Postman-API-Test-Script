# Postman API-Test Script

This repository contains functional API test scripts created using **Postman**, covering two sample projects:

1. [Restful-Booker API](https://restful-booker.herokuapp.com/apidoc/index.html)
2. [OpenWeatherMap Weather API](https://openweathermap.org/api)

---

## 1. 🏨 Restful-Booker

The **Restful-Booker** Postman collection focuses on positive test scenarios for basic **CRUD operations** (Create, Read, Update, Delete). This mock service is useful for testing authentication, request structure, and endpoint validation.

🔗 **Official API documentation**: [Restful-Booker API Docs](https://restful-booker.herokuapp.com/apidoc/index.html)

### ✅ Functional API Tests Covered


#### 🔹 Get All Booking IDs
You can see the documentation in **Booking - GetBookingIds** section.

- **Method:** `GET`
- **Action:** Retrieves a list of booking IDs
- **Steps:**
  - Set method to `GET`
  - Use base URL: `https://restful-booker.herokuapp.com/booking`
  - Send request and validate response

#### 📄 Sample Response
```json
{
  "bookingid": 1
},
{
  "bookingid": 2
},
{
  "bookingid": 3
},
{
  "bookingid": 4
}
```

#### 🔹 Get Specific Booking Details
You can see the documentation in **Booking - GetBooking** section.

- **Method:** `GET`
- **Action:** Fetch details for a specific booking
- **Steps:**
  - Use endpoint with booking ID: `/booking/{id}`
  - Send request and verify returned data

  #### 📄 Sample Response
```json
{
"firstname": "Sally",
"lastname": "Brown",
"totalprice": 111,
"depositpaid": true,
"bookingdates": {
    "checkin": "2013-02-23",
    "checkout": "2014-10-23"
},
"additionalneeds": "Breakfast"
}
```

#### 🔹 Generate Auth Token
You can see the documentation in **Auth - CreateToken** section.

- **Method:** `POST`
- **Action:** Generates a token for authenticated actions
- **Steps:**
  - Use endpoint: `/auth`
  - In the body (raw JSON):
    ```json
    {
      "username": "admin",
      "password": "password123"
    }
    ```
  - Send request and store returned token

#### 📄 Sample Response
```json
{
    "token": "abc123"
}
```

#### 🔹 Create New Booking
You can see the documentation in **Booking - CreateBooking** section.

- **Method:** `POST`
- **Action:** Adds a new booking
- **Steps:**
  - Use endpoint: `/booking`
  - Provide sample booking details in body:
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "totalprice": 150,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2025-01-01",
    "checkout": "2025-01-07"
  },
  "additionalneeds": "Breakfast"
}
```

#### 🔹 Update Existing Booking
- **Method:** `PUT`
- **Action:** Modifies booking data
- **Steps:**
  - Use endpoint with booking ID: `/booking/{id}`
  - Add `Cookie` header with token: `token=your_token_here`
  - Add `Content-Type: application/json` header
  - Paste updated booking data in body

#### 🔹 Delete Booking
- **Method:** `DELETE`
- **Action:** Removes a booking entry
- **Steps:**
  - Use endpoint with booking ID: `/booking/{id}`
  - Add headers:
    - `Content-Type: application/json`
    - `Cookie: token=your_token_here`

---

## 2. 🌦️ Weather App (OpenWeatherMap)

This collection uses the [OpenWeatherMap](https://openweathermap.org/api) API to test retrieving live weather data using a city name.

### 🔑 Requirements:
- Register at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) to obtain your **API key**
- Sample endpoint:
