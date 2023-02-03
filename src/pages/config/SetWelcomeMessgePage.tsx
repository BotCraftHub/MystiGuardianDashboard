import {Container, CustomSelect, Page, Title} from "../../styles";

export const SetWelcomeMessage = () => {
    return <Page>
        <Container>
            <Title>Set Welcome Message</Title>
            <div>
                <label>Current Channel:</label>
            </div>
            <CustomSelect>
                <select>
                    <option disabled selected>Choose a channel</option>
                    <option>111</option>
                    <option>222</option>
                    <option>333</option>
                </select>
            </CustomSelect>
        </Container>
    </Page>
}