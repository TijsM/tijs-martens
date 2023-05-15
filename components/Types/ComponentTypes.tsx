import styled from "styled-components";

export const Title = styled.p<{ preventUnderline?: boolean }>`
  color: white;
  font-size: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  color: white;
  font-size: 24px;
  opacity: 0.6;
  padding-top: 4px;

  @media only screen and (min-width: 768px) {
    padding-top: 8px;
    font-size: px;
  }
`;

export const Body = styled.p`
  color: white;
  font-size: 16px;
  padding-top: 16px;
  opacity: 0.6;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StArticle = styled.article`
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  transition: 0.5s;

  @media only screen and (min-width: 768px) {
    width: 500px;
    margin-right: 128px;
    margin-bottom: 48px;
  }

  :hover {
    scale: 0.99;
  }
`;

export const StItems = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
