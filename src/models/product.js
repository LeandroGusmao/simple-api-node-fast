const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {

}

Product.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: 'product',
        timestamps: false
    }
);

module.exports = Product;
