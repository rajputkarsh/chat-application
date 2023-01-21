
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ToastContainer } from 'react-toastify';

import { ChannelContainer, ChannelListContainer, Auth } from './components/';
import { THEME } from './constants/index';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const client = StreamChat.getInstance(process.env['REACT_APP_STREAM_API_KEY'] ?? "");

const authToken = false;

function App() {



  return !authToken ? 
  <Auth/> : 
  (
    <div className='app__wrapper'>
      <Chat client={client} theme={THEME.APP_THEME}>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
      <ToastContainer />
    </div>
  );
}

export default App;
