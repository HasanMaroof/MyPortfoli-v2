/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { makeStyles, Theme, createStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			marginTop: 60,
		},

		gridStyle: {
			marginTop: 40,
		},
		headingTypography: {
			marginTop: 16,
		},
		paraTypography: {
			marginTop: 32,
		},
	}),
);

export default function About() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				container
				alignContent="flex-start"
				alignItems="flex-start"
				direction="column"
				className={classes.gridStyle}
			>
				<Grid item>
					<Typography
						variant="subtitle1"
						style={{ fontWeight: 900 }}
						color="textSecondary"
						gutterBottom
					>
						ABOUT ME
					</Typography>

					<Typography className={classes.headingTypography} variant="h5" gutterBottom>
						WHO AM I?
					</Typography>

					<Typography className={classes.paraTypography} variant="body1" gutterBottom>
						<span style={{ fontWeight: 600 }}>I'm Hasan.</span> I'm a software developer
						based in London, United Kingdom. I'm competent in leveraging agile
						frameworks to provide a robust synopsis for high level overviews for UI/UX
						implementations. Iterative approach to corporate strategy to foster
						collaborative thinking to furhter strengthen the overall value proposition.
						<br />
						<br />
						With every line of code, I strive to make the web a beautiful place.
						<br />
						<br />
						I'm currently working at Recruitment Smart Technologies ltd. in London.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
