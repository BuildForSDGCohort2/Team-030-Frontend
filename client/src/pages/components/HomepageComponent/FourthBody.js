import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(theme => ({
	root: {
		height: "inherit",
	},
	first: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		padding: 120,
		paddingBottom: 5,
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.down("md")]: {},
	},
}));

export default function ImgMediaCard() {
	const classes = useStyles();

	return <div className={classes.root}>ssss</div>;
}
