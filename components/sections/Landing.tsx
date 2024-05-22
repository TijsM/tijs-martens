import styled from "styled-components";
import { H1 } from "../Types/PageTypes";
import { Links } from "./Links";

export const Landing = () => {
  return (
    <StSection>
      <StContent>
        <H1>
          Tijs <br /> Martens
        </H1>
        <StSubText>
          Developer with a product passion based in Ghent, Belgium. I love to
          optimize processes and improve the status quo.
        </StSubText>

        <Links />
      </StContent>
    </StSection>
  );
};

const StSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1000px;
  position: relative;
`;

const StContent = styled.div`
  margin: 128px 0px;
`;

const StSubText = styled.p`
  color: white;
  opacity: 0.6;
  margin-top: 48px;

  font-size: 24px;
  @media only screen and (min-width: 768px) {
    font-size: 32px;
    margin-right: 16px;
  }
`;
