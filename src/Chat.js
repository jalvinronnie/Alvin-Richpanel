import React, { useState, useEffect } from 'react';
import { Avatar, IconButton, TextField } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css';
import axios from "./axios";

function Chat({ messages }) {
	const [seed, setSeed] = useState('');
	
	const [roomName, setRoomName] = useState('John');
	const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();

       
        await axios.post('/messages/new', {
            "message": input,
            "name":"DEMO APP",
            "timestamp":"Just now !",
            "received": false
        });

        setInput('');
    }
	/*const [messages, setMessages] = useState([
		{
			name: 'John',
			message: 'Hello There',
		},
		{
			name: 'Amazon Customer Service',
			message: 'Hi! What can we help you with?',
		},
	]);*/
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
			<div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.received && "chat_receiver"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat_timestamp">{message.timestamp}</span>
                    </p>
                ))}
               

                {/* <p className="chat__message chat__reciever">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p> */}
            </div>


			
			<div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
		</div>
	);
}

export default Chat;
