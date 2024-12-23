import Head from "next/head";

import styled from "styled-components";

import { useLogPageView } from "../utils/analytics";
import { useEffect } from "react";

export default function Home() {
  useLogPageView();

  useEffect(() => {
    window.location.href = "https://strava-year-review.vercel.app";
  }, []);

  return (
    <>
      <Head>
        <title>Tijs Martens</title>
        <meta
          name="description"
          content="Full stack developer with a product passion based in Ghent, Belgium."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StMain>redirecting</StMain>
    </>
  );
}

const StMain = styled.main`
  background-color: black;
  height: 100vh;
  padding: 16px;
  overflow-y: scroll;

  @media only screen and (min-width: 768px) {
    padding: 16px 256px;
  }
`;
