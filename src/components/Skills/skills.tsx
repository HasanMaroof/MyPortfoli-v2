/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
	makeStyles,
	Theme,
	createStyles,
	Typography,
	Grid,
	Avatar,
	Tooltip,
	Zoom,
	Link,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			marginTop: 40,
		},

		gridStyle: {
			marginTop: 30,
		},
		headingTypography: {
			marginTop: 16,
		},
		paraTypography: {
			marginTop: 40,
		},
		slider: {
			trackColor: 'grey',
			selectionColor: theme.palette.primary,
		},
		large: {
			minWidth: theme.spacing(15),
			minHeight: theme.spacing(15),
		},
		ratingStyle: {
			marginLeft: theme.spacing(0),
			marginTop: theme.spacing(1),
		},
	}),
);

export default function Skills() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				container
				alignContent="center"
				spacing={4}
				alignItems="center"
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
						MY SKILLS
					</Typography>
					<Typography className={classes.headingTypography} variant="h5" gutterBottom>
						LANGUAGES:
					</Typography>
				</Grid>

				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://www.javascript.com/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="JavaScript"
								aria-label="ES6"
							>
								<Avatar
									alt="JavaScript"
									src={require('../../static/images/JavaScript-logo.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={4}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="http://es6-features.org/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="ES6"
								aria-label="ES6"
							>
								<Avatar
									alt="ES6"
									src={require('../../static/images/es6.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={4}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://www.typescriptlang.org/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="TypeScript"
								aria-label="ES6"
							>
								<Avatar
									alt="TypeScript"
									src={require('../../static/images/ts.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={4}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link
							target="_blank"
							rel="noopener"
							href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
						>
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="HTML5"
								aria-label="HTML5"
							>
								<Avatar
									alt="HTML5"
									src={require('../../static/images/HTML5.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={4}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link
							target="_blank"
							rel="noopener"
							href="https://developer.mozilla.org/en-US/docs/Archive/CSS3"
						>
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="CSS3"
								aria-label="CSS3"
							>
								<Avatar
									alt="CSS3"
									src={require('../../static/images/CSS3.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={3}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Typography className={classes.headingTypography} variant="h5" gutterBottom>
						FRAMEWORK/LIBRARY:
					</Typography>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://reactjs.org/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="ReactJs"
								aria-label="React"
							>
								<Avatar
									alt="React"
									src={require('../../static/images/React.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={4}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://redux.js.org/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="Redux"
								aria-label="Redux"
							>
								<Avatar
									alt="Redux"
									src={require('../../static/images/Redux.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={4}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://angular.io/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="Angular"
								aria-label="Angular"
							>
								<Avatar
									alt="Angular"
									src={require('../../static/images/angular.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={3}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://material-ui.com/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="Material UI"
								aria-label="Material UI"
							>
								<Avatar
									alt="Material UI"
									src={require('../../static/images/mui.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={4}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://getbootstrap.com/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="Bootstrap"
								aria-label="Bootstrap"
							>
								<Avatar
									alt="Bootstrap"
									src={require('../../static/images/bootstrap.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={3.5}
							precision={0.5}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link
							target="_blank"
							rel="noopener"
							href="https://jestjs.io/docs/en/tutorial-react"
						>
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="Jest"
								aria-label="Jest"
							>
								<Avatar
									alt="Jest"
									src={require('../../static/images/jest.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={3}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Typography className={classes.headingTypography} variant="h5" gutterBottom>
						OTHER:
					</Typography>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://code.visualstudio.com/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="Visual studio code"
								aria-label="vsCode"
							>
								<Avatar
									alt="vsCode"
									src={require('../../static/images/vsCode.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={4}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://git-scm.com/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="Git"
								aria-label="Git"
							>
								<Avatar
									alt="Git"
									src={require('../../static/images/git.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={3}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://nodejs.org/en/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="Node Js"
								aria-label="Node"
							>
								<Avatar
									alt="Node"
									src={require('../../static/images/nodejs-logo.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={3}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://agilemanifesto.org/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="Agile Development"
								aria-label="agile"
							>
								<Avatar
									alt="agile"
									src={require('../../static/images/agile.jpg')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={3.5}
							precision={0.5}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link target="_blank" rel="noopener" href="https://webpack.js.org/">
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="WebPack"
								aria-label="WebPack"
							>
								<Avatar
									alt="WebPack"
									src={require('../../static/images/webpack-logo.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={2.5}
							precision={0.5}
							readOnly
						/>
					</div>
				</Grid>
				<Grid item lg={3} md={3} sm={4} xs={6}>
					<div>
						<Link
							target="_blank"
							rel="noopener"
							href="https://www.json.org/json-en.html"
						>
							<Tooltip
								arrow
								TransitionComponent={Zoom}
								TransitionProps={{ timeout: 600 }}
								placement="top"
								title="JSON"
								aria-label="JSON"
							>
								<Avatar
									alt="JSON"
									src={require('../../static/images/json.png')}
									variant="square"
									className={classes.large}
								/>
							</Tooltip>
						</Link>
						<Rating
							name="read-only"
							className={classes.ratingStyle}
							value={4.5}
							precision={0.5}
							readOnly
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
