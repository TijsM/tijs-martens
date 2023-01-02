import styled from "styled-components";
import { Title, Body, SubTitle, StArticle } from "./Types/ComponentTypes";

interface LinkItemProps {
  item: { title: string; body: string; link: string; role?: string };
}

export const LinkItem = ({ item }: LinkItemProps) => {
  if (!item.link) {
    return null;
  }

  return (
    <StLink href={item.link} target="_blank">
      <StArticle>
        <Title>{item.title}</Title>
        {item.role ? <SubTitle>{item.role}</SubTitle> : null}
        <Body>{item.body}</Body>
      </StArticle>
    </StLink>
  );
};

const StLink = styled.a`
  text-decoration: none;
`;
