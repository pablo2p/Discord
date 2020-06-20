import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';
import perfil from '../../assets/profile.png';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar><img src={perfil} alt="profile" /></Avatar>
                <UserData>
                    <strong>Pablo Paixão</strong>
                    <span>#9995</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    )
};

export default UserInfo;