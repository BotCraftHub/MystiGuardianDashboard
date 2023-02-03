import {Button, Container, CustomSelect, Flex, Page, Title} from "../../styles";

// Include ability to enable or disable the welcome image
export const EnableOrDisableFunctions = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let isWelcomeMessageEnabled = false;

    const onEnableOrDisableWelcomeMessage = (event: any) => {
        console.log(event.target.value);
        isWelcomeMessageEnabled = event.target.value === "Enabled";
    }

    return <Page>
        <Container>
            <Title>Enable or Disable Functions</Title>
            <section>
                <div>
                    <label htmlFor="leaveMessage">Leave Message:</label>
                </div>
                <CustomSelect>
                    <select id={"leaveMessage"}>
                        <option disabled selected>Choose an option</option>
                        <option>Enabled</option>
                        <option>Disabled</option>
                    </select>
                </CustomSelect>
            </section>
            <section>
                <div>
                    <label htmlFor="welcomeMessage">Welcome Message:</label>
                </div>
                <CustomSelect>
                    <select id={"welcomeMessage"}>
                        <option disabled selected>Choose an option</option>
                        <option onClick={onEnableOrDisableWelcomeMessage}>Enabled</option>
                        <option onClick={onEnableOrDisableWelcomeMessage}>Disabled</option>
                    </select>
                </CustomSelect>

                {/*{isWelcomeMessageEnabled ? <section>
                    <div>
                        <label htmlFor="welcomeImage">Welcome Image:</label>
                    </div>
                    <CustomSelect>
                        <select id={"welcomeImage"}>
                            <option disabled selected>Choose an option</option>
                            <option>Enabled</option>
                            <option>Disabled</option>
                        </select>
                    </CustomSelect>
                </section> : null} */}

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