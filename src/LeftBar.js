import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import EmailIcon from '@material-ui/icons/Email';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import './LeftBar.css';
import { Box } from '@material-ui/core';
function LeftBar() {
	return (
		<Box
			bgcolor="primary.main"
			className="leftbar"
			color="primary.contrastText"
		>
			<div className="leftbarDiv">
				<IconButton className="leftbarButton" color="inherit">
					<ForumIcon />
				</IconButton>
			</div>
			<div className="leftbarDiv">
				<IconButton className="leftbarButton" color="inherit">
					<EmailIcon />
				</IconButton>
			</div>
			<div className="leftbarDiv">
				<IconButton className="leftbarButton" color="inherit">
					<PeopleAltIcon />
				</IconButton>
			</div>
			<div className="leftbarDiv">
				<IconButton className="leftbarButton" color="inherit">
					<TrendingUpIcon />
				</IconButton>
			</div>

		</Box>
	);
}

export default LeftBar;
