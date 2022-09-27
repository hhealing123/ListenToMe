const sequelize = require('sequelize');
const Sequalize = require('sequelize');
require('dotenv').config();

Let = sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequalize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequalize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port:3306
        }
    );
}

module.export = sequelize;
