# Auth App

Auth App is a full-stack MERN application that provides a robust authentication system. Users can sign up, sign in, sign out, and authenticate via Google OAuth. It also includes features like cookie validation, responsive design, and account management functionalities such as deleting and Update accounts.

## Features

- **JWT-based Authentication**: Secure user authentication using JSON Web Tokens (JWT).
- **Google OAuth**: Users can sign up or sign in with their Google accounts.
- **Cookie Validation**: Enhances security by validating user sessions through cookies.
- **Responsive Design**: Works seamlessly across all devices.
- **Account Management**: Users can delete their accounts or log out securely.

## Tech Stack

- **Frontend**:
  - React
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

- **Authentication**:
  - JSON Web Token (JWT)
  - Google OAuth

## Project Structure

```plaintext
├── api               # Backend 
│   ├── models        # Database models
│   ├── routes        # API routes
│   ├── controllers   # Route controllers
│   ├── util          #Contain Custom middleware, error and errorHandler for authentication
│   └── inedx.js      # Entry point for the backend server
│
└── client            # Frontend code
    ├── src
    │   ├── components # Reusable components
    │   ├── pages      # React pages
    │   └── app.jsx
    │   └── main.jsx   # Main entry file for React
    |── public         # Static assets
    └── index.htnl     
