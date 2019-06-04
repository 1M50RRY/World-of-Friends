import React from 'react';
import '../../../../../css/chats.css'
import {InterlocutorName} from './interlocutorName'
import {LastMessagePreview} from './lastMessagePreview'
import {LastMessageTime} from './lastMessageTime'
import {SecondaryContent} from './secondaryContent'

export const MessagePreviewTextContent = (props) => {
    return (
        <React.Fragment>
            <InterlocutorName isChatSelected={props.isChatSelected} name={props.name}  generateColor={props.generateColor}/>
            <LastMessagePreview 
                isMyMessageLast={props.isMyMessageLast} 
                isChatSelected={props.isChatSelected}
                color={props.color}
                lastMessageText={props.lastMessageText}
                generateColor={props.generateColor}
            />
            <LastMessageTime isChatSelected={props.isChatSelected} lastMessageTime={props.lastMessageTime} generateColor={props.generateColor}/>
            <SecondaryContent 
                isChatSelected={props.isChatSelected}
                isMyMessageLast={props.isMyMessageLast}
                unreadMessages={props.unreadMessages}
                checked={props.checked}
                generateColor={props.generateColor}
            />
        </React.Fragment>
        
    );
}