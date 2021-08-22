import React, { useState, useEffect } from 'react';
import { Avatar, IconButton, TextField } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css';
function Chat() {
	const [seed, setSeed] = useState('');
	const [input, setInput] = useState('');
	const [roomName, setRoomName] = useState('John');
	const [messages, setMessages] = useState([
		{
			name: 'John',
			message: 'Hello There',
		},
		{
			name: 'Amazon Customer Service',
			message: 'Hi! What can we help you with?',
		},
	]);
	const user = {
		displayName: 'Amazon Customer Service',
	};
	useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
				/>
				<div className="chat_headerInfo">
					<h3 className="chat-room-name">{roomName}</h3>
				</div>
				<div className="chat_headerRight">
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className="chat_body">
				{messages.map((message) => (
					<p
						className={`chat_message ${
							message.name == user.displayName && 'chat_receiver'
						}`}
					>
						<span className="chat_name">{message.name}</span>
						{message.message}
					</p>
				))}
			</div>
			<div className="chat_footer">
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type="text"
						placeholder="Type a message"
					/>
					<button type="submit"> Send a Message</button>
				</form>
				<MicIcon />
			</div>
		</div>
	);
}

export default Chat;
