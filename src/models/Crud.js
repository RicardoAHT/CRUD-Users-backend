const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Crud = sequelize.define('crud', {
    // Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: false
        // allowNull por defecto esta en true
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false
        // allowNull por defecto esta en true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
        // allowNull por defecto esta en true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
        // allowNull por defecto esta en true
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
        // allowNull por defecto esta en true
    },
});

module.exports = Crud;