/* eslint-disable react/jsx-no-target-blank */
// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import clsx from 'clsx';
import {
	makeStyles,
	useTheme,
	Theme,
	createStyles,
	Drawer,
	CssBaseline,
	Toolbar,
	Typography,
	IconButton,
	Avatar,
	AppBar,
	WithWidth,
	withWidth,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Introduction from '../Introduction/introduction';
import About from '../About/about';
import Skills from '../Skills/skills';
import Timeline from '../Timeline/timeline';
import Contact from '../Contacts/contact';
import { Link, Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		appBar: {
			transition: theme.transitions.create([ 'margin', 'width' ], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			transition: theme.transitions.create([ 'margin', 'width' ], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		hide: {
			display: 'none',
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			...theme.mixins.toolbar,
			justifyContent: 'flex-end',
		},
		content: {
			flexGrow: 1,
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(3),

			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: -drawerWidth,
			[theme.breakpoints.down('sm')]: {
				margin: 'auto',
			},
		},
		contentShift: {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
			[theme.breakpoints.down('sm')]: {
				margin: 'auto',
			},
		},
		large: {
			minWidth: theme.spacing(20),
			minHeight: theme.spacing(20),
			margin: theme.spacing(3),
			marginLeft: theme.spacing(8.8),
		},
		nameTypography: {
			textAlign: 'center',
		},
		emailTypography: {
			textAlign: 'center',
			verticalAlign: 'bottom',
			padding: 2,
			opacity: 0.8,
		},
		emailIcon: {
			verticalAlign: 'bottom',
			padding: 2,
			opacity: 0.8,
			marginRight: 4,
		},
		linkStyle: {
			textAlign: 'center',
			padding: 6,
			opacity: 0.8,
			'&:hover': {
				color: 'blue',
			},
			cursor: 'pointer',
		},
		divIcon: {
			textAlign: 'center',
		},
		Icon: {
			margin: 8,
			marginTop: 16,
		},
		toolbarStyle: {
			display: 'inline',
			position: 'fixed',
		},
	}),
);

function Layout(props: WithWidth) {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	function sideMenuClick() {
		if (props.width === 'xs' || props.width === 'sm') {
			setOpen(false);
		} else {
			setOpen(true);
		}
	}

	useEffect(
		() => {
			if (props.width === 'xs' || props.width === 'sm') {
				setOpen(false);
			} else {
				setOpen(true);
			}
		},
		[ props.width ],
	);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Hasan ~ UI/UX Specialist
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant={props.width === 'xs' || props.width === 'sm' ? 'temporary' : 'persistent'}
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Avatar
					alt="Hasan Maroof"
					src={require('../../static/images/hasan_sidebar.jpg')}
					className={classes.large}
				/>
				<Typography variant="h4" className={classes.nameTypography} gutterBottom>
					Hasan Maroof
				</Typography>
				<Typography variant="body1" className={classes.emailTypography} gutterBottom>
					<LocationCityIcon className={classes.emailIcon} />London, United Kingdom
				</Typography>
				<Typography variant="body1" className={classes.emailTypography} gutterBottom>
					<MailOutlineIcon className={classes.emailIcon} />
					<a href="mailto:hasanmaroof93@gmail.com?Subject=Hello" target="_top">
						hasanmaroof93@gmail.com
					</a>
				</Typography>

				{[ 'INTRODUCTION', 'ABOUT', 'SKILLS', 'TIMELINE', 'CONTACT' ].map((text, index) => (
					<Link
						activeClass="active"
						to={text}
						offset={-70}
						smooth
						duration={1000}
						className={classes.linkStyle}
						color="inherit"
						key={index}
						onClick={sideMenuClick}
					>
						{text}
					</Link>
				))}
				<div className={classes.divIcon}>
					<a
						target="_blank"
						rel="noopener"
						href="https://www.linkedin.com/in/hasan-maroof-23959ba6/"
					>
						<LinkedInIcon color="primary" className={classes.Icon} />
					</a>
					<a target="_blank" rel="noopener" href="https://www.facebook.com/rafa4love">
						<FacebookIcon color="primary" className={classes.Icon} />
					</a>
					<a target="_blank" rel="noopener" href="https://www.instagram.com/mr_maroof0/">
						<InstagramIcon color="primary" className={classes.Icon} />
					</a>
					<a target="_blank" rel="noopener" href="https://github.com/HasanMaroof">
						<GitHubIcon color="primary" className={classes.Icon} />
					</a>
				</div>
				<div className={classes.divIcon}>© 2020 Hasan Maroof</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader} />

				<Element name="INTRODUCTION">
					<ScrollAnimation animateIn="fadeIn" delay={500} animateOut="fadeOut">
						<Introduction />
					</ScrollAnimation>
				</Element>
				<Element name="ABOUT">
					<ScrollAnimation animateIn="fadeIn" delay={500} animateOut="fadeOut">
						<About />
					</ScrollAnimation>
				</Element>
				<Element name="SKILLS">
					<ScrollAnimation animateIn="fadeIn" delay={500} animateOut="fadeOut">
						<Skills />
					</ScrollAnimation>
				</Element>
				<Element name="TIMELINE">
					<ScrollAnimation animateIn="fadeIn" delay={500} animateOut="fadeOut">
						<Timeline />
					</ScrollAnimation>
				</Element>
				<Element name="CONTACT">
					<ScrollAnimation animateIn="fadeIn" delay={500} animateOut="fadeOut">
						<Contact />
					</ScrollAnimation>
				</Element>
			</main>
		</div>
	);
}

export default withWidth()(Layout);
