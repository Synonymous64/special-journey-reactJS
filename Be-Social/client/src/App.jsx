import React from 'react'
import './App.css';
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelContainer, ChannelListContainer, Auth } from './components'
const cookies = new Cookies();
const authToken = cookies.get('token');
const apiKey = 'qec7qrpp28zw';
const client = StreamChat.getInstance(apiKey);
if (authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullname: cookies.get('fullName'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),
    }, authToken);
}
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