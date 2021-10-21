import { Sequelize } from "sequelize";

const sequelize = new Sequelize("dnd_project", "postgres", "inshal14", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
