import { Sequelize } from "sequelize";
import sequelize from "../config/db.mjs";

const { DataTypes } = Sequelize;

const { STRING, BOOLEAN } = DataTypes;

const User = sequelize.define("User", {
  username: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  isAdmin: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
});

export default User;
