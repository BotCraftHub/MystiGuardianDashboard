import {getAuthLogin} from "./api";
import {getCookie} from "./Cookies";

export const redirectToDiscord = () => {
    if (getCookie("access_token") === null) {
        window.location.href = getAuthLogin();
    } else {
        window.location.href = "/menu";
    }
};

export const redirectToSupportServer = () => {
    window.location.href = "https://discord.gg/PCz8ET778U";
};

export const redirectToPrivacyPolicy = () => {
    window.location.href = "/privacy-policy";
};

export const redirectToTermsOfService = () => {
    window.location.href = "/terms-of-service";
};

export const redirectToTeam = () => {
    window.location.href = "/team";
};

export const redirectToContact = () => {
    window.location.href = "/contact";
};

export const redirectToLicense = () => {
    window.location.href =
        "https://github.com/BotCraftHub/MystiGuardian/blob/main/LICENSE";
};
