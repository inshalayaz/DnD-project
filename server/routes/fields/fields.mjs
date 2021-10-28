import { Router } from "express";
import Field from "../../models/Field.mjs";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const allFields = await Field.findAll({
      attributes: ["id", "type"],
    });
    res.status(200).json(allFields);
  } catch (error) {
    console.log(error);
  }
});

export default router;
