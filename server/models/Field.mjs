import { Sequelize } from "sequelize";
import sequelize from "../config/db.mjs";

const { DataTypes } = Sequelize;

const { STRING, BOOLEAN } = DataTypes;

const Field = sequelize.define("Field", {
  type: {
    type: STRING,
    allowNull: false,
  },
});

export default Field;
