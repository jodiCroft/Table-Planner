import React from "react";
import Table from "./Table/Table";
import useStyles from "./styles";

import { useSelector } from "react-redux";

const Tables = () => {
  const tables = useSelector((state) => state.tables);
  const classes = useStyles();

  console.log(tables);
  return (
    <>
      <h1>Tables</h1>
      <Table />
      <Table />
    </>
  );
};

export default Tables;
