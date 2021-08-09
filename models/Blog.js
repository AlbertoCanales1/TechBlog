const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends User {}

Blog.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
    },
    post_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contents: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [8],
        },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
        }
    },
    date_time : {
        type: DataTypes.TIME,

    }
},
    {
        
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Blog',
    }
);

module.exports =  Blog;

