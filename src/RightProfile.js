import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './RightProfile.css';
function RightProfile() {
	const [seed, setSeed] = useState('');
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	return (
		<div className=" rightprofile">
			<Grid container alignItems="center" justifyContent="center">
				<Grid item style={{ marginTop: '50px', marginBottom: '20px' }}>
					<Avatar
						src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
						style={{
							width: '100px',
							height: '100px',
							marginBottom: '20px',
						}}
					/>
					<Typography style={{ textAlign: 'center' }} variant="h6">
						John
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}

export default RightProfile;
