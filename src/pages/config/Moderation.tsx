import {
  Container,
  Page,
  PageTitle,
} from "../../utils/styles";
import { useContext, useEffect, useState } from "react";
import { GuildContext } from "../../utils/context/GuildContext";
import { fetchSettings, updateSettings } from "../../utils/db";
import { RetrievableSettings } from "../../utils/enums";
import { List } from "../../utils/List";
import { Status } from "../../components/Status";

export const Moderation = () => {
  const { guild } = useContext(GuildContext);
  const guildId = (guild && guild.id) || "";
  const [currentAntiSpoilerStatus, setCurrentAntiSpoilerStatus] =
    useState(false);
  const [currentLoadingStatus, setCurrentLoadingStatus] = useState("waiting");

  useEffect(() => {
    if (currentLoadingStatus === "waiting") {
      setCurrentLoadingStatus("loading");
      fetchSettings(RetrievableSettings.ANTI_SPOILER, guildId).then((res) => {
        //break down the data
        const data = res.data;
        //look for a status
        if (data.status) {
          //if there is a status, set it
          setCurrentAntiSpoilerStatus(data.status);
          setCurrentLoadingStatus("loaded");
        } else {
          //if there is no status, set it to false
          setCurrentAntiSpoilerStatus(false);
          setCurrentLoadingStatus("loaded");
        }
      });
    }
  }, [currentLoadingStatus, guildId]);

  const save = async (id: string, status: boolean) => {
    try {
      setCurrentAntiSpoilerStatus(status);
      await updateSettings(
        RetrievableSettings.ANTI_SPOILER,
        guildId,
        List.of(currentAntiSpoilerStatus)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Page>
      <PageTitle>Moderation Config</PageTitle>

      <Container>
        <h1>Enable/Disable Anti-Spoiler</h1>
        {currentLoadingStatus === "loading" && <p>Loading...</p>}
        {currentLoadingStatus === "loaded" &&
          Status(
            "anti-spoiler-status",
            currentAntiSpoilerStatus,
            setCurrentAntiSpoilerStatus,
            save
          )}
      </Container>
    </Page>
  );
};
