import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessages';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

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
                {/* <ChannelMessage 
                    author="Pablo Paixão"
                    date="20/06/2020"
                    content="Renan é muito gay!"
                /> */}
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                    key={n}
                    author="Pablo Paixão"
                    date="20/06/2020"
                    content="Renan é muito gay!"
                />
                ))}

                <ChannelMessage 
                    author="Renan Henrique"
                    date="20/06/2020"
                    content={
                        <>
                            <Mention>@Pablo Paixão</Mention>, sim, eu sou gay!
                        </>
                    }
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