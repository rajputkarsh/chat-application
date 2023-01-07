
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer } from './components/';
import { THEME } from './constants/index';

const client = StreamChat.getInstance(process.env['REACT_APP_STREAM_API_KEY'] ?? "");

function App() {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme={THEME.APP_THEME}>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
