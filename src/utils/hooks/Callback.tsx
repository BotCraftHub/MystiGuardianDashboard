import {useCallback, useEffect} from "react";

/**
 * When redirected by discord to the callback page, the details needs to be taken and the user then redirected to the dashboard
 */
export const Callback = () => {
    //Just do a fetch to my /auth/callback endpoint
    const fetchCallback = useCallback(() => {
        //get the code added that has been added as an additional querystring parameter
        const code = new URLSearchParams(window.location.search).get('code');

        //code is now exchanged for the user's access token by making a POST request to the token URL with the following parameters:


        fetch('microservice:/auth/callback?code=' + code)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                sessionStorage.set("session_id", data.session_id);
                //Redirect to menus
                window.location.href = '/menu';
            })
            .catch(error => {
                alert(error);
            });
    }, []);

    useEffect(() => {
        fetchCallback();
    }, [fetchCallback]);

    //temporary return so path can be accessed
    return <div/>
}

