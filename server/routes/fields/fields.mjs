import { Router } from "express";
import Field from "../../models/Field.mjs";
import FieldItem from "../../models/FieldItem.mjs";
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

router.post("/", async (req, res) => {
  const { type } = req.body;

  try {
    const field = await Field.create({
      type: type,
    });
    res.status(200).json(field);
  } catch (error) {
    console.log(error);
  }
});

router.post("/field-item", async (req, res) => {
  const { type } = req.body;

  try {
    const item = await FieldItem.create({
      type: type,
    });
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
  }
});

// router.put("/", async (req, res) => {
//   const { id, type } = req.body;
//   console.log(req.body);
//   var field;
//   try {
//     if (type === "text" && id < 100) {
//       field = await Field.update(
//         { id: parseInt(id) + 1 },
//         { where: { id: id } }
//       );
//     } else {
//       field = await Field.update({ id: 1 }, { where: { id: id } });
//     }
//     res.status(200).json(field);
//   } catch (error) {
//     console.log(error);
//   }
// });

export default router;
