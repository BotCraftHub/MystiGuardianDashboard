import {useCallback, useEffect} from "react";

/**
 * When redirected by discord to the callback page, the details needs to be taken and the user then redirected to the dashboard
 */
export const Callback = () => {
    //Just do a fetch to my /auth/callback endpoint
    const fetchCallback = useCallback(async () => {
        //get the code added that has been added as an additional querystring parameter
        const code = new URLSearchParams(window.location.search).get('code');
        alert("Code: " + code);

        //code is now exchanged for the user's access token by making a POST request to the token URL with the following parameters:
        const res = await fetch('/api/auth/callback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: process.env.DISCORD_AUTH_REDIRECT_URL,
            })
        });

        //TODO : FInish this

        //Redirect to dashboard
        window.location.href = '/menu';
    }, []);

    //temporary return so path can be accessed
    return <div/>
}

