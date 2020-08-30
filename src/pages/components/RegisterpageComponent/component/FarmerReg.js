import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../../../../components/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
}));

const FarmerReg = props => {
	const classes = useStyles();
	const { setView } = props;

	// Form Fields
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [conPassword, setConPassword] = React.useState("");

	const onSubmit = e => {
		e.preventDefault();

		const data = {
			firstName: firstName.trim(),
			lastName: lastName.trim(),
			email: email.trim(),
			password: password.trim(),
			userType: "farmer",
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
				label="First Name"
				autoComplete="fname"
				value={firstName}
				onChange={e => setFirstName(e.target.value)}
			/>
			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				size="small"
				label="Last Name"
				autoComplete="lname"
				value={lastName}
				onChange={e => setLastName(e.target.value)}
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
				onChange={e => setEmail(e.target.value)}
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
				onChange={e => setPassword(e.target.value)}
			/>

			<TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				size="small"
				type="password"
				label="Confirm Password"
				autoComplete="Password"
				value={conPassword}
				onChange={e => setConPassword(e.target.value)}
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="secondary"
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
