# NoSQL CRUD APIs
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
## Description
This is a back-end application that allows users to create, read, update, and delete data from a database. The database is a NoSQL database, which means that it is not a relational database. Instead, it is a document-based database that stores data in JSON-like documents. This application uses MongoDB as the database and Mongoose as the ODM (Object Document Mapper). The application also uses Express.js for the server and routing.

This was designed in the context of a social media application, where users can create accounts, add friends, and share their thoughts. The application allows users to create, read, update, and delete users, thoughts, and reactions. Users can also add and remove friends from their friend list.

## Walkthrough Video
[Click Me!]()
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
To set up this application on your local machine, first clone the repository. Then, navigate to the root directory of the project in your terminal and run `npm install`. This will install the necessary dependencies. You will also need to have MongoDB installed on your machine. You can download it [here](https://www.mongodb.com/try/download/community). Once you have MongoDB installed, you can run `npm start` to start the server. You can then use an application like Insomnia Core to test the routes. The routes are as follows: 

### User Routes
- GET all users: `/api/users`
- GET a single user by ID: `/api/users/:id`
- POST a new user: `/api/users`
- PUT to update a user by ID: `/api/users/:id`
- DELETE a user by ID: `/api/users/:id`
- POST to add a friend to a user's friend list: `/api/users/:id/friends/:friendId`
- DELETE to remove a friend from a user's friend list: `/api/users/:id/friends/:friendId`

### Thought Routes
- GET all thoughts: `/api/thoughts`
- GET a single thought by ID: `/api/thoughts/:id`
- POST a new thought: `/api/thoughts`
- PUT to update a thought by ID: `/api/thoughts/:id`
- DELETE a thought by ID: `/api/thoughts/:id`

### Reaction Routes
- POST a new reaction to a thought: `/api/thoughts/:id/reactions`
- DELETE a reaction from a thought: `/api/thoughts/:id/reactions/:reactionId`

## Usage
This is only ment to be used as a back-end application. It is not a front-end application, so it does not have a UI. This is mostly for studying purposes, but it could be used as a back-end for a social media application.
## License
    This project is licensed under the MIT license.
## Contributing
If you want to clone this repository and improve upon it for your own purposes, you are welcome to do so.
## Tests
No tests are included in this application.
## Questions
If you have any questions, please contact me at harrisonminer59@gmail.com or visit my GitHub page at https://github.com/DrBubblez.
