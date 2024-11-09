# CRUD Operation using MERN

This is a full-stack application built using the **MERN stack** (MongoDB, Express, React, Node.js). The application demonstrates how to perform **CRUD (Create, Read, Update, Delete)** operations with a MongoDB database, allowing users to add, view, edit, and delete records.

## Features

- **Add Users**: Create new user records and store them in the database.
- **View Users**: List all users from the database.
- **Update Users**: Edit existing user information.
- **Delete Users**: Remove user records from the database.

## Technologies Used

- **MongoDB**: NoSQL database used to store user data.
- **Express**: Web framework for Node.js, used to handle backend routing and API requests.
- **React**: JavaScript library for building the frontend user interface.
- **Node.js**: JavaScript runtime environment to run the backend server.

## Getting Started

Follow these steps to run the project on your local machine:

### 1. Clone the Repository

Clone the repository to your local machine:


git clone https://github.com/Nahida-Chowdhury/CRUD-operation-using-MERN.git
cd CRUD-operation-using-MERN

### 2. Set up the Backend
  **1.Navigate to the backend folder:**

  > cd backend

  **2.Install the required backend dependencies:**
  
  > npm install

  **3.Set up your MongoDB connection.** If you're using MongoDB Atlas, create an account, set up a cluster, and replace the MongoDB URI in the index.js file inside the backend folder.

  **4.Start the backend server:**

  > npm run start-dev
  This will start the server on http://localhost:5000.

### 3. Set up the Frontend
  **1.Navigate to the frontend folder:**

  > cd ../frontend

  **2.Install the required frontend dependencies:**

  > npm install

  **3.Start the frontend development server:**

  > npm start
  The frontend should now be running on http://localhost:3000.
