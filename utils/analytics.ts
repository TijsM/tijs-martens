import { useEffect } from "react";
import ReactGA from "react-ga4";

export type AnalyticsTypes = "click";

export type AnalyticsData = {
  event: {
    category: "article" | "project";
    type: AnalyticsTypes;
    name: string;
  };
};

export const initGA = () => {
  console.log("GA init");
  ReactGA.initialize([
    { trackingId: process.env.GOOGLE_ANALYTICS_ID as string },
  ]);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (data: AnalyticsData) => {
  console.log("GA event", data);
  ReactGA.event({
    category: "Home",
    action: data.event.type + " - " + data.event.name,
  });
};

export const useLogPageView = () => {
  useEffect(() => {
    console.log("in effect")
    initGA();
    logPageView();
  }, []);
};
