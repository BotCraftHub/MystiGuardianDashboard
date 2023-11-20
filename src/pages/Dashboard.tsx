import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {Container, Page, TestTextButtonGroup, TextButton,} from "../utils/styles";
import {useNavigate} from "react-router";

export const Dashboard = () => {
    const {guild} = useContext(GuildContext);
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        <Page>
            <Container>
                <div>
                    <TestTextButtonGroup>
                        <TextButton onClick={() => handleClick(`/dashboard/channel`)}>
                            Set Channel
                        </TextButton>
                    </TestTextButtonGroup>
                </div>
            </Container>
        </Page>
    );
};
