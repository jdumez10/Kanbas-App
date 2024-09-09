# Kanbas-App

**Kanbas-App** is a data-driven single-page web application built with **React.js** on the client-side and **Node.js** on the server-side. It mimics a course management system similar to Canvas, offering features like user authentication, course management, module and assignment creation, and grade management. The app integrates with a MongoDB database to store persistent data on users, courses, assignments, and more. This app also provides RESTful APIs for managing the data through its server-side Node.js application.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [APIs](#apis)
7. [Contributing](#contributing)
8. [License](#license)

---

## Overview

The **Kanbas-App** is designed to simulate an online learning management system (LMS) that allows users to manage courses, students, assignments, and grades. It incorporates modern web development technologies, including React.js for the front end, Node.js/Express for the back end, and MongoDB as the database. This app includes both client-side and server-side functionality for a complete full-stack project.

## Features

- **Single Page Application (SPA)**: Implemented using React Router for seamless navigation between pages.
- **Data-Driven UI**: Courses, assignments, users, and modules are dynamically generated from a MongoDB database.
- **User Authentication**: Supports user login, signup, and protected routes for authenticated users.
- **RESTful API**: Server-side APIs to manage CRUD operations for courses, assignments, and grades.
- **Course Management**: Users can view and manage course details, modules, and assignments.
- **Assignment Editor**: Create and update assignments and their due dates, submission types, and associated grades.
- **Real-Time Data**: Client-side operations using Axios for real-time server interaction.
  
---

## Installation

To get started, clone the repository and install the necessary dependencies:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/jdumez10/Kanbas-App.git
    cd Kanbas-App
    ```

2. **Install dependencies**:

    ```bash
    # For client-side
    cd client
    npm install

    # For server-side
    cd ../server
    npm install
    ```

3. **Environment Variables**:
   Add the `.env` file for the server to configure MongoDB, JWT tokens, and other secrets.

---

## Usage

### Running the Client

1. Navigate to the client folder:
    ```bash
    cd client
    npm start
    ```

2. This will launch the React.js application on `http://localhost:3000`.

### Running the Server

1. Navigate to the server folder:
    ```bash
    cd server
    npm run dev
    ```

2. The server will start on `http://localhost:4000`.

### MongoDB Setup

Make sure MongoDB is running locally or connect to a cloud instance. Set up the connection string in the server’s `.env` file.

```env
MONGO_URI=mongodb://localhost:27017/kanbas
JWT_SECRET=your_jwt_secret
