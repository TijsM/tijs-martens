import styled from "styled-components";

export const Title = styled.p`
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
    font-size: 32px;
  }
`;

export const Body = styled.p`
  color: white;
  font-size: 16px;
  padding-top: 16px;
  opacity: 0.6;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StArticle = styled.article`
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 500px;

  @media only screen and (min-width: 768px) {
    margin-right: 128px;
    margin-bottom: 48px;
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
