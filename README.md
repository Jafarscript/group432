### Introduction

The **Expense Tracker** is a full-stack web application designed to help users manage their finances by tracking daily expenses. Built using the MERN stack—**MongoDB**, **Express.js**, **React.js**, and **Node.js**—the app provides an efficient, seamless, and organized way to monitor expenses. This system is ideal for users looking to gain control over their personal or household finances, offering a simple way to track and categorize expenses while keeping a record of transaction history.

The primary goal of the Expense Tracker is to allow users to log expenses, categorize them, and view a detailed history of their financial activities. By using this tool, users can easily identify spending patterns and make more informed financial decisions. The application is highly intuitive, user-friendly, and optimized for performance, providing an excellent user experience whether on desktop or mobile devices.

#### Key Features:
1. **Expense Management:**
   - Users can add expenses by entering the title, amount, and date of the transaction. Each entry is stored in a MongoDB database for easy retrieval and future access.
   
2. **Editing & Deleting Transactions:**
   - The application allows users to edit the details of a specific expense or remove it from the record entirely. This gives users full control over their transaction history.
   
3. **Expense List View:**
   - All recorded expenses are displayed in an organized list, allowing users to easily view their spending. Users can sort or filter expenses based on various parameters like date, amount, or title.
   
4. **Expense Summary:**
   - A summary view displays the total amount spent, helping users to quickly assess their financial situation at a glance. This feature includes dynamic updates as users add or remove expenses.
   
5. **Real-Time Updates:**
   - Leveraging React’s state management, the interface dynamically updates to reflect changes (such as adding or deleting expenses) without requiring a page refresh.
   
6. **Persistent Data Storage:**
   - All expense data is securely stored in MongoDB, ensuring that information is not lost when the user closes the application. The app also supports cloud storage for scalability.
   
7. **User-Friendly Interface:**
   - The React-powered frontend is designed with ease of use in mind. Whether a user is adding a new expense, editing an existing one, or reviewing their spending habits, the interface is intuitive and accessible.

   
9. **API Integration:**
   - The backend, built using Express.js and Node.js, offers robust API endpoints to manage CRUD (Create, Read, Update, Delete) operations for expenses. This separation of concerns ensures scalability and smooth client-server communication.


The **MERN stack** was selected for its flexibility, efficiency, and scalability. MongoDB’s NoSQL structure allows for flexible data modeling, while Express.js and Node.js provide a high-performance backend capable of handling multiple users and complex API operations. React.js enhances the frontend experience, providing a dynamic and interactive user interface.


### Project Setup

To get the Expense Tracker application up and running, follow the steps outlined below. This guide assumes that you have the necessary tools installed, such as Node.js and MongoDB.

#### 1. **Prerequisites**
Before setting up the project, ensure that you have the following installed on your machine:
- **Node.js**: JavaScript runtime to run both the backend and frontend.
- **MongoDB**: NoSQL database used to store expenses.
- **Git**: For cloning the repository and version control.

You can install them from their respective websites:
- Node.js: [https://nodejs.org/](https://nodejs.org/)
- MongoDB: [https://www.mongodb.com/](https://www.mongodb.com/)
- Git: [https://git-scm.com/](https://git-scm.com/)

#### 2. **Cloning the Repository**
Start by cloning the project repository from GitHub (or any version control system) to your local machine:
```bash
git clone <repository-url>
```

After cloning, you will have two main directories: `backend` for the server-side and `frontend` for the client-side of the application.

#### 3. **Installing Dependencies**
Both the frontend and backend have their own dependencies that need to be installed using `npm`.

- **Backend (Node.js/Express):**
  1. Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
  2. Install the required dependencies:
     ```bash
     npm install
     ```
     This will install all the necessary packages as listed in the `package.json` file (e.g., `mongoose` for MongoDB connection, `express` for routing, etc.).

- **Frontend (React):**
  1. Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
  2. Install the required dependencies:
     ```bash
     npm install
     ```
     This will install all the frontend packages (e.g., `axios` for API requests, `react-router-dom` for navigation, etc.).

#### 4. **Environment Variables Setup**
Before running the application, you’ll need to set up environment variables for the backend. Create a `.env` file inside the `backend` directory and add the following variables:

```bash
MONGODB_URI=<your-mongodb-connection-string>
PORT=5000
```
- Replace `<your-mongodb-connection-string>` with your MongoDB URI, which can be a local MongoDB instance (`mongodb://localhost:27017/expense-tracker`) or a cloud instance (e.g., MongoDB Atlas).
- The `PORT` variable specifies the port on which your backend server will run (commonly 5000).

#### 5. **Running the Application**
Once the dependencies are installed and the environment variables are set up, you can start both the backend and frontend.

- **Start the Backend (Node.js/Express):**
  1. From the `backend` directory, run the following command to start the server:
     ```bash
     npm start
     ```
  2. The server will start running on `http://localhost:5000` by default.

- **Start the Frontend (React):**
  1. From the `frontend` directory, run the following command:
     ```bash
     npm start
     ```
  2. The React development server will start, usually on `http://localhost:3000`.

With both the frontend and backend running, the application should now be functional. You can interact with the Expense Tracker by adding, editing, and deleting expenses.

#### 7. **Testing the Application**
Once the app is running, test its functionality by performing the following:
- Add a new expense using the form on the frontend.
- View the list of added expenses.
- Edit or delete any existing expense.
- Check the MongoDB database to verify that the expenses are correctly added and updated.

#### 8. **Common Issues and Troubleshooting**
- **MongoDB Connection Issues:**
  - Ensure that MongoDB is running, and the correct MongoDB URI is used in the `.env` file.
  
- **Port Conflicts:**
  - If `PORT 5000` or `3000` is already in use, you can change it by modifying the `.env` file or using environment-specific commands when starting the server.


### API Documentation

The backend of the Expense Tracker application is built using **Express.js**, and it provides a set of RESTful API endpoints for performing CRUD (Create, Read, Update, Delete) operations on expenses. All requests and responses are in **JSON** format.

#### Base URL:
```
http://localhost:5000/api/expenses
```

---

### 1. **GET /expenses**
#### Description:
Fetch all expenses from the database.

#### Request:
- **Method:** `GET`
- **URL:** `/api/expenses`

#### Response:
- **Status:** `200 OK`
- **Body:**
```json
[
  {
        "_id": "669458239d9387f466df87bc",
        "title": "Marusoft Technology",
        "amount": 50000,
        "type": "income",
        "date": "2024-05-29T23:00:00.000Z",
        "category": "salary",
        "description": "Data Analyst",
        "createdAt": "2024-07-14T22:58:43.150Z",
        "updatedAt": "2024-07-14T22:58:43.150Z",
        "__v": 0
    },
    {
        "_id": "669456eae4ca09d72485efb4",
        "title": "Hello",
        "amount": 457,
        "type": "income",
        "date": "2024-07-24T23:00:00.000Z",
        "category": "investments",
        "description": "Invest in Forex",
        "createdAt": "2024-07-14T22:53:30.530Z",
        "updatedAt": "2024-07-14T22:53:30.530Z",
        "__v": 0
    },
    {
        "_id": "66945461e4ca09d72485ef9e",
        "title": "Hello Test",
        "amount": 48,
        "type": "income",
        "date": "2023-10-09T23:00:00.000Z",
        "category": "salary",
        "description": "My Income",
        "createdAt": "2024-07-14T22:42:41.618Z",
        "updatedAt": "2024-07-14T22:42:41.618Z",
        "__v": 0
    }
]
```

---

### 2. **POST /expenses**
#### Description:
Add a new expense to the database.

#### Request:
- **Method:** `POST`
- **URL:** `/api/expenses`
- **Body:**
```json
{
  "_id": "66945908a0a31898388d07db",
  "title": "Phone Accessories",
  "amount": 10000,
  "type": "expense",
  "date": "2024-06-11T23:00:00.000Z",
  "category": "other",
  "description": "Iphone Charger",
  "createdAt": "2024-07-14T23:02:32.729Z",
  "updatedAt": "2024-07-14T23:02:32.729Z",
  "__v": 0
}
```

#### Response:
- **Status:** `201 Created`
- **Body:**
```json
{
  "_id": "66945908a0a31898388d07db",
  "title": "Phone Accessories",
  "amount": 10000,
  "type": "expense",
  "date": "2024-06-11T23:00:00.000Z",
  "category": "other",
  "description": "Iphone Charger",
  "createdAt": "2024-07-14T23:02:32.729Z",
  "updatedAt": "2024-07-14T23:02:32.729Z",
  "__v": 0
}
```

---

### 3. **GET /expenses/:id**
#### Description:
Fetch a specific expense by its ID.

#### Request:
- **Method:** `GET`
- **URL:** `/api/expenses/:id`

#### Response:
- **Status:** `200 OK`
- **Body:**
```json
{
  "_id": "66945908a0a31898388d07db",
  "title": "Phone Accessories",
  "amount": 10000,
  "type": "expense",
  "date": "2024-06-11T23:00:00.000Z",
  "category": "other",
  "description": "Iphone Charger",
  "createdAt": "2024-07-14T23:02:32.729Z",
  "updatedAt": "2024-07-14T23:02:32.729Z",
  "__v": 0
}
```

#### Response for Invalid ID:
- **Status:** `404 Not Found`
- **Body:**
```json
{
  "message": "Expense not found"
}
```

---

### 4. **PUT /expenses/:id**
#### Description:
Update an existing expense by its ID.

#### Request:
- **Method:** `PUT`
- **URL:** `/api/expenses/:id`
- **Body:**
```json
{
  "title": "Groceries & Snacks",
  "amount": 80.00,
  "date": "2024-08-15"
}
```

#### Response:
- **Status:** `200 OK`
- **Body:**
```json
{
  "_id": "64e3c29fd83b9f5a3f123a4e",
  "title": "Groceries & Snacks",
  "amount": 80.00,
  "date": "2024-08-15T00:00:00.000Z"
}
```

#### Response for Invalid ID:
- **Status:** `404 Not Found`
- **Body:**
```json
{
  "message": "Expense not found"
}
```

---

### 5. **DELETE /expenses/:id**
#### Description:
Delete an expense by its ID.

#### Request:
- **Method:** `DELETE`
- **URL:** `/api/expenses/:id`

#### Response:
- **Status:** `200 OK`
- **Body:**
```json
{
  "message": "Expense removed"
}
```

#### Response for Invalid ID:
- **Status:** `404 Not Found`
- **Body:**
```json
{
  "message": "Expense not found"
}
```

---

### Error Handling
For all endpoints, error handling is in place to ensure the application responds appropriately to invalid inputs or requests:
- **400 Bad Request:** If required fields are missing in the request body.
- **404 Not Found:** If the requested expense ID does not exist in the database.
- **500 Internal Server Error:** For any server-side issues.

### Frontend Overview

The frontend of the Expense Tracker is built using **React.js**, a popular JavaScript library for building user interfaces. The application is structured to be modular, scalable, and easy to maintain, with clear separation between components, state management, and routing.

#### 1. **File Structure**
The frontend is organized into directories that separate different concerns:

```
frontend/
│
├── public/
│   └── index.html        # The main HTML file
│
├── src/
│   ├── components/       # Reusable components (ExpenseForm, ExpenseList, etc.)
│   ├── pages/            # Pages (Home, Dashboard, etc.)
│   ├── context/          # Context API for state management
│   ├── services/         # API service functions for making requests
│   ├── App.js            # Main app component with routing
│   └── index.js          # Entry point for React
│
└── package.json          # Project metadata and dependencies
```

#### 2. **Key Components**
Here are the primary components used in the Expense Tracker:

- **ExpenseForm**
  - Located in `src/components/ExpenseForm.js`.
  - Handles the form for adding and editing expenses.
  - Manages form state and submission, including validation.
  
- **ExpenseList**
  - Located in `src/components/ExpenseList.js`.
  - Displays a list of all expenses fetched from the backend.
  - Includes functionalities for editing and deleting individual expenses.
  
- **ExpenseSummary**
  - Located in `src/components/ExpenseSummary.js`.
  - Shows a summary of total expenses, offering users an at-a-glance view of their spending.

- **ExpenseItem**
  - Located in `src/components/ExpenseItem.js`.
  - Represents an individual expense entry in the `ExpenseList`.
  - Contains buttons for editing and deleting the expense.

#### 3. **Pages**
The application is built with multiple pages, each handling different parts of the user experience:

- **Home**
  - Located in `src/pages/Home.js`.
  - This is the landing page of the application, displaying the `ExpenseForm` and `ExpenseList` components.
  
- **Dashboard**
  - Located in `src/pages/Dashboard.js`.
  - Displays detailed analytics or summary views of expenses (this can be an optional feature for future enhancement).

#### 4. **State Management**
The application uses React’s built-in Context API for state management:

- **Global State Management:**
  - Located in `src/context/ExpenseContext.js`.
  - Provides a global state to manage the list of expenses, including actions for adding, updating, and deleting expenses.
  - Context is used to avoid prop drilling and make state accessible across different components.

- **Custom Hooks:**
  - Custom React hooks are used to encapsulate logic that interacts with the global state, making the code cleaner and more reusable.

#### 5. **Routing**
Routing is handled using `react-router-dom`, allowing navigation between different pages:

- **App.js:**
  - Configures routes for the application, mapping URLs to their respective components or pages.
  - Example routes:
    - `/`: Displays the `Home` component.
    - `/dashboard`: Displays the `Dashboard` component.

#### 6. **API Integration**
API requests to the backend are handled through service functions:

- **API Service Functions:**
  - Located in `src/services/api.js`.
  - These functions (e.g., `fetchExpenses`, `addExpense`, `deleteExpense`) make HTTP requests to the backend API endpoints and handle responses.
  - Example:
    ```javascript
    export const fetchExpenses = async () => {
      const response = await fetch('/api/expenses');
      return await response.json();
    };
    ```

#### 7. **Styling**
The frontend uses a combination of CSS modules and possibly a CSS framework (like Tailwind CSS or Bootstrap) to style the components:

- **CSS Modules:**
  - Used for component-specific styling to avoid class name collisions.
  - Example: `ExpenseForm.module.css` for styling the form component.

- **Global Styles:**
  - Global styles or utility classes are applied to maintain a consistent design across the application.

#### 8. **Responsive Design**
The application is fully responsive, meaning it works well on devices of all sizes, from desktop to mobile. This is achieved through:

- **Media Queries:**
  - CSS media queries are used to adjust the layout and styles based on the screen size.
  
- **Flexible Layouts:**
  - Flexbox or CSS Grid is used to create flexible and adaptive layouts.

### Database Schema

The Expense Tracker application uses **MongoDB** as the database to store both expenses and income records. It uses **Mongoose**, an ODM library for MongoDB, to define the schema structure and manage data validation and integrity.

#### 1. **Expense Schema**

The `Expense` schema represents individual expenses, such as groceries, utility bills, or rent. The schema includes essential fields to track details like the title, amount, date, and category of each expense. It also utilizes timestamps to track when each record is created or updated.

##### **Expense Schema Definition**

```javascript
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50 // Limits title to 50 characters
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20, // Limits amount input to 20 digits
        trim: true
    },
    type: {
        type: String,
        default: "expense" // Sets default type as 'expense'
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 100, // Limits description to 100 characters
        trim: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Expense', ExpenseSchema);
```

##### **Fields:**
- **title (String)**: A brief description of the expense (e.g., "Groceries", "Electricity Bill").
  - **required**: Must be provided.
  - **trim**: Removes leading and trailing whitespace.
  - **maxLength**: Limits the title to 50 characters.
  
- **amount (Number)**: Represents the amount spent.
  - **required**: Must be provided.
  - **maxLength**: Limits the amount field to 20 digits for large amounts.

- **type (String)**: Represents the type of record. The default value is `"expense"`.

- **date (Date)**: The date the expense occurred.
  - **required**: Must be provided.

- **category (String)**: Categorizes the expense (e.g., "Food", "Utilities").
  - **required**: Must be provided.

- **description (String)**: A more detailed explanation of the expense.
  - **required**: Must be provided.
  - **maxLength**: Limits the description to 100 characters.

- **timestamps**: Automatically adds `createdAt` and `updatedAt` fields to track when the expense was created or updated.

#### 2. **Income Schema**

The `Income` schema is structured similarly to the `Expense` schema but with the default type set to "income". This schema tracks income records like salary, bonuses, or any other sources of revenue.

##### **Income Schema Definition**

```javascript
const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50 // Limits title to 50 characters
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20, // Limits amount input to 20 digits
        trim: true
    },
    type: {
        type: String,
        default: "income" // Sets default type as 'income'
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 100, // Limits description to 100 characters
        trim: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Income', IncomeSchema);
```

##### **Fields:**
- **title (String)**: Describes the income source (e.g., "Salary", "Bonus").
  - **required**: Must be provided.
  - **trim**: Removes leading and trailing whitespace.
  - **maxLength**: Limits the title to 50 characters.
  
- **amount (Number)**: Represents the amount of income.
  - **required**: Must be provided.
  - **maxLength**: Limits the amount field to 20 digits for large amounts.

- **type (String)**: Represents the type of record. The default value is `"income"`.

- **date (Date)**: The date when the income was received.
  - **required**: Must be provided.

- **category (String)**: Categorizes the income (e.g., "Salary", "Freelance").
  - **required**: Must be provided.

- **description (String)**: A detailed explanation of the income.
  - **required**: Must be provided.
  - **maxLength**: Limits the description to 100 characters.

- **timestamps**: Automatically adds `createdAt` and `updatedAt` fields to track when the income record was created or updated.

This database schema allows for efficient tracking and management of both expenses and income, ensuring that the records are well-structured and easy to manage within the application.

### Conclusion

The **Expense Tracker** application, built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), provides a robust solution for managing both expenses and income. Through the use of well-structured schemas, efficient routing, and an intuitive user interface, users can easily track their financial data, helping them stay organized and make informed financial decisions.

The **expense** and **income** schemas ensure that the data is consistently stored and validated, while the RESTful API allows seamless communication between the frontend and backend. The use of **React.js** for the frontend ensures a responsive, dynamic user experience, while **MongoDB** efficiently handles data storage. 

By implementing features like adding, editing, deleting, and categorizing expenses and income, this application serves as a comprehensive financial management tool, ideal for both personal and professional use.

Moving forward, this project can be expanded with additional features such as:
- **Budget Planning**: Users can set budgets and track progress.
- **Graphs and Analytics**: Visualize spending and income trends over time.


This project lays the foundation for more complex financial applications and provides a solid example of building full-stack applications using the MERN stack.