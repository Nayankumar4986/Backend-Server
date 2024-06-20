README file to provide clear instructions on how to set up and run your Express server with TypeScript.

### README.md

```markdown
# My Backend Server

## Overview
This is a simple backend server built with Express and TypeScript. It supports the following functionalities:
- Ping the server to check if it is running.
- Submit data to the server.
- Read specific submissions by index.
- Retrieve all submissions.

## Project Structure
```
my-backend-server/
├── src/
│   ├── index.ts
│   ├── routes/
│   │   ├── ping.ts
│   │   ├── submit.ts
│   │   ├── read.ts
│   │   └── submissions.ts
│   ├── models/
│   │   └── submission.ts
│   ├── controllers/
│   │   ├── pingController.ts
│   │   ├── submitController.ts
│   │   ├── readController.ts
│   │   └── submissionsController.ts
├── db.json
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Requirements
- Node.js
- npm (Node Package Manager)

## Installation
1. npm init -y


2. **Install dependencies:**
    ```terminal
    npm install express body-parser

    ```
3. Install TypeScript and types for Node.js and Express:
    ```terminal
    npm install typescript ts-node @types/node @types/express @types/body-parser --save-dev
    ```

4. **Build the project:**
    ```terminal
    npm run build
    ```

5. **Start the server:**
    ```terminal
    npm start
    ```

## Endpoints
### 1. Ping the Server
**GET /ping**

This endpoint checks if the server is running.

**Request:**
```terminal
 http://localhost:3000/ping
```

**Response:**
```json
true
```

### 2. Submit Data
**POST /submit**

This endpoint allows you to submit new data.

**Request:**
```terminal
POST http://localhost:3000/submit
{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "github_link": "https://github.com/johndoe",
    "stopwatch_time": "00:05:30"
}'
```

**Response:**
```json
{
    "Name": "John Doe",
    "Email": "john@example.com",
    "PhoneNumber": "1234567890",
    "GithubLink": "https://github.com/johndoe",
    "StopwatchTime": "00:05:30"
}
```

### 3. Read a Specific Submission
**GET /read?index=0**

This endpoint retrieves a specific submission by its index.

**Request:**
```terminal
http://localhost:3000/read?index=0
```

**Response:**
```json
{
    "Name": "John Doe",
    "Email": "john@example.com",
    "PhoneNumber": "1234567890",
    "GithubLink": "https://github.com/johndoe",
    "StopwatchTime": "00:05:30"
}
```

### 4. Retrieve All Submissions
**GET /submissions**

This endpoint retrieves all submissions stored in `db.json`.

**Request:**
```terminal
http://localhost:3000/submissions
```

**Response:**
```json
[
    {
        "Name": "John Doe",
        "Email": "john@example.com",
        "PhoneNumber": "1234567890",
        "GithubLink": "https://github.com/johndoe",
        "StopwatchTime": "00:05:30"
    },
    {
        "Name": "Jane Smith",
        "Email": "jane@example.com",
        "PhoneNumber": "0987654321",
        "GithubLink": "https://github.com/janesmith",
        "StopwatchTime": "00:03:15"
    }
]
```

## Development
To start the server in development mode, use:
```terminal
npm run dev
```

This will run the server using `ts-node`, which allows you to run TypeScript code directly without needing to compile it first.

## Note
Make sure your `db.json` file is present in the root directory of the project. If the file does not exist, create an empty `db.json` file or modify the path in the code accordingly.



This README provides clear instructions for setting up, running, and using the server, including example commands and expected outputs for each endpoint. Make sure to replace `yourusername` in the Git clone URL with your actual GitHub username or the repository's actual location.
