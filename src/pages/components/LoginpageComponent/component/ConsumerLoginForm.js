import React from "react";

// Material UI Components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MLink from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

// Customized Cmponent
import Link from "../../../../components/Link";

// Material UI Styling
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ConsumerLogin(props) {
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    props.onSubmitForm(data, "consumerForm");
  };

  return (
    <form className={classes.form} noValidate onSubmit={onSubmit}>
      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          reset();
          props.setView("first");
        }}
      >
        back
      </Button>

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        size="small"
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        size="small"
        margin="normal"
        required
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        label="Remember me"
        control={<Checkbox value="remember" color="primary" />}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Login
      </Button>
      <Grid container>
        <Grid item xs>
          <MLink href="#" variant="body2">
            Forgot password?
          </MLink>
        </Grid>
        <Grid item>
          <Typography variant="body2">
            <Link to="/register" title="Dont have an account? Register" />
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
}
export default ConsumerLogin;
