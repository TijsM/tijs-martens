import styled from "styled-components";
import { StSection } from "../styles/StSection";
import { logEvent } from "../../utils/analytics";

export const Links = () => {
  return (
    <StContainer>
      <StSection>
        <StLink
          onClick={() => {
            logEvent({
              action: "click",
              name: "open_link_from_header",
              properties: {
                urlName: "LinkedIn",
              },
            });
          }}
          href={"https://www.linkedin.com/in/tijsm"}
          target="_blank"
        >
          LinkedIn
        </StLink>
        <StLink
          onClick={() => {
            logEvent({
              action: "click",
              name: "open_link_from_header",
              properties: {
                urlName: "GitHub",
              },
            });
          }}
          href={"https://github.com/TijsM"}
          target="_blank"
        >
          GitHub
        </StLink>
        <StLink
          onClick={() => {
            logEvent({
              action: "click",
              name: "open_link_from_header",
              properties: {
                urlName: "Strava",
              },
            });
          }}
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
