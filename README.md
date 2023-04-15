# Node.js Express Sequelize - Product CRUD API

### This is a project developed for studying the development of a REST API using Node.js, Express, and Sequelize to perform CRUD (Create, Read, Update, Delete) operations for products in a Postgresql database.

## Requirements
### To run this project on your machine, you need to have:

• Node.js (version 12 or higher)
• NPM (Node.js package manager)
• Postgresql (or another relational database compatible with Sequelize)

## Installation
1. Clone this repository on your machine.
2. Navigate to the project folder and run the command npm install to install the dependencies.
3. Create a Postgresql database with the name crud_products.
4. Configure the connection information to the database in the file config/database.js.
5. Run the command npm run dev to start the local server.
6. Access the API at http://localhost:3000.


## Features
• Product creation (name, price, and description)
• List all products
• Get a specific product by ID
• Update existing products by ID
• Delete products from the database by ID


## Technologies Used
• Node.js
• Express
• Sequelize (ORM for database)
• Postgresql (relational database)


## Final Considerations
### This project was developed for study purposes only and should not be used in production. The source code is available for reference and learning. If you want to use this project in a production environment, it is recommended that you make the necessary adaptations and tests to ensure the security and reliability of the application.
