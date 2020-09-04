import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Link from "../Link";
import clsx from "clsx";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},

	toolbar: {
		background: "inherit",
		height: "inherit",
		padding: "5px 42px",
		[theme.breakpoints.down("md")]: {
			padding: "10px 0",
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		cursor: "pointer",
		[theme.breakpoints.down("md")]: {
			padding: "0 20px",
		},
	},
	btn: {
		cursor: "pointer",
	},

	smallScreen: {
		display: "inline",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},

	bigScreen: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "inline",
		},
	},
}));

function ElevationScroll(props) {
	const { children, window } = props;

	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	if (props.page)
		return React.cloneElement(children, {
			elevation: 3,
			style: { color: "#FFF", background: "rgba(18, 107, 22, 0.8)" },
		});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
		style: trigger
			? { color: "#FFF", background: "rgba(18, 107, 22, 0.88)" }
			: { color: "#000000DE", background: "#ffffff0d" },
		// color: trigger ? "secondary" : "transparent",
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

const SmallScreenButtonGroup = ({ anchorEl, open, handleClose }) => {
	return (
		<Menu
			id="fade-menu"
			anchorEl={anchorEl}
			keepMounted
			open={open}
			onClose={handleClose}
			TransitionComponent={Fade}
		>
			<MenuItem onClick={handleClose}>Home</MenuItem>
			<MenuItem onClick={handleClose}>Categories</MenuItem>
			<MenuItem onClick={handleClose}>Market / Mart</MenuItem>
			<MenuItem onClick={handleClose}>Contacts</MenuItem>
			<MenuItem onClick={handleClose}>
				<ButtonGroup size="small">
					<Button variant="contained" color="secondary">
						<Link to="/login" title="Login" />
					</Button>
					<Button variant="contained" color="secondary">
						<Link to="/signup" title="Sign Up" />
					</Button>
				</ButtonGroup>
			</MenuItem>
		</Menu>
	);
};

const BigScreenButtonGroup = ({ classes }) => (
	<Grid className={classes.bigScreen}>
		<Button startIcon={<HomeIcon />} className={classes.btn} color="inherit">
			<Link to="#" title=" " />
		</Button>

		<Button className={classes.btn} color="inherit">
			<Link to="#" title="Categories" />
		</Button>

		<Button className={classes.btn} color="inherit">
			<Link to="/market" title="Market / Mart" />
		</Button>

		<Button className={classes.btn} color="inherit">
			<Link to="#" title="Contacts" />
		</Button>
		<ButtonGroup size="small" variant={"contained"}>
			<Button className={classes.btn} color="primary" style={{ color: "#fff" }}>
				<Link to="/login" title="Login" />
			</Button>
			<Button className={classes.btn} color="primary" style={{ color: "#fff" }}>
				<Link to="/signup" title="Sign Up" />
			</Button>
		</ButtonGroup>
	</Grid>
);

export default function ElevateAppBar(props) {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const open = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<React.Fragment>
			<ElevationScroll {...props}>
				<AppBar className={classes.appbar}>
					<Toolbar className={classes.toolbar}>
						<Typography variant="h6" className={classes.title}>
							<Link to="/" title="Agromart App" />
						</Typography>

						<BigScreenButtonGroup classes={classes} />
						<IconButton
							edge="start"
							className={clsx(classes.menuButton, classes.smallScreen)}
							color="inherit"
							aria-label="menu"
							aria-controls="fade-menu"
							aria-haspopup="true"
							onClick={handleClick}
						>
							<MenuIcon />
						</IconButton>
						<SmallScreenButtonGroup
							anchorEl={anchorEl}
							open={open}
							handleClose={handleClose}
						/>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</React.Fragment>
	);
}

// <Button className={classes.btn} color="inherit">
// <Link to="/login" title="Login" />
// </Button>

// <Button className={classes.btn} color="inherit">
//   <Link to="/register" title="Register" />
//   </Button>
// <picture>
//   <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
//   <source media="(min-width:465px)" srcset="img_white_flower.jpg">
//   <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
// </picture>
