import { Sequelize } from "sequelize";
import sequelize from "../config/db.mjs";

const { DataTypes } = Sequelize;

const { STRING } = DataTypes;

const FieldItem = sequelize.define("FieldItem", {
  type: {
    type: STRING,
    allowNull: false,
  },
});

export default FieldItem;
