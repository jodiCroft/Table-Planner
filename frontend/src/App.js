import React from "react";

import Tables from "./components/Tables/Tables";
import Guests from "./components/Guest List/GuestList";
import GuestForm from "./components/Guest Form/GuestForm";
import useStyles from "./styles";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

const App = () => {
  const classes = useStyles();
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
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
