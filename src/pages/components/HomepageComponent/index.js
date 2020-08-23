import React from "react";

// Materal UI Components
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Custom Componennts
import Link from "../../../components/Link";

// Materal UI Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // padding: 50,
    // margin: 50,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box my={6} className={classes.root}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Welcome to Agromart
        </Typography>
        <Button color="primary" variant="outlined">
          <Link to="/login" title="GET STARTED" />
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
