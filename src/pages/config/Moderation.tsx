import { Container, Page, PageTitle } from "../../utils/styles";
import { useContext, useEffect, useState } from "react";
import { GuildContext } from "../../utils/context/GuildContext";
import { fetchSettings, updateSettings } from "../../utils/db";
import { RetrievableSettings } from "../../utils/enums";
import { Status } from "../../components/Status";
import { HashMap } from "../../utils/HashMap";

export const Moderation = () => {
  const { guild } = useContext(GuildContext);
  const guildId = (guild && guild.id) || "";
  const [currentModerationStatuses, setCurrentModerationStatuses] = useState(
    new HashMap<string, boolean>()
  );
  const [currentLoadingStatus, setCurrentLoadingStatus] = useState("waiting");

  useEffect(() => {
    if (currentLoadingStatus === "waiting") {
      setCurrentLoadingStatus("loading");
      fetchSettings(RetrievableSettings.MODERATION, guildId).then((res) => {
        setCurrentModerationStatuses(res);
        setCurrentLoadingStatus("loaded");
      });
    }
  }, [currentLoadingStatus, guildId]);

  const save = async (id: string, status: boolean) => {
    try {
      setCurrentModerationStatuses(HashMap.of(id, status));
      await updateSettings(
        RetrievableSettings.MODERATION,
        guildId,
        currentModerationStatuses
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
            "anti-spoiler",
            currentModerationStatuses.get("anti-spoiler") || false,
            save
          )}
      </Container>
    </Page>
  );
};
