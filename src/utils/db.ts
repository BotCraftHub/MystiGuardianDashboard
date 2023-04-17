import { getCookie } from "./Cookies";
import { HashMap } from "./HashMap";
import { getBotApiUrl } from "./api";
import { RetrievableSettings } from "./enums";

export const fetchSettings = async (
  name: RetrievableSettings,
  guildId: string
): Promise<any> => {
  fetch(getBotApiUrl() + name, {
    method: "GET",
    headers: {
      AUTHORIZATION: "Bearer " + getCookie("access_token"),
      guildId: guildId,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert("Something went wrong while fetching the setting " + name);
        throw new Error(
          "Something went wrong while fetching the setting " + name
        );
      }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      alert(error);
    });
};

export const updateSettings = async (
  name: RetrievableSettings,
  guildId: string,
  data: HashMap<string, any>
) => {
  fetch(getBotApiUrl() + name, {
    method: "POST",
    headers: {
      AUTHORIZATION: "Bearer " + getCookie("access_token"),
      guildId: guildId,
      data: convertDataToJSON(data),
    },
  }).catch((error) => {
    alert(error);
  });
};

const convertDataToJSON = (data: HashMap<string, any>): string => {
  //id is the key, value is the value
  let json = "{";
  data.forEachEntry((value: string, key: any) => {
    json += '"' + key + '":"' + value + '",';
  });
  json = json.substring(0, json.length - 1);
  json += "}";
  return json;
};
