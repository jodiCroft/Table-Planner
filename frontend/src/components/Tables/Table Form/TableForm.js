import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

const TableForm = () => {
  const [tableData, setTableData] = useState({
    tableName: "",
    numOfSeats: "",
  });
  const classes = useStyles();

  const handleSubmit = () => {};
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        // noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Add a Table</Typography>
        <TextField
          name="tableName"
          variant="outlined"
          label="Table Name"
          fullWidth
          value={tableData.tableName}
          onChange={(e) =>
            setTableData({ ...tableData, tableName: e.target.value })
          }
        />
        <TextField
          name="numOfSeats"
          variant="outlined"
          label="Number of Seats"
          fullWidth
          value={tableData.numOfSeats}
          onChange={(e) =>
            setTableData({ ...tableData, numOfSeats: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default TableForm;
