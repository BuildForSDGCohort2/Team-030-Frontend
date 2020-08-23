import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../../../../components/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const FarmerReg = (props) => {
  const classes = useStyles();
  const { setView } = props;

  // Form Fields
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [farmAddress, setFarmAddress] = React.useState("");
  const [farmName, setFarmName] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      phone,
      farmAddress,
      farmName,
    };
    props.onSubmitForm(data, "farmerForm");
  };

  return (
    <form className={classes.form} noValidate onSubmit={onSubmit}>
      <Button variant="outlined" size="small" onClick={() => setView("first")}>
        back
      </Button>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        label="Name"
        autoComplete="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        label="Email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        type="password"
        label="Password"
        autoComplete="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        variant="outlined"
        size="small"
        margin="normal"
        required
        fullWidth
        name="Phone"
        autoComplete="phone"
        label="Phone"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        autoComplete="farmName"
        label="Farm Name"
        value={farmName}
        onChange={(e) => setFarmName(e.target.value)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        size="small"
        autoComplete="farmAddress"
        label="Farm Address"
        value={farmAddress}
        onChange={(e) => setFarmAddress(e.target.value)}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Register
      </Button>
      <Grid>
        <Grid item>
          <Typography variant="body2">
            <Link to="/login" title="Already? have an account? Login" />
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default FarmerReg;
