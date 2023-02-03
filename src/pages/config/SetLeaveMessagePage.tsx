import {Button, Container, CustomSelect, Flex, Page, TextArea, Title} from "../../styles";

export const SetLeaveMessage = () => {
    return <Page>
        <Container>
            <Title>Set Leave Message</Title>
            <section>
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
            </section>
            <section>
                <div>
                    <label htmlFor="message">Current Message:</label>
                </div>
                <TextArea id={"message"}></TextArea>
            </section>
            <Flex justifyContent={"flex-end"}>
                <Button variant={"secondary"} style={{marginRight: "0.625em"}}>
                    Reset
                </Button>
                <Button variant={"primary"}>
                    Save
                </Button>
            </Flex>
        </Container>
    </Page>
}