import express from "express";

const router = express.Router();

import {
  allTables,
  getTable,
  addTable,
  deleteTable,
  updateTable,
} from "../controllers/tables.js";

router.get("/", allTables);

router.get("/:id", getTable);

router.post("/", addTable);

router.delete("/:id", deleteTable);

router.patch("/:id", updateTable);

export default router;
