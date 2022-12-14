import React from 'react'
import { Channel, MessageSimple, useChatContext } from 'stream-chat-react'
import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';
const ChannelContainer = (
    {
        createType,
        isCreating,
        setIsCreating,
        isEditing,
        setIsEditing
    }) => {
    const { channel } = useChatContext();
    if (isCreating) {
        return (
            <div className='channel__container'>
                <CreateChannel createType={createType} setIsCreating={setIsCreating} />
            </div>
        )
    }
    if (isEditing) {
        return (
            <div className='channel__container'>
                <EditChannel setIsEditing={setIsEditing} />
            </div>
        )
    }
    const EmptyState = () => (
        <div className='channel-empty__container'>
            <p className="channel-empty__first" style={{ color: 'white' }}>
                This is the beginning of your chat history.
            </p>
            <p className="channel-empty__first" style={{ color: 'white' }}>
                Send messages, attachments, links, emojis and many more...
            </p>
        </div>
    )
    return (
        <div className='channel__container'>
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i) => <MessageSimple
                    key={i} {...messageProps}
                />}
            >
                <ChannelInner setIsEditing={setIsEditing} />
            </Channel>
        </div>
    )
}

export default ChannelContainer