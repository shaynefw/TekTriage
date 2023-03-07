const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password); // this.password is the hashed password in the database
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      }, // beforeCreate is a hook that runs before a new user is created
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      }, // beforeUpdate is a hook that runs before a user is updated
    }, // hooks are a way to run functions before or after certain sequelize lifecycle events
    sequelize, // this is the connection to the database
    timestamps: false,
    freezeTableName: true, // this will make the model name singular
    underscored: true, // this will make the model name lowercase and plural
    modelName: "user", // this is the name of the model that will be used in the routes
  }
);

module.exports = User;
