import { useEffect } from "react";
import ReactGA from "react-ga4";
import posthog from "posthog-js";

export type AnalyticsData = {
  action: "click" | "view";
  name: string;
  properties?: { [data: string]: any };
};

export const initAnalytics = () => {
  posthog.init(process.env.POSTHOG_ID as string, {
    api_host: process.env.POSTHOG_API_HOST,
  });

  ReactGA.initialize([
    { trackingId: process.env.GOOGLE_ANALYTICS_ID as string },
  ]);
};

export const logPageView = () => {
  posthog.capture("view_page", { pageName: window.location.pathname });
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (data: AnalyticsData) => {
  posthog.capture(data.action + "_" + data.name, { ...data.properties });
  ReactGA.event({
    category: data.action,
    action: data.action + " - " + data.name,
  });
};

export const useLogPageView = () => {
  useEffect(() => {
    initAnalytics();
    logPageView();
  }, []);
};
