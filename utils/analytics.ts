import { useEffect } from "react";
// import ReactGA from "react-ga4";
import posthog from "posthog-js";

export type AnalyticsData = {
  properties?: { [data: string]: any };
  action: "click" | "view";
  name: string;
};

export const initGA = () => {
  console.log(process.env.POSTHOG_ID as string, {
    api_host: process.env.POSTHOG_API_HOST,
  })
  posthog.init(process.env.POSTHOG_ID as string, {
    api_host: process.env.POSTHOG_API_HOST,
  });
};

export const logPageView = () => {
  posthog.capture("view_page", { pageName: window.location.pathname });
};

export const logEvent = (data: AnalyticsData) => {
  console.log(data.action + "_" + data.name, { ...data.properties })
  posthog.capture(data.action + "_" + data.name, { ...data.properties });
};

export const useLogPageView = () => {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
};
