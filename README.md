This README.md file for the backend server repository, including setup instructions, endpoint descriptions, and additional features. This file is designed to help users set up and use your Express server implemented with TypeScript.

```markdown
# Backend Server for Submission Management

This repository contains the backend server implemented using Express and TypeScript for managing form submissions. The server provides endpoints to handle submissions, retrieve data, and manage the submission data stored in a JSON file.

## Features

- **/ping**: A simple GET request to check if the server is running.
- **/submit**: A POST request to save submission data to a JSON file.
- **/read**: A GET request to retrieve a specific submission by index.
- **Delete and Edit Submissions**: Endpoints to delete or edit submissions.
- **Search Functionality**: An endpoint to search for submissions by email ID or other criteria.

## Endpoints

### /ping

- **Method**: GET
- **Description**: Returns "true" to check if the server is running.
- **Response**: `true`

### /submit

- **Method**: POST
- **Description**: Saves a new submission to the JSON database.
- **Body Parameters**:
  - `name`: String
  - `email`: String
  - `phone`: String
  - `github_link`: String
  - `stopwatch_time`: String
- **Response**: JSON object of the saved submission

### /read

- **Method**: GET
- **Description**: Retrieves a specific submission by index from the JSON file.
- **Query Parameters**:
  - `index`: Integer (0-indexed)
- **Response**: JSON object of the submission at the specified index

### /delete

- **Method**: DELETE
- **Description**: Deletes a submission by index.
- **Query Parameters**:
  - `index`: Integer (0-indexed)
- **Response**: JSON object confirming the deletion

### /edit

- **Method**: PUT
- **Description**: Edits an existing submission.
- **Query Parameters**:
  - `index`: Integer (0-indexed)
- **Body Parameters**:
  - `name`: String (optional)
  - `email`: String (optional)
  - `phone`: String (optional)
  - `github_link`: String (optional)
  - `stopwatch_time`: String (optional)
- **Response**: JSON object of the updated submission

### /search

- **Method**: GET
- **Description**: Searches for submissions by email or other criteria.
- **Query Parameters**:
  - `email`: String (optional)
  - `name`: String (optional)
- **Response**: JSON array of matching submissions


### Backend Server Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/YourUsername/BackendServerRepo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd BackendServerRepo
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Ensure Node.js and TypeScript are installed on your development machine.
5. Run the server:
   ```bash
   npm start
   ```

### Windows Desktop Application Setup

1. Open the project in Visual Studio.
2. Restore NuGet packages and build the solution.
3. Configure the application to communicate with the local backend server.


## Contact

For further information, please contact [nayanK092@gmail.com].

```

This README file provides comprehensive instructions for setting up and using the backend server, including API endpoint descriptions, installation steps, and guidelines for contributing. Adjust the placeholder links and details according to your project specifics.
