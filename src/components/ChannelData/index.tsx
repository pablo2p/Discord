import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessages';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import perfil from '../../assets/profile.png';
import bot_perfil from '../../assets/bot.jpg';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="Pablo Paixão"
                    date="20/06/2020"
                    content="Hello Server ;D!"
                    avatar={perfil}
                />
                <ChannelMessage
                    author="Happy"
                    date="20/06/2020"
                    content="Aye Sir!"
                />
                {/* {Array.from(Array(3).keys()).map((n) => (
                    <ChannelMessage 
                    key={n}
                    author="Pablo Paixão"
                    date="20/06/2020"
                    content="Hello Server ;D!"
                />
                ))} */}

                <ChannelMessage 
                    author="Erza Scarlet"
                    date="20/06/2020"
                    content={
                        <>
                            <Mention>@Pablo Paixão</Mention>, Nice Server!
                        </>
                    }
                    avatar={bot_perfil}
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;