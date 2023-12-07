import {useEffect} from "react";
import {HomeStyle, MainFooter} from "../../utils/styles";
import {
    redirectToContact,
    redirectToLicense,
    redirectToPrivacyPolicy,
    redirectToTeam,
    redirectToTermsOfService,
} from "../../utils/LoginPageUtils";
import {setCookie} from "../../utils/Cookies";
import {botApiUrl} from "../../utils/api";

let amountOfTimeTried: number = 0;

export const CallbackPage = () => {
    if (amountOfTimeTried === 1) {
        alert(
            "Tried to get the session once, but failed. Redirecting to login page."
        );
        window.location.href = "/";
    } else {
        amountOfTimeTried++;
    }

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get("code");

        // check if api is up
        fetch(botApiUrl + "/ping", {
            method: "GET"
        }).then(async (response) => {

            if (!response.ok) {
                throw new Error("The API is down");
            }

        }).catch((error) => {
            alert(
                "The API is down. Redirecting to login page. Error: " +
                error.message
            );
            window.location.href = "/";
        });

        // Change of approach: we get the token and save it in the session storage, then we redirect to the menu page
        fetch(botApiUrl + "/login?code=" + code, {
            method: "POST",
        })
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error("Failed to get the session");
                }

                // Parse JSON response
                const body = await response.json();

                // Get the encrypted user id and expiration time
                const jwt = body.jwt;
                const expiresAt = body.expiresAt;

                if (jwt === null || jwt === undefined || expiresAt === null || expiresAt === undefined) {
                    throw new Error("Failed to get the session");
                }

                // Set the user_id cookie with the encrypted user id
                setCookie("jwt", jwt, {
                    path: "/",
                    expires: new Date(expiresAt * 1000), // Convert to milliseconds
                });

                // Redirect to the menu page
                window.location.href = "/menu";
            })
            .catch((error) => {
                alert(
                    "Failed to get the session. Redirecting to login page. Error: " +
                    error.message
                );
                window.location.href = "/";
            });
    }, []);

    return (
        <HomeStyle>
            {/*  Needed to keep the divs in the center */}
            <div></div>
            <div>Please wait while we get you ready....</div>
            <MainFooter>
                <span onClick={redirectToPrivacyPolicy}>Privacy Policy</span>
                <span onClick={redirectToTermsOfService}>Terms of Service</span>
                <span onClick={redirectToTeam}>The BotCraft Hub team</span>
                <span onClick={redirectToContact}>Contact us</span>
                <span onClick={redirectToLicense}>© 2023 BotCraft Hub</span>
            </MainFooter>
        </HomeStyle>
    );
};
