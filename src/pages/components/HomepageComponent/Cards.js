import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "../../../components/Link";

// import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStylesBlock = makeStyles(theme => ({
	root: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		cursor: "pointer",
		width: "100%",
	},
	imgWrapper: {
		height: 120,
		[theme.breakpoints.down("md")]: {
			height: 100,
		},
	},
	body: {
		padding: 10,
		[theme.breakpoints.down("md")]: {
			padding: 15,
		},
	},
}));

const Block = ({ item }) => {
	const classes = useStylesBlock();

	return (
		<>
			<div>
				<div className={classes.root}>
					<div className={classes.imgWrapper}>
						<div
							style={{
								background: `url('${item.bg}')`,
								backgroundRepeat: "no-repeat",
								height: "120px",
								backgroundSize: "contain",
								backgroundPosition: "center",
							}}
						/>
					</div>

					<div className="secondComp">
						<Typography
							style={{ marginTop: 5, color: "#0e304c" }}
							gutterBottom
							variant="h5"
							component="h2"
						>
							<span> {item.title} </span>
						</Typography>

						<Typography
							className={classes.body}
							variant="body2"
							color="textSecondary"
							component="p"
						>
							<span> {item.body} </span>
						</Typography>

						<Button
							size="medium"
							style={{ fontSize: 9, marginTop: 6 }}
							color="secondary"
							variant="contained"
							// onClick={e => console.log(item.link)}
						>
							<Link to={item.link} title={item.btn} />
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
		},
	},

	paper: {
		width: "100%",
		userSelect: "none",
		height: "100%",
		flex: 1,
		textAlign: "center",
	},
	zoom: {
		padding: 0,
		transition: "transform 0.2s",
		width: "90%",
		height: "270px",
		cursor: "pointer",
		margin: "0 auto",
		userSelect: "none",
		marginBottom: "10px",
		[theme.breakpoints.up("md")]: {
			margin: "5px 0",
			flexBasis: "50%",
			maxWidth: "345px",
			"& :hover": {
				"-ms-transform": "scale(1.02)" /* IE 9 */,
				"-webkit-transform": "scale(1.02)" /* Safari 3-8 */,
				transform: "scale(1.02)",
			},
		},
	},
}));

export default function ImgMediaCard() {
	const classes = useStyles();

	const items = [
		{
			alt: "Earn",
			title: "Are you a farmer?",
			bg: "/svg/undraw_wallet_aym5.svg",
			body: "Got a farm! Want to market your products?",
			btn: "Register here",
			link: "/register?type=farmer",
		},

		{
			alt: "Cashout",
			title: "Consumer?",
			bg: "/svg/undraw_pay_online_b1hk.svg",
			body: "Are you in need of farm products and services?",
			btn: "Register here",
			link: "/register?type=consumer",
		},
	];
	return (
		<>
			<div className={classes.root}>
				{items.map(item => (
					<div className={classes.zoom} key={item.title}>
						<Paper elevation={3} className={classes.paper}>
							<Block item={item} />
						</Paper>
					</div>
				))}
			</div>
		</>
	);
}
