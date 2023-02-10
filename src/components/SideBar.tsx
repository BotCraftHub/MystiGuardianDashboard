import {fallDown as Menu} from 'react-burger-menu'
import "../utils/styles/sidebar.css"

export const Sidebar = () => {
    return (
        <Menu>
            <a className="Dashboard" href="/dashboard">Dashboard</a>
            <a className="moderation" href="/dashboard/moderation">Moderation</a>
            <a className="meta" href="/dashboard/meta">Meta</a>
            <a className="messages" href="/dashboard/messages">Join/Leave</a>
            <a className="guilds" href="/menu">Join/Leave</a>
        </Menu>
    );
}