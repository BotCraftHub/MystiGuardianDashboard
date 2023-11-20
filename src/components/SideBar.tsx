import {fallDown as Menu} from "react-burger-menu";
import "../utils/styles/sidebar.css";
import {useContext} from "react";
import {GuildContext} from "../utils/context/GuildContext";
import {useNavigate} from "react-router";

export const Sidebar = () => {
    const {guild} = useContext(GuildContext);
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        navigate(path);
    };

    return (
        <Menu>
            <a className="Dashboard" onClick={() => handleClick(`/dashboard`)}>
                Dashboard
            </a>
            <a
                className="moderation"
                onClick={() => handleClick(`/dashboard/channel`)}
            >
                Set Channel
            </a>
        </Menu>
    );
};
