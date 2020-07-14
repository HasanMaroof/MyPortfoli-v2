/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { makeStyles, Theme, createStyles, Typography, Grid } from '@material-ui/core';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			marginTop: 70,
		},
		gridStyle: {
			marginTop: 20,
		},
		buttonStyle: {
			marginTop: 20,
			height: 50,
		},
	}),
);

export default function Timelines() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				container
				alignContent="stretch"
				alignItems="stretch"
				justify="flex-start"
				direction="row"
				className={classes.gridStyle}
			>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Typography
						variant="subtitle1"
						style={{ fontWeight: 900 }}
						color="textSecondary"
						gutterBottom
					>
						MY TIMELINE
					</Typography>
				</Grid>
				<Grid item lg={12} md={12} sm={12} xs={12} className={classes.gridStyle}>
					<Timeline>
						<TimelineEvent
							title={
								<div>
									<Typography
										variant="subtitle2"
										style={{ fontWeight: 800 }}
										gutterBottom
									>
										SENIOR UI DEVELOPER (REACT SPECIALIST)
									</Typography>
									<Typography
										variant="subtitle2"
										color="textSecondary"
										gutterBottom
									>
										RECRUITMENT SMART TECHNOLGIES LTD.
									</Typography>
								</div>
							}
							createdAt={
								<Typography
									variant="subtitle1"
									style={{ fontWeight: 900 }}
									gutterBottom
								>
									AUGUST 2019 - PRESENT
								</Typography>
							}
							icon={<WorkOutlineIcon />}
						>
							<Typography
								variant="subtitle1"
								style={{ fontWeight: 800 }}
								gutterBottom
							>
								Client: UI Centric, LONDON
							</Typography>
							<Typography variant="body2" gutterBottom>
								Currently working on a banking project for 10X Banking, providing
								solution to banks for managing products and features. Primarily
								responsible to design and develop reusable UI components using
								reactJs, state management using reduxsaga and responsive web
								application using styled component and material UI.
							</Typography>
						</TimelineEvent>
						<TimelineEvent
							title={
								<div>
									<Typography
										variant="subtitle2"
										style={{ fontWeight: 800 }}
										gutterBottom
									>
										UI DEVELOPER (REACT SPECIALIST)
									</Typography>
									<Typography
										variant="subtitle2"
										color="textSecondary"
										gutterBottom
									>
										TATA CONSULTANCY SERVICES (TCS)
									</Typography>
								</div>
							}
							createdAt={
								<Typography
									variant="subtitle1"
									style={{ fontWeight: 900 }}
									gutterBottom
								>
									JANUARY 2019 - JULY 2019
								</Typography>
							}
							icon={<WorkOutlineIcon />}
						>
							<Typography
								variant="subtitle1"
								style={{ fontWeight: 800 }}
								gutterBottom
							>
								Client: Rolls Royce, LONDON
							</Typography>
							<Typography variant="body2" gutterBottom>
								Work closely with internal development, product management and
								design team. Identifying ways to improve design and development
								process. Work with microServices teams on RESTful API designs-
								assist with future scripted API’s and Web Socket investigations.
								Working within Agile development environment, in a
								multi-disciplinary team with a product and feature based focus.
								Assisting in development of software technical documents. The
								application is for pilot and ground staff of Singapore Airlines to
								understand the factor of the previous landing of the flight. Like is
								it the landing was smooth or hard if the landing of the flight is
								hard what factors are responsible for that. Technologies include
								(ReactJS, Redux-Saga, Typescript,Node,ECMAscript6, Bootstrap,
								Font-awesome, SASS, Echarts, d3Js, Jest, Enzyme, Web pack, Babel,
								NPM)
							</Typography>
							<Typography
								variant="subtitle1"
								style={{ fontWeight: 800 }}
								gutterBottom
							>
								Achievements:
							</Typography>
							<Typography variant="body2" gutterBottom>
								Built a UI framework using React & Redux which extracts live flight
								data (AQD data) from the Singapore airlines and showcase it in
								different chart format for safety management on web application.
							</Typography>
						</TimelineEvent>
						<TimelineEvent
							title={
								<div>
									<Typography
										variant="subtitle2"
										style={{ fontWeight: 800 }}
										gutterBottom
									>
										UI DEVELOPER (ANGULAR / REACT SPECIALIST)
									</Typography>
									<Typography
										variant="subtitle2"
										color="textSecondary"
										gutterBottom
									>
										INFOSYS LTD
									</Typography>
								</div>
							}
							createdAt={
								<Typography
									variant="subtitle1"
									style={{ fontWeight: 900 }}
									gutterBottom
								>
									OCTOBER 2015 - DECEMBER 2018
								</Typography>
							}
							icon={<WorkOutlineIcon />}
						>
							<Typography
								variant="subtitle1"
								style={{ fontWeight: 800 }}
								gutterBottom
							>
								CLIENTS: Halliburton and AT&T, USA
							</Typography>
							<Typography variant="body2" gutterBottom>
								Understand user requirements and come up with customized and white
								box solution. Prepare all technical documents deliverables, design
								level document, process flow document, job flow diagram for clients.
								Create Reusable UI components, Design Wireframes. Designing overall
								architecture of the web applications having a good eye on security
								and data protection issues. Writes simple and clean code and have
								excellent bug fixing and trouble shooting skills.
							</Typography>
							<Typography
								variant="subtitle1"
								style={{ fontWeight: 800 }}
								gutterBottom
							>
								Achievements:
							</Typography>
							<Typography variant="body2" gutterBottom>
								Developed chrome extension for client, which can track the users’
								history who logged in to the Client e-ordering portal.
							</Typography>
							<Typography variant="body2" gutterBottom>
								Developed a complete copyright portal for AT&T --
								https://copyright.att.net/home This portal is CATO complain free;
								CATO complain is basically a set of rules provided by AT&T to make
								web page Accessible.
							</Typography>
							<Typography variant="body2" gutterBottom>
								Developed e-ordering portal for AT&T, created reusable ReactJS
								component.In this portal user can come and order for their ipv4 or
								ipv6 connection. Developed Blockchain transactions and map assisted
								decentralised platform-based ecommerce portal for Halliburton using
								React and Redux.
							</Typography>
						</TimelineEvent>
						<TimelineEvent
							title={
								<div>
									<Typography
										variant="subtitle2"
										style={{ fontWeight: 800 }}
										gutterBottom
									>
										B.TECH IN ELECTRICAL ENGINEERING
									</Typography>
									<Typography
										variant="subtitle2"
										color="textSecondary"
										gutterBottom
									>
										ST.THOMAS' COLLEGE OF ENGINEERING & TECHNOLOGY
									</Typography>
								</div>
							}
							createdAt={
								<Typography
									variant="subtitle1"
									style={{ fontWeight: 900 }}
									gutterBottom
								>
									JULY 2011 - JUNE 2015
								</Typography>
							}
							icon={<SchoolIcon />}
						>
							<Typography variant="body2" gutterBottom>
								Completed B. Tech. in Electrical Engineering with CGPA 8.58/10 from
								St. Thomas’ College of Engineering & Technology, Kolkata, India
							</Typography>
						</TimelineEvent>
					</Timeline>
				</Grid>
			</Grid>
		</div>
	);
}
