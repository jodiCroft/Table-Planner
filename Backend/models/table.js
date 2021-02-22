import mongoose from "mongoose";

// Maybe a default tableNum which is the length of the tables in the array...

const tableSchema = mongoose.Schema({
  tableName: String,
  numOfSeats: {
    type: Number,
    min: 2,
    max: 12,
  },
});

const Table = mongoose.model("Table", tableSchema);

export default Table;
