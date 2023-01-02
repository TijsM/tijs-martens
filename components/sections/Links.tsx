import styled from "styled-components";
import { StSection } from "../styles/StSection";

export const Links = () => {
  return (
    <StContainer>
      <StSection>
        <StLink href={"https://github.com/TijsM"} target="_blank">
          GitHub
        </StLink>
        <StLink href={"www.linkedin.com/in/tijsm"} target="_blank">
          LinkedIn
        </StLink>
      </StSection>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 48px;
`;
const StLink = styled.a`
  /* text-decoration: none; */
  color: white;
  font-size: 24px;
  opacity: 0.6;
  margin-right: 16px;
  padding-bottom: 20px;

  @media only screen and (min-width: 768px) {
    font-size: 32px;
    margin-right: 16px;
  }
`;
