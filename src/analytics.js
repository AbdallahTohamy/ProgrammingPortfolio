import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-969ZC5KFJM"); // Replace with your Measurement ID
};

export const trackEvent = (category, action, label = null) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
};
