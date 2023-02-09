import {FaDiscord, FaQuestionCircle} from "react-icons/fa";
import {HomeStyle, MainButton, MainFooter} from "../utils/styles";
import {getAuthLogin} from "../utils/api";

export const LoginPage = () => {

    const redirect = () => {
        //http://localhost:3001/api/auth/login
        window.location.href = getAuthLogin();
    }

    return (
        <HomeStyle
        >
            {/*  needed to keep the divs in the center */}
            <div></div>
            <div>
                <MainButton onClick={redirect}>
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
}
