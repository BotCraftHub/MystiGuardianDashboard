import { getCookie } from "./Cookies";
import { List } from "./List";
import { getBotApiUrl } from "./api";
import {RetrievableSettings } from "./enums";

export const fetchSettings = async (
  name: RetrievableSettings,
  guildId: string,
  )
    : Promise<any> => {
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
        throw new Error("Something went wrong while fetching the setting " + name);
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
  data: List<any>
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

const convertDataToJSON = (data : List<any>) : string => {
  let json = "";
  data.forEach((element) => {
    json += JSON.stringify(element);
  });
  return json;
}