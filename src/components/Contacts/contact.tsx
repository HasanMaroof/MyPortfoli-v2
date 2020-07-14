/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
	makeStyles,
	Theme,
	createStyles,
	Typography,
	Grid,
	Button,
	TextField,
	InputLabel,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			marginTop: 60,
		},
		gridStyle: {
			marginTop: 100,
		},
		bottomGridStyle: {
			margin: 24,
		},
		headingTypography: {
			marginTop: 16,
		},
		margin: {
			margin: theme.spacing(2),
		},
		buttonStyle: {
			marginTop: 20,
			height: 50,
			width: '100%',
		},
		Icon: {
			margin: 8,
			marginTop: 0,
		},
		divIcon: {
			textAlign: 'center',
			margin: 24,
		},
	}),
);

interface State {
	name: string;
	email: string;
	message: string;
}

export default function Contact() {
	const classes = useStyles();
	const [ values, setValues ] = React.useState<State>({
		name: '',
		email: '',
		message: '',
	});
	const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	return (
		<Grid
			container
			alignContent="stretch"
			alignItems="stretch"
			justify="space-around"
			spacing={2}
			direction="row"
			className={classes.gridStyle}
		>
			<Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
				<Typography
					variant="subtitle1"
					style={{ fontWeight: 900 }}
					color="textSecondary"
					gutterBottom
				>
					CONTACT
				</Typography>

				<Typography variant="h5" className={classes.headingTypography} gutterBottom>
					Get in touch with me!!
				</Typography>
			</Grid>
			<form
				style={{ width: 'inherit', marginLeft: '10px' }}
				action="https://formspree.io/hasanmaroof93@gmail.com"
				method="POST"
			>
				<Grid item lg={6} xl={6} md={6} sm={6} xs={12}>
					<InputLabel htmlFor="filled-adornment-name">Your Name</InputLabel>
					<TextField
						id="filled-name"
						value={values.name}
						onChange={handleChange('name')}
						name="name"
						variant="outlined"
						margin="normal"
						fullWidth
					/>
				</Grid>
				<Grid item lg={6} xl={6} md={6} sm={6} xs={12}>
					<InputLabel htmlFor="filled-adornment-email">Your Email</InputLabel>
					<TextField
						id="filled-email"
						value={values.email}
						onChange={handleChange('email')}
						name="Email"
						variant="outlined"
						margin="normal"
						fullWidth
					/>
				</Grid>
				<Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
					<InputLabel htmlFor="filled-adornment-message">Message for me :)</InputLabel>
					<TextField
						id="filled-message"
						value={values.message}
						onChange={handleChange('message')}
						name="Message"
						variant="outlined"
						multiline
						rows={4}
						margin="normal"
						fullWidth
					/>
				</Grid>
				<Grid
					item
					style={{
						margin: 'auto',
					}}
					lg={2}
					xl={2}
					md={2}
					sm={4}
					xs={4}
				>
					<Button
						type="submit"
						className={classes.buttonStyle}
						color="primary"
						variant="contained"
					>
						Submit
					</Button>
				</Grid>
			</form>
			<Grid item lg={5} xl={5} md={5} sm={4} xs={4} />

			<Grid
				container
				alignContent="center"
				justify="center"
				className={classes.bottomGridStyle}
				alignItems="center"
				direction="row"
			>
				<Typography variant="body1" gutterBottom>
					or, just directly email me at &nbsp;
				</Typography>
				<Typography variant="body1" gutterBottom>
					<a href="mailto:hasanmaroof93@gmail.com?Subject=Hello" target="_top">
						hasanmaroof93@gmail.com
					</a>
				</Typography>
			</Grid>
			<Grid
				container
				alignContent="center"
				justify="center"
				alignItems="center"
				direction="row"
			>
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
			</Grid>
		</Grid>
	);
}
