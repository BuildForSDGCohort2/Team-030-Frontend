import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Link from "../Link";
import clsx from "clsx";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		margin: "10px 42px",
		[theme.breakpoints.down("md")]: {
			margin: "10px 0",
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		cursor: "pointer",
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

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
		style: trigger
			? { color: "#FFF", background: "#126b16ad" }
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

const SmallScreenButtonGroup = ({ anchorEl, open, handleClose }) => (
	<Menu
		id="fade-menu"
		anchorEl={anchorEl}
		keepMounted
		open={open}
		onClose={handleClose}
		TransitionComponent={Fade}
	>
		<MenuItem onClick={handleClose}>Home</MenuItem>
		<MenuItem onClick={handleClose}>Services</MenuItem>
		<MenuItem onClick={handleClose}>Categories</MenuItem>
		<MenuItem onClick={handleClose}>Products</MenuItem>
		<MenuItem onClick={handleClose}>Contacts</MenuItem>
	</Menu>
);

const BigScreenButtonGroup = ({ classes }) => (
	<Grid className={classes.bigScreen}>
		<Button className={classes.btn} color="inherit">
			<Link to="#" title="Home" />
		</Button>

		<Button className={classes.btn} color="inherit">
			<Link to="#" title="Services" />
		</Button>

		<Button className={classes.btn} color="inherit">
			<Link to="#" title="Categories" />
		</Button>

		<Button className={classes.btn} color="inherit">
			<Link to="#" title="Products" />
		</Button>

		<Button className={classes.btn} color="inherit">
			<Link to="#" title="Contacts" />
		</Button>
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
				<AppBar color="transparent">
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
