import { useEffect } from "react";
import ReactGA from "react-ga4";

export type AnalyticsTypes = "click";

export type AnalyticsData = {
  event: {
    type: AnalyticsTypes;
    name: string;
  };
};

const isDev = process.env.NODE_ENV === "development";

export const initGA = () => {
  if (!isDev) {
    ReactGA.initialize([
      { trackingId: process.env.GOOGLE_ANALYTICS_ID as string },
    ]);
  }
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (data: AnalyticsData) => {
  !isDev &&
    ReactGA.event({
      category: "Home",
      action: data.event.type + " - " + data.event.name,
    });
};

export const useLogPageView = () => {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
};
