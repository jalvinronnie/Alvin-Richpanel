import React from 'react';
import './App.css';
import Chat from './Chat';
import LeftBar from './LeftBar';
import RightProfile from './RightProfile';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className = "app_body">
      <LeftBar/>
      <Sidebar />
      {/* Chat component 8=*/}
      <Chat />
      
      <RightProfile />
      </div>
     
    </div>

  
  );
}

export default App;
