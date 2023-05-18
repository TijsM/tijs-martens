import styled from "styled-components";
import { StArticle } from "./Types/ComponentTypes";

export const LinkItemLoader = () => {
  return (
    <StContainer>
      <StTitle />
      <StFunction />
      <StDescription />
    </StContainer>
  );
};

const SkeletonBase = styled.div`
  background-color: #3f3f3fb8;
  border-radius: 4px;
`;

const StContainer = styled(StArticle)`
  display: flex;
  flex-direction: column;
`;

const StTitle = styled(SkeletonBase)`
  background-color: #3f3f3fb8;
  width: 30%;
  height: 24px;
`;
const StFunction = styled(SkeletonBase)`
  background-color: #3f3f3fb8;
  width: 50%;
  height: 16px;
  margin-top: 4px;
  opacity: 0.6;
`;
const StDescription = styled(SkeletonBase)`
  width: 100%;
  height: 72px;
  margin-top: 16px;
  opacity: 0.6;
`;
