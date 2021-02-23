import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Tables from "./components/Tables/Tables";
import Guests from "./components/Guest List/GuestList";
import GuestForm from "./components/Guest Form/GuestForm";
import TableForm from "./components/Tables/Table Form/TableForm";
import useStyles from "./styles";
import { getTables } from "./actions/tables";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTables());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static">
        <Typography className={classes.heading} variant="h2" align="center">
          Table Planner
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <Guests />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Tables />
              <TableForm />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
