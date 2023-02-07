import {FaDiscord, FaQuestionCircle} from "react-icons/fa";
import {HomeStyle, MainButton, MainFooter} from "../styles";

export const LoginPage = () => {

    const redirect = () => {
        let port = process.env.PORT
        let publicUrl = process.env.PUBLIC_URL
        //http://localhost:3001/api/auth/login
        window.location.href = `${publicUrl}:${port}/api/auth/login`
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
