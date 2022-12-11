import React from 'react'
import './App.css';
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelContainer, ChannelListContainer, Auth } from './components'

const authToken = false;
const apiKey = 'qec7qrpp28zw';
const client = StreamChat.getInstance(apiKey);
const App = () => {
    if (!authToken) return <Auth />
    return (
        <div className='app__wrapper'>
            <Chat client={client} theme="messaging dark">
                <ChannelListContainer />
                <ChannelContainer />
            </Chat>
        </div>
    );
}

export default App