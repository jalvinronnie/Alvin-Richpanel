import React, {useEffect, useState} from 'react';
import './App.css';
import Chat from './Chat';
import LeftBar from './LeftBar';
import RightProfile from './RightProfile';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      })
  },[]);

  useEffect(() => {
    
  const pusher = new Pusher('3ab8845a6c48eff7a45a', {
    cluster: 'ap2'
  });
  const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      //console.log('inserted');
      //alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });
    return () => {
      channel.unbind_all();
    channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
  


  return (
    <div className="app">
      <div className = "app_body">
      <LeftBar/>
      <Sidebar />
      {/* Chat component 8=*/}
      <Chat messages={messages}/>
      
      <RightProfile />
      </div>
     
    </div>

  
  );
}

export default App;
