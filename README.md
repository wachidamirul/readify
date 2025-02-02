# Readify - Bookstore Application

## Description

Readify is bookstore application that allows users to browse and purchase books. The application is built using MERN
Stack.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/wachidamirul/readify.git
   ```
2. Navigate to the project directory:
   ```bash
   cd readify
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### For Frontend

Follow the below steps to run the project:

- First, create firebase project and get the firebase configuration. You can follow the instruction
  [firebase.google.com](https://firebase.google.com/docs/web/setup). or you can watch the video
  [Setting Up Google Authentication in Firebase](https://www.youtube.com/watch?v=-YA5kORugeI)
- Go to the frontend directory by using the following command `cd frontend`.
- create a **.env.local** file in the backend root directory as the same level where the **package.json** is located and
  keep the following environment variables there:
  ```bash
  VITE_API_KEY=""
  VITE_Auth_Domain=""
  VITE_PROJECT_ID=""
  VITE_STORAGE_BUCKET=""
  VITE_MESSAGING_SENDERID= ""
  VITE_APPID=""
  ```

### For Backend

Follow the below steps to run the project:

- Go to the backend directory by using the following command `cd backend`.

* copy the `.env.example` file and create a new file named `.env` in the backend root directory.

## Usage

access root directory and run the following command to start the server:

```bash
npm run seed
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to view the application.
