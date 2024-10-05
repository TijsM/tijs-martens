import styled from "styled-components";
import { StSection } from "../styles/StSection";

export const Links = () => {
  return (
    <StContainer>
      <StSection>
        <StLink href={"https://www.linkedin.com/in/tijsm"} target="_blank">
          LinkedIn
        </StLink>
        <StLink href={"https://github.com/TijsM"} target="_blank">
          GitHub
        </StLink>
        <StLink
          href={"https://www.strava.com/athletes/48852110"}
          target="_blank"
        >
          Strava
        </StLink>
      </StSection>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  flex-direction: column;

  bottom: 48px;
`;
const StLink = styled.a`
  color: white;
  opacity: 0.6;
  margin-right: 16px;
  padding-bottom: 20px;

  font-size: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 24px;
    margin-right: 16px;
  }
`;
