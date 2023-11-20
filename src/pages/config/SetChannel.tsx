import {useContext, useEffect, useState} from "react";
import {GuildContext} from "../../utils/context/GuildContext";
import {fetchAuditChannel} from "../../utils/db";
import {Container, CustomSelect, Page, PageTitle,} from "../../utils/styles";
import {botApiUrl} from "../../utils/api";
import {HashMap} from "../../utils/HashMap";
import {getCookie} from "../../utils/Cookies";
import {Channel} from "../../entites/Channel";
import {MainButton} from "../../utils/styles/buttonStyled";

export const SetChannel = () => {
    const {guild} = useContext(GuildContext);
    const guildId = (guild && guild.id) || "";
    const [currentLoadingStatus, setCurrentLoadingStatus] = useState("waiting");
    const [auditChannel, setAuditChannel] = useState<Channel | undefined>();
    const [selectedChannel, setSelectedChannel] = useState<string | undefined>(
        auditChannel?.id
    );
    const [showButton, setShowButton] = useState(false);
    const [channels, setChannels] = useState<HashMap<string, string>>(
        new HashMap()
    );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (currentLoadingStatus === "waiting") {
            setCurrentLoadingStatus("loading");

            fetchAuditChannel(guildId)
                .then((res) => {
                    setAuditChannel(res || undefined);
                    setSelectedChannel(res?.id);
                })
                .catch((error) => {
                    console.error("Error fetching audit channel:", error);
                })
                .finally(() => {
                    setCurrentLoadingStatus("loaded");
                });
        }
    }, [currentLoadingStatus, guildId]);

    useEffect(() => {
        fetch(botApiUrl + "/channels?guildId=" + guildId, {
            method: "GET",
            headers: {
                Authorization: `jwt ${getCookie("jwt")}`,
            },
        })
            .then((res) => res.json())
            .then((res) => {
                const channelMap = new HashMap<string, string>();
                res.forEach((channel: Channel) => {
                    channelMap.add(channel.id, channel.name);
                });
                setChannels(channelMap);
            })
            .catch((error) => {
                console.error("Error fetching channels:", error);
            });
    }, [guildId]);

    const handleChannelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (!isLoading) {
            if (event.target.value !== "") {
                setSelectedChannel(event.target.value);
                setShowButton(true);
            } else {
                setSelectedChannel(undefined);
                setShowButton(false);
            }
        }
    };

    const handleButtonClick = () => {
        setIsLoading(true);

        fetch(botApiUrl + "/audit-channel?guildId=" + guildId + "&channelId=" + selectedChannel, {
            method: "PUT",
            headers: {
                Authorization: `jwt ${getCookie("jwt")}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    // Update the selectedChannel with the received channel id
                    setSelectedChannel(data.id);
                    // Reload the audit channel data
                    setCurrentLoadingStatus("waiting");
                } else {
                    console.error("Error setting new audit channel");
                }
            })
            .catch(error => {
                console.error("Error sending request to set new audit channel:", error);
            })
            .finally(() => {
                setIsLoading(false);
                setShowButton(false);
            });
    };

    return (
        <>
            <Page>
                <PageTitle>Set Channels</PageTitle>
                <Container>
                    {currentLoadingStatus === "loading" && <p>Loading...</p>}
                    {currentLoadingStatus === "loaded" && (
                        <section>
                            <div>
                                <label>Current Audit Channel:</label>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <CustomSelect>
                                    <select onChange={handleChannelChange} value={selectedChannel || ""}
                                            disabled={isLoading}>
                                        <option value="">
                                            {auditChannel ? auditChannel.name : "No audit channel set"}
                                        </option>
                                        {Array.from(channels.entries()).map(([id, name]) => (
                                            <option key={id} value={id}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </CustomSelect>
                                {showButton && (
                                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        {isLoading ? (
                                            <MainButton className="loading-button" disabled>
                                                Loading...
                                            </MainButton>
                                        ) : (
                                            <MainButton className="save-button" onClick={handleButtonClick}>
                                                Save Changes
                                            </MainButton>
                                        )}
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                    {currentLoadingStatus === "error" && <p>Error loading data.</p>}
                </Container>
            </Page>
        </>
    );
};