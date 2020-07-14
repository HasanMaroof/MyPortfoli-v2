/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
	makeStyles,
	Theme,
	createStyles,
	Paper,
	Typography,
	Grid,
	Button,
} from '@material-ui/core';
import Image from '../../static/images/Intro.jpeg';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		paperContainer: {
			height: 'auto',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			width: '-webkit-fill-available',
			backgroundImage: `url(${Image})`,
			padding: 40,
		},
		gridStyle: {
			marginTop: 40,
		},
		buttonStyle: {
			marginTop: 20,
			height: 50,
		},
		cloudIcon: {
			marginLeft: 5,
		},
	}),
);

export default function Introduction() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paperContainer}>
				<Grid
					container
					alignContent="flex-start"
					alignItems="flex-start"
					direction="column"
					className={classes.gridStyle}
				>
					<Grid item>
						<Typography variant="h3" style={{ color: 'white' }} gutterBottom>
							Hi!
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h3" style={{ color: 'white' }} gutterBottom>
							I'm Hasan
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h3" style={{ color: 'white' }} gutterBottom>
							I love building
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="h2" style={{ color: 'white' }} gutterBottom>
							THINGS!!
						</Typography>
					</Grid>
				</Grid>
				<Grid
					container
					alignContent="flex-end"
					alignItems="flex-end"
					direction="column"
					className={classes.gridStyle}
				>
					<Grid item>
						<Button
							href={require('../../static/resume/Hasan_UI_Specialist.pdf')}
							download
							className={classes.buttonStyle}
							variant="contained"
							color="primary"
						>
							Download CV <CloudDownloadIcon className={classes.cloudIcon} />
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
