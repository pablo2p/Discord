import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';
import nouser from '../../assets/nouser.png';
export { Mention } from './styles';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
    avatar?: string;
}

const ChannelMessages: React.FC<Props> = ({
    author,
    date,
    content,
    hasMention,
    isBot,
    avatar
}) => {
    return (
        <Container className={hasMention ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}><img src={avatar ? avatar : nouser} alt="profile_photo" /></Avatar>

            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}

                    <time>{date}</time>
                </Header>
                <Content>{content}</Content>
            </Message>
        </Container>
    )
};

export default ChannelMessages;