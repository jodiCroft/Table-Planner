import React from "react";
import Table from "./Table/Table";
import useStyles from "./styles";

const Tables = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Tables</h1>
      <Table />
      <Table />
    </>
  );
};

export default Tables;
