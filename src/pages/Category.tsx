import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {Container, Flex, Grid, Page, TextButton, Title} from "../styles";
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
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Title>Base Config</Title>
                    <IoSettingsOutline size={35}/>
                </Flex>
                <Grid>
                    <TextButton
                        onClick={() => handleClick(`/dashboard/enable-or-disable-functions`)}>Enable/Disable</TextButton>
                    <TextButton onClick={() => handleClick(`/dashboard/welcome-message`)}>Welcome Message</TextButton>
                    <TextButton onClick={() => handleClick(`/dashboard/leaving-message`)}>Leave Message</TextButton>
                    <TextButton onClick={() => handleClick(`/dashboard/language`)}>Language</TextButton>
                </Grid>
            </div>
            <div style={{borderTop: "0.0625em solid rgba(255, 255, 255, 0.2)", paddingTop: "1.5625em"}}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Title>Channel logs</Title>
                    <IoSettingsOutline size={35}/>
                </Flex>
                <Grid>
                    <TextButton>Mod Logs</TextButton>
                    <TextButton>Bot Logs</TextButton>
                </Grid>
            </div>
        </Container>
    </Page>
}