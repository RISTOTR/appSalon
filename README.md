# Reservation App

This is a FULLSTACK MEVN (MongoDB, Expres.js, Vue.js and NODE.js) app. The application includes user authentication with hashed passwords and an admin role. The frontend is built with Vue.js and the backend uses Node.js with MongoDB as the database.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User authentication and authorization
- Make, cancel, and delete reservations
- Admin role for managing reservations
- Password hashing for security
- Responsive UI with Vue.js and Tailwind CSS

## Technologies

### Frontend

- [@formkit/vue](https://formkit.com/)
- [date-fns](https://date-fns.org/) (v3.6.0)
- [pinia](https://pinia.vuejs.org/) (v2.1.7)
- [vue](https://vuejs.org/) (v3.4.21)
- [vue-router](https://router.vuejs.org/) (v4.3.0)
- [vue-tailwind-datepicker](https://github.com/kenhyuwa/vue-tailwind-datepicker) (v1.7.3)
- [vue-toast-notification](https://github.com/ankurk91/vue-toast-notification) (v3.1.2)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend

- [bcrypt](https://www.npmjs.com/package/bcrypt) (v5.1.1)
- [cors](https://www.npmjs.com/package/cors) (v2.8.5)
- [date-fns](https://date-fns.org/) (v3.6.0)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (v9.0.2)
- [nodemailer](https://nodemailer.com/about/) (v6.9.13)
- [nodemon](https://www.npmjs.com/package/nodemon) (v3.1.2)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/reservation-app.git
    cd reservation-app
    ```

2. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

3. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

4. Set up environment variables backend:

   Create a `.env` file in the `backend` directory with the following variables:
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    EMAIL_HOST=your_email_host
    EMAIL_PORT=your_email_port
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_password
    ```

5. Set up environment variables frontend:

   Create a `.env` file in the `frontend` directory with the following variables:
    ```env
    VITE_API_URL = http://127.0.0.1:8080/api
    ```

## Usage

1. Start the backend server:
    ```bash
    cd backend
    npm run dev
    ```

2. Start the frontend development server:
    ```bash
    cd frontend
    npm run serve
    ```

3. Open your browser and navigate to `http://localhost:8080`.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Authenticate a user and get a token

### Reservations

- `POST /api/reservations`: Create a new reservation
- `GET /api/reservations`: Get all reservations (admin only)
- `GET /api/reservations/:id`: Get a specific reservation
- `PUT /api/reservations/:id`: Update a reservation
- `DELETE /api/reservations/:id`: Delete a reservation

### Users

- `GET /api/users`: Get all users (admin only)
- `GET /api/users/:id`: Get a specific user (admin only)
- `DELETE /api/users/:id`: Delete a user (admin only)



