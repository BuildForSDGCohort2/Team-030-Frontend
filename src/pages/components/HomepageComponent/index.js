import React from "react";

// Materal UI Components
// import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Custom Componennts
import AppBar from "../../../components/layout/AppBar";
import Link from "../../../components/Link";
import Cards from "./Cards";

// Materal UI Styling
const useStyles = makeStyles(theme => ({
	root: {
		margin: 0,
	},
	header: {
		flexGrow: 1,
		display: "flex",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 60,
		[theme.breakpoints.down("md")]: {
			marginBottom: 0,
			flexDirection: "column",
		},
	},
	headerTextWrapper: {
		flexGrow: 1,
		display: "flex",
		flex: 1,
		flexDirection: "column",
		justifyContent: "start",
		alignItems: "start",
		marginTop: 90,
		paddingLeft: 70,
		paddingRight: 50,
		textAlign: "left",
		[theme.breakpoints.down("md")]: {
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			marginTop: 70,
			padding: 0,
			paddingLeft: 10,
			paddingRight: 10,
		},
	},
	headerText: {
		fontSize: 50,
		[theme.breakpoints.down("md")]: {
			fontSize: 30,
			textAlign: "center",
		},
	},
	headerTextSub: {
		padding: 5,
	},

	headerimgWrapper: {
		flexGrow: 1,
		display: "flex",
		flex: 1,
		flexDirection: "center",
		justifyContent: "center",
		marginTop: 60,
		marginBottom: 60,

		[theme.breakpoints.down("md")]: {
			marginBottom: 20,
		},
	},
	headerimg: {
		width: "100%",
	},
	btn: {
		borderRadius: 30,
		padding: "10px 30px",
		marginTop: 5,
		[theme.breakpoints.down("md")]: {
			marginTop: 20,
		},
	},

	secondBody: {
		background: "#80808038",
		flexGrow: 1,
		display: "flex",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingTop: 40,
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			paddingTop: 20,
		},
	},

	secondBodyimgWrapper: {
		flex: 1,
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	secondBodyCards: {
		flex: 2,
	},
}));

const Home = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar />
			<div className={classes.header}>
				<Box className={classes.headerTextWrapper}>
					<Typography className={classes.headerText} align="left">
						Welcome to Agromart
					</Typography>

					<Typography className={classes.headerTextSub} variant="caption">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco.
					</Typography>
					<Button color="secondary" variant="contained" className={classes.btn}>
						<Link to="/register" title="GET STARTED" />
					</Button>
				</Box>
				<Box className={classes.headerimgWrapper}>
					<img
						src="./svg/header.svg"
						className={classes.headerimg}
						alt="farmers"
					/>
				</Box>
			</div>

			<div className={classes.secondBody}>
				<Box className={classes.secondBodyimgWrapper}>
					<img
						src="./svg/secondbody.svg"
						className={classes.secondBodyimg}
						alt="farmers"
					/>
				</Box>
				<Box className={classes.secondBodyCards}>
					<Cards />
				</Box>
			</div>
		</div>
	);
};

export default Home;
