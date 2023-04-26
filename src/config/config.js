module.exports = {
    development: {
      username: 'postgres', // your PostgreSQL username
      password: 'yourpassword', // your PostgreSQL password
      database: 'mydatabase', // the name of your PostgreSQL database
      host: 'localhost', // the address of your PostgreSQL server
      dialect: 'postgres', // the dialect that Sequelize will use
    },
    production: {
      use_env_variable: 'DATABASE_URL', // use the DATABASE_URL environment variable for production configuration
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
  };