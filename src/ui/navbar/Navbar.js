import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Navbar = () => {
	const styles = {
		link: {
			textDecoration: "none",
			color: "#FFF"
		},
		div: {
			marginBottom: "50px"
		}
	}

	return (
		<div style={styles.div}>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button>
					<Link style={styles.link} to="/">Home</Link>
				</Button>

				<Button>
					<Link style={styles.link} to="/about">About</Link>
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default Navbar;