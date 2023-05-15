import Head from "next/head";

import styled from "styled-components";
import { Articles } from "../components/sections/Articles";
import { Landing } from "../components/sections/Landing";
import { Projects } from "../components/sections/Projects";
import { SideProjects } from "../components/sections/SideProjects";
import { useLogPageView } from "../utils/analytics";

export default function Home() {
  useLogPageView();

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
      <StMain>
        <Landing />
        <Projects />
        <Articles />
        <SideProjects />
      </StMain>
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
