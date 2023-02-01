import {FaDiscord, FaQuestionCircle} from "react-icons/fa";
import {HomeStyle, MainButton, MainFooter} from "../styles";

//TODO: Use flutter css once finished
export const Home = () => (
    <HomeStyle
    >
        {/*  needed to keep the divs in the center */}
        <div></div>
        <div>
            <MainButton>
                <FaDiscord size={50} color="5865F2"/>
                <p style={{fontSize: '1.4em'}}>
                    Login With Discord
                </p>
            </MainButton>
            <MainButton>
                <FaQuestionCircle size={50}/>
                <p style={{fontSize: '1.4em'}}>
                    Support Server
                </p>
            </MainButton>
        </div>
        <MainFooter>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span> The Black Onion team</span>
            <span>Contact us</span>
            <span>© 2023 Black Onion</span>
        </MainFooter>
    </HomeStyle>
);
