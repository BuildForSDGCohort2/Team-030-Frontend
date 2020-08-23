import React from "react";

// Material UI Components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// Customized Components
import SnackBar from "../../../components/SnackBar";
import Copyright from "../../../components/Copyright";

// Login Forms
import ConsumerLoginForm from "./component/ConsumerLoginForm";
import FarmerLoginForm from "./component/FarmerLoginForm";

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  mycards: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  card: {
    minWidth: 275,
    margin: 40,
  },

  title: {
    fontSize: 14,
  },
}));

const Login = () => {
  const classes = useStyles();
  const [view, setView] = React.useState("first");

  // CONTROLS THE RESPONSE MESSAGE TO SHOW USERS
  const [msg, setMsg] = React.useState("");
  const [msgType, setMsgType] = React.useState("success");
  const [SnackBarOpen, setSnackBarOpen] = React.useState(false);

  // Function is called to submit form
  const onSubmitForm = async (data, type) => {
    console.log({ data, type });

    alert(`
      email : ${data.email.trim() ? data.email : "null"} \n  
      password : ${data.password.trim() ? data.password : "null"} 
    `);

    // MAKE LOGIN REQUEST TO BACKEND USING AXIOS
    if (type === "farmerForm") {
      // SEND API LOGIN REQUEST TO THE BACKEND FARMER LOGIN ROUTE
      try {
      } catch (e) {}
    }
    if (type === "consumerForm") {
      // SEND API LOGIN REQUEST TO THE BACKEND CONSUMER LOGIN ROUTE
      try {
      } catch (e) {}
    }

    // DISPLAY SAMPLE RESPONSE TO USER
    setMsg(
        `This will send an axios ${
        type === "farmerForm" ? "Farmer" : "Consumer"
        } LOGIN request to the backend API`,
    );
    setMsgType("success");
    setSnackBarOpen(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      {SnackBarOpen && (
        <SnackBar
          autoHideDuration={10000}
          message={msg}
          handleClose={() => setSnackBarOpen(false)}
          type={msgType}
        />
      )}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {view === "first" && "Login"}
          {view === "farmer" && "Farmer Login"}
          {view === "consumer" && "Consumer Login"}
        </Typography>

        {view === "first" && (
          <div className={classes.mycards}>
            <Card elevation={10} className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Login as
                </Typography>

                <Typography variant="h5" component="h2">
                  Farmer
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => setView("farmer")}>
                  Continue
                </Button>
              </CardActions>
            </Card>

            <Card elevation={10} className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Login as
                </Typography>

                <Typography variant="h5" component="h2">
                  Consumer
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => setView("consumer")}>
                  Continue
                </Button>
              </CardActions>
            </Card>
          </div>
        )}

        {view === "farmer" && (
          <FarmerLoginForm setView={setView} onSubmitForm={onSubmitForm} />
        )}
        {view === "consumer" && (
          <ConsumerLoginForm setView={setView} onSubmitForm={onSubmitForm} />
        )}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default Login;
