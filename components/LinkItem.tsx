import styled from "styled-components";
import { logEvent } from "../utils/analytics";
import { Title, Body, SubTitle, StArticle } from "./Types/ComponentTypes";

interface LinkItemProps {
  item: {
    title: string;
    body: string;
    link: string;
    role?: string;
    type: "article" | "project";
  };
}

export const LinkItem = ({ item }: LinkItemProps) => {
  if (!item.link) {
    return null;
  }

  const onPress = () => {
    logEvent({
      event: { category: item.type, type: "click", name: "open_url" },
    });
  };

  return (
    <StLink href={item.link} target="_blank" onClick={onPress}>
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
