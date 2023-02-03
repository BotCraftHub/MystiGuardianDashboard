import {Button, Container, CustomSelect, Flex, Page, Title} from "../../styles";

export const SetLanguage = () => {
    return <Page>
        <Container>
            <Title>Set A Language</Title>
            <section>
                <div>
                    <label>Current Language:</label>
                </div>
                <CustomSelect>
                    <select id={"language"}>
                        <option disabled selected>Choose a language</option>
                        <option>English</option>
                        <option>German</option>
                    </select>
                </CustomSelect>
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