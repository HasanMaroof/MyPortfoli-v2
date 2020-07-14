import React from 'react';
import './App.css';
import Layout from './components/Layout/layout';
import { Container } from '@material-ui/core';
function App() {
	return (
		<Container maxWidth="lg">
			<Layout />
		</Container>
	);
}

export default App;
