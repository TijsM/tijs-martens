import styled from "styled-components";
import { H1 } from "./Types";

export const Landing = () => {
  return (
    <StSection>
      <H1>Tijs Martens</H1>
      <StSubText>
        Full stack developer with a product passion based in Ghent, Belgium.
      </StSubText>
    </StSection>
  );
};

const StSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`;

const StSubText = styled.p`
  font-size: 36px;
  color: white;
  opacity: 0.6;
  margin-top: 48px;
`;
