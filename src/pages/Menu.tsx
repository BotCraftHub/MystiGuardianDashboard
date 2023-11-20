import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {GuildContext} from "../utils/context/GuildContext";
import {GuildMenuItem} from "../components/GuildMenuItem";
import {Container, Page} from "../utils/styles";
import {botApiUrl, botInviteUrl, handleGuild} from "../utils/api";
import {List} from "../utils/List";
import {getCookie} from "../utils/Cookies";
import {Guild} from "../entites/Guild";

export const Menu = () => {
    const navigate = useNavigate();
    const {updateGuild} = useContext(GuildContext);

    const handleClick = (guild: Guild) => {
        updateGuild(guild);
        navigate(`/dashboard`);
    };

    const [guilds, setGuilds] = useState<List<Guild>>(new List<Guild>());
    const [guildState, setGuildState] = useState("waiting");

    useEffect(() => {
        const fetchGuilds = async () => {
            try {
                setGuildState("loading");
                const response = await fetch(`${botApiUrl}/guilds`, {
                    method: "GET",
                    headers: {
                        Authorization: `jwt ${getCookie("jwt")}`,
                    },
                });

                if (!response.ok) {
                    alert("Failed to get the guilds. Redirecting to the login page.");
                    navigate(`/`);
                    return;
                }

                const json = await response.json();
                const independentList = new List<Guild>(); // Retained the usage

                for (let i = 0; i < json.length; i++) {
                    const guild = handleGuild(json[i]);
                    if (guild !== null) {
                        independentList.add(guild);
                    }
                }

                setGuilds(independentList);
                setGuildState(independentList.size() === 0 ? "no guilds" : "loaded");
            } catch (error) {
                console.error(error);
                alert("Failed to get the guilds. Redirecting to the login page.");
                navigate(`/`);
            }
        };

        if (guildState === "waiting") {
            fetchGuilds()
                .then(() => {
                })
        }
    }, [guildState, navigate]);

    return (
        <Page>
            <Container>
                <h1>Menu</h1>
                <p>Choose a guild to manage</p>
                {guildState === "loading" && <p>Loading guilds...</p>}
                {guildState === "no guilds" && <p>No guilds found.</p>}
                {guilds?.size() !== 0 &&
                    guilds?.map((guild) => (
                        <div key={guild.id}>
                            <div>
                                <div
                                    onClick={() => {
                                        if (guild.isBotInGuild) {
                                            handleClick(guild);
                                        } else {
                                            alert(
                                                "The bot is not in this guild. You will be redirected to the bot invite page."
                                            );

                                            window.open(
                                                botInviteUrl,
                                                "_blank",
                                                "noopener,noreferrer"
                                            );
                                        }
                                    }}
                                >
                                    <GuildMenuItem guild={guild}/>
                                </div>
                            </div>
                        </div>
                    ))}
            </Container>
        </Page>
    );
};