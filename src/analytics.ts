import ReactGA from "react-ga4";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string;

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};