import Table from "../models/table.js";

export const allTables = async (req, res) => {
  try {
    const tables = await Table.find();

    res.status(200).json(tables);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addTable = async (req, res) => {
  const table = req.body;

  const newTable = new Table(table);

  try {
    await newTable.save();
    res.status(201).json(newTable);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getTable = (req, res) => {
  const { id } = req.params;

  const foundTable = tables.find((table) => table.id === id);

  res.send(foundTable);
};

export const deleteTable = (req, res) => {
  const { id } = req.params;

  tables = tables.filter((table) => table.id !== id);

  res.send(`Table with the id ${id} was deleted.`);
};

export const updateTable = (req, res) => {
  const { id } = req.params;
  const { tableName, numOfSeats } = req.body;

  const table = tables.find((table) => table.id === id);
  if (tableName) table.tableName = tableName;

  if (numOfSeats) table.numOfSeats = numOfSeats;

  res.send(`Table with the id ${id} has been updated`);
};
