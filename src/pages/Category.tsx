import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {
    Container,
    Page,
    TestTextButtonGroup,
    TextButton,
} from "../styles";
import {IoSettingsOutline} from 'react-icons/io5'
import {useNavigate} from "react-router";

export const Category = () => {
    const {guildId} = useContext(GuildContext)
    const navigate = useNavigate()
    const handleClick = (path: string) => {
        navigate(path)
    }
    return <Page>
        <Container>
            <div>
                <TestTextButtonGroup>
                <TextButton
                    onClick={() => handleClick(`/dashboard/enable-or-disable-functions`)}>Moderation</TextButton>
                <TextButton
                    onClick={() => handleClick(`/dashboard/enable-or-disable-functions`)}>Join/Leave</TextButton>
                </TestTextButtonGroup>
            </div>
        </Container>
    </Page>
}