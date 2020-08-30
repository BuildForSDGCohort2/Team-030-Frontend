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
import Link from "../../../components/Link";

// Registeration Forms
import FarmerReg from "./component/FarmerReg";
import ConsumerReg from "./component/ConsumerReg";
import { withRouter } from "react-router-dom";

// Material UI Styling
const useStyles = makeStyles(theme => ({
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
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
		},
	},
	card: {
		minWidth: 275,
		margin: 40,
	},

	title: {
		fontSize: 14,
	},

	backBtn: {
		margin: 40,
		marginLeft: 100,
		float: "left",
		[theme.breakpoints.down("md")]: {
			margin: 10,
			marginLeft: 10,
			float: "left",
		},
	},
}));

function Register(props) {
	const classes = useStyles();
	const { location } = props;

	const paramType = location.search ? location.search : "first";
	let defaultView = "first";

	if (paramType === "?type=farmer") defaultView = "farmer";
	if (paramType === "?type=consumer") defaultView = "consumer";

	const [view, setView] = React.useState(defaultView);

	const [msg, setMsg] = React.useState("");
	const [msgType, setMsgType] = React.useState("success");
	const [SnackBarOpen, setSnackBarOpen] = React.useState(false);

	const onSubmit = async (data, type) => {
		console.log({ data, type });

		// MAKE REGISTER REQUEST TO BACKEND USING
		if (type === "farmerForm") {
			// SEND API REGISTER REQUEST TO THE BACKEND FARMER REGISTER ROUTE
			try {
			} catch (e) {}
		}
		if (type === "consumerForm") {
			// SEND API REGISTER REQUEST TO THE BACKEND CONSUMER REGISTER ROUTE
			try {
			} catch (e) {}
		}

		// DISPLAY SAMPLE RESPONSE TO USER
		setMsg(
			`This will send an  ${
				type === "farmerForm" ? "Farmer" : "Consumer"
			} REGISTER request to the backend API`
		);
		setMsgType("success");
		setSnackBarOpen(true);
	};

	return (
		<>
			<div className={classes.backBtn}>
				<Button variant="contained" color="default" size="small">
					<Link to="/" title="GO BACK" />
				</Button>
			</div>
			<Container component="main" maxWidth="xs">
				{SnackBarOpen && (
					<SnackBar
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
						{view === "first" && "Register"}
						{view === "farmer" && "Farmer Register"}
						{view === "consumer" && "Consumer Register"}
					</Typography>

					{view === "first" && (
						<>
							<div className={classes.mycards}>
								<Card elevation={10} className={classes.card}>
									<CardContent>
										<Typography
											className={classes.title}
											color="textSecondary"
											gutterBottom
										>
											Register as
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
											Register as
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
						</>
					)}

					{view === "farmer" && (
						<FarmerReg onSubmitForm={onSubmit} setView={setView} />
					)}

					{view === "consumer" && (
						<ConsumerReg onSubmitForm={onSubmit} setView={setView} />
					)}
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Container>
		</>
	);
}

export default withRouter(Register);
