import React from 'react';

import { Container, Role, User, Avatar } from './styles';
import perfil from '../../assets/profile.png';
import bot_perfil from '../../assets/bot.jpg';
import nouser from '../../assets/nouser.png';

interface UserProps {
    nickname: string;
    avatar?: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    avatar,
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}><img src={avatar ? avatar : nouser} alt="photo_profile" /></Avatar>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 2</Role>
            <UserRow nickname="Pablo Paixão" avatar={perfil} />
            <UserRow nickname="Erza Scarlet" isBot avatar={bot_perfil} />

            <Role>Offline - 1</Role>
            <UserRow nickname="Happy" />
        </Container>
    )
};

export default UserList;