const { DataTypes } = require("sequelize");
// Exporting the function that define the orderline model, inside connect with sequelize

module.exports = (sequelize) => {
    sequelize.define('admin', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: 'Email es requerido'
                },
                isEmail: {
                    args: true,
                    msg: 'Este formato de email es inválido'
                },
                len: [5, 50]
            }
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })
};