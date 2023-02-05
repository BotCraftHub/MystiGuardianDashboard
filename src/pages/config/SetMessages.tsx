import {Button, Container, CustomSelect, Flex, Page, PageTitle, TextArea, Title} from "../../styles";
import {useState} from "react";

export const SetMessages = () => {
    const [welcomeMessageEnablity, setWelcomeMessageEnablity] = useState("Choose an option");
    const [leaveMessageEnablity, setLeaveMessageEnablity] = useState("Choose an option");



    return <Page>
        <PageTitle>Join and Leave message Config</PageTitle>
        <Container>
            <section>
                <div>
                    <label>Current Welcome Message Status: </label>
                </div>
                <CustomSelect>
                    <select id={"welcomeMessageEnablity"}>
                        <option disabled selected>Choose an option</option>
                        <option onClick={() => setWelcomeMessageEnablity("enable")}>Enable</option>
                        <option onClick={() => setWelcomeMessageEnablity("disable")}>Disable</option>
                    </select>
                </CustomSelect>
            </section>
            {/* If enabled, show the following: */}
            {welcomeMessageEnablity === "enable" && <section>
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
            </section> }
            {welcomeMessageEnablity === "enable" && <section>
                <div>
                    <label htmlFor="message">Current Message:</label>
                </div>
                <TextArea id={"welcome_message"}></TextArea>
            </section> }

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

function addWelcomeMessage() {

}