# Task Management API

This project is a Task Management API built using Node.js, Express.js, and MongoDB. It allows users to perform CRUD operations on tasks, such as creating, reading, updating, and deleting tasks.

## Steps to Set Up the Project
### Prerequisites
- Install [Node.js]
- Install [MongoDB]

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-assessment.git
   cd mern-assessment

2. Install dependencies:

bash
npm install express nodemon jasonwebtoken bcrypt dotenv mongoose 

3. Create a .env file in the root directory and configure it:

plaintext
MONGO_URI=mongodb://localhost:27017/mern-assignment
PORT=3000

4. Start the development server:

bash
nodemon app

5. The API will run at http://localhost:5000.

Instructions to Test the Application

You can test the API using Postman or any HTTP client:

1. Make sure the server is running:
bash
nodemon app

2. Use the base URL for API requests:
http://localhost:3000/api

Example Request/Response for Each Endpoint
1. Fetch All Tasks

Req Body:
No request body required.

Example Response:
{
    "status": "success",
    "tasks": [
        {
            "_id": "675863074398785d9be2ca48",
            "title": "finish backend API",
            "description": "today is last deadline of finishing backedn task apis",
            "completed": false,
            "createdAt": "2024-12-10T15:49:27.561Z",
            "__v": 0
        },
        {
            "_id": "6759bfb4aec9d623c332c674",
            "title": "new feature as per figma",
            "description": "feature must follow the new figma design ",
            "completed": false,
            "createdAt": "2024-12-11T16:37:08.321Z",
            "__v": 0
        },
        {
            "_id": "6759bfcaaec9d623c332c677",
            "title": "new feature as per figma",
            "description": "feature must follow the new figma design ",
            "completed": false,
            "createdAt": "2024-12-11T16:37:30.479Z",
            "__v": 0
        },
        {
            "_id": "6759c238d9ec91cdb6b83554",
            "title": "new model of recruitment",
            "description": "model has been added as per client demand",
            "completed": false,
            "createdAt": "2024-12-11T16:47:52.261Z",
            "__v": 0
        },
    ]
}

2. Create a New Task
Endpoint: POST /tasks
Description: Creates a new task.
Example Request:
json
{
    "title": "new task",
    "description": "last dead line today"
}
Example Response:
json
{
    "status": "success",
    "message": "Task created successfully",
    "newTask": {
        "title": "new task",
        "description": "last dead line today",
        "completed": false,
        "_id": "675a777d5faadcefdb855de7",
        "createdAt": "2024-12-12T05:41:17.796Z",
        "__v": 0
    }
}

3. Fetch a Single Task
No request body required.

Example Response:
{
    "status": "success",
    "task": {
        "_id": "675a777d5faadcefdb855de7",
        "title": "new task",
        "description": "last dead line today",
        "completed": false,
        "createdAt": "2024-12-12T05:41:17.796Z",
        "__v": 0
    }
}

4. Update a Task
Endpoint: PUT /tasks/:id
Description: Updates an entire task.

Example Request:
json
{
    "title": "new task",
    "description": "last dead line today",
    "completed": true
}

Example Response:
{
    "status": "success",
    "message": "Task updated successfully"
}

5. Update Specific Fields
Endpoint: PATCH /tasks/:id
Description: Updates specific fields of a task.
Example Request: 
{
  "completed": true
}
Example Response:
{
    "status": "success",
    "message": "Task updated successfully"
}

6. Delete a Task
Endpoint: DELETE /tasks/:id
Description: Deletes a task by its ID.
Example Request:
json
No request body required.

Example Response:
{
    "status": "success",
    "message": "Task deleted successfully"
}


If you're feeling overwhelmed, let's simplify the process. I'll provide you with a straightforward, ready-to-use README.md template based on your assignment. You can copy, edit, and adjust it to fit your project as needed.

README.md Template
markdown
Copy code
# Task Management API

This project is a Task Management API built using Node.js, Express.js, and MongoDB. It allows users to perform CRUD operations on tasks, such as creating, reading, updating, and deleting tasks.

---

## Steps to Set Up the Project

### Prerequisites
- Install [Node.js](https://nodejs.org/) (v14 or higher).
- Install [MongoDB](https://www.mongodb.com/) or use a MongoDB Atlas connection.

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-assessment.git
   cd mern-assessment
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and configure it:

plaintext
Copy code
MONGO_URI=<your-mongo-connection-string>
PORT=5000
Start the development server:

bash
Copy code
npm start
The API will run at http://localhost:5000.

Instructions to Test the Application
You can test the API using Postman or any HTTP client:

Make sure the server is running:

bash
Copy code
npm start
Use the base URL for API requests:

bash
Copy code
http://localhost:5000/api
Use the endpoints listed below to interact with the application.

Example Request/Response for Each Endpoint
1. Fetch All Tasks
Endpoint: GET /tasks
Description: Fetches all tasks in the database.
Example Request:
json
Copy code
No request body required.
Example Response:
json
Copy code
{
  "status": "success",
  "tasks": [
    {
      "_id": "64f1c6d9c59e80017d7f56a",
      "title": "Sample Task",
      "description": "This is a sample task",
      "completed": false
    }
  ]
}
2. Create a New Task
Endpoint: POST /tasks
Description: Creates a new task.
Example Request:
json
Copy code
{
  "title": "New Task",
  "description": "Description of the task",
  "completed": false
}
Example Response:
json
Copy code
{
  "status": "success",
  "message": "Task created successfully"
}
3. Fetch a Single Task
Endpoint: GET /tasks/:id
Description: Fetches a specific task by its ID.
Example Request:
json
Copy code
No request body required.
Example Response:
json
Copy code
{
  "status": "success",
  "task": {
    "_id": "64f1c6d9c59e80017d7f56a",
    "title": "Sample Task",
    "description": "This is a sample task",
    "completed": false
  }
}
4. Update a Task
Endpoint: PUT /tasks/:id
Description: Updates an entire task.
Example Request:
json
Copy code
{
  "title": "Updated Title",
  "description": "Updated Description",
  "completed": true
}
Example Response:
json
Copy code
{
  "status": "success",
  "message": "Task updated successfully"
}
5. Update Specific Fields
Endpoint: PATCH /tasks/:id
Description: Updates specific fields of a task.
Example Request:
json
Copy code
{
  "completed": true
}
Example Response:
json
Copy code
{
  "status": "success",
  "message": "Task updated successfully"
}
6. Delete a Task
Endpoint: DELETE /tasks/:id
Description: Deletes a task by its ID.
Example Request:
json
Copy code
No request body required.
Example Response:
json
Copy code
{
  "status": "success",
  "message": "Task deleted successfully"
}

# Notes
For all requests, ensure you provide valid data and task IDs.
Use Postman to manually test each endpoint.


