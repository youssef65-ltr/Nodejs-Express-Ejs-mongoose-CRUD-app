# Task Manager

A simple task manager web app built with Node.js, Express, EJS, and MongoDB.
Users can create, read, update, and delete tasks (CRUD).

## Features

- [x] Create a task
- [x] View all tasks in a table
- [x] Update a task
- [x] Delete a task
- [ ] Mark a task as finished
- [ ] Search tasks
- [ ] Sort tasks
- [ ] Filter tasks

More features will be added in the future.

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: web framework
- **EJS**: template engine (HTML views)
- **MongoDB + Mongoose**: database and data models
- **Architecture**: MVC (Model - View - Controller)

## Task Model

| Field         | Type    | Description                     |
| ------------- | ------- | ------------------------------- |
| `title`       | String  | Name of the task                |
| `description` | String  | More details about the task     |
| `isFinished`  | Boolean | `true` if the task is done      |
| `createdAt`   | Date    | Date when the task was created  |

## Project Structure

```
task-manager/
├── src/
    ├──controllers/    # Logic for each route
├── models/         # Mongoose schemas
├── routes/         # Express routes
├── views/          # EJS templates
├── public/         # Static files (CSS, images, JS)
├── .env            # Environment variables (not pushed to GitHub)
├── .gitignore
├── app.js          # Entry point
└── package.json
```
my-express-app/
├── src/
│   ├── config/             # Environment variables & third-party configurations
│   ├── controllers/        # Logic for each route
│   ├── models/             # Database schemas (Mongoose)
│   ├── routes/             # Express routes
│   ├── app.js              # Initializes Express instance and global middlewares
│   └── server.js           # App entry point (binds to port and starts the server)
├── .env                    # Hidden environment variables file
├── .gitignore              # Files to ignore in git (node_modules, .env)
├── package.json            # Dependencies and npm scripts
└── README.md  

> Change this structure if your folders have different names.

## Requirements

Before you start, install:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) installed on your computer,
  or a free [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root folder and add:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/task-manager
   ```

   If you use MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string.

4. **Start MongoDB** (only if you use a local database)

   Make sure the MongoDB service is running on your computer.

5. **Run the app**

   ```bash
   npm start
   ```

   For development (auto restart on changes), if you use nodemon:

   ```bash
   npm run dev
   ```

6. **Open your browser** and go to:

   ```
   http://localhost:3000
   ```

## Scripts

| Command         | What it does                        |
| --------------- | ----------------------------------- |
| `npm start`     | Starts the app                      |
| `npm run dev`   | Starts the app with nodemon         |

## Contributing

1. Fork the project
2. Create a new branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "feat: add my feature"`
4. Push the branch: `git push origin feature/my-feature`
5. Open a Pull Request

## License

This project is open source and free to use for learning.