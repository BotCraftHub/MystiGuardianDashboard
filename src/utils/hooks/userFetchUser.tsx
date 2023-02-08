import {useEffect, useState} from "react";
import {getAuthStatus} from "../api";

export const useFetchUser = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        getAuthStatus()
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, []);
}