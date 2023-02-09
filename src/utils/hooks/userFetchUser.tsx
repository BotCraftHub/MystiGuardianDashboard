import {useEffect, useState} from "react";
import {getAuthStatus} from "../api";
import {User} from "../types";

export const useFetchUser = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        getAuthStatus()
            .then(({data}) => {
                console.log(data);
                setUser(data);
            })
            .catch((err) => console.log(err));
    }, []);
}