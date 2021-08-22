import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';

function SidebarChat({ id, name, addNewChat }) {
	const [seed, setSeed] = useState('');
	const [messages, setMessages] = useState('');
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);

	return (
		<div className="sidebarChat">
			<Avatar
				src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
			/>
			<div className="sidebarChat_info">
				<h2>{name}</h2>
				<p>{messages[0]?.message}</p>
			</div>
		</div>
	);
}

export default SidebarChat;
