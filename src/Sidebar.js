import { Avatar, IconButton, TextField, Typography } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Input, SearchOutlined, TextFields } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import RefreshIcon from '@material-ui/icons/Refresh';
import React, { useState } from 'react';
import './Sidebar.css';
function Sidebar() {
	const [rooms, setRooms] = useState([
		{
			id: 1,
			data: {
				name: 'John',
			},
		},
		{
			id: 2,
			data: {
				name: 'Samuel',
			},
		},
	]);
	return (
		<div className="sidebar">
			<div className="sidebar_header">
				<div className="sidebar_headerRight">
					<Typography variant="h6">Conversations</Typography>
					<IconButton style={{ left: '50px' }}>
						<RefreshIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar_search">
				<div className="sidebar_searchContainer">
					<SearchOutlined />
					<TextField />
					{/* <input type="text" placeholder="Search or start new chat" /> */}
				</div>
			</div>
			<div className="sidebar_chats">
				{rooms.map((room) => (
					<SidebarChat
						key={room.id}
						id={room.id}
						name={room.data.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
