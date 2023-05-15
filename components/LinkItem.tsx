import { useMemo } from "react";
import styled from "styled-components";
import { logEvent } from "../utils/analytics";
import { Title, Body, SubTitle, StArticle } from "./Types/ComponentTypes";

interface LinkItemProps {
  item: {
    title: string;
    body: string;
    link: string;
    role?: string;
    type: "article" | "project" | "side-project";
  };
}

export const LinkItem = ({ item }: LinkItemProps) => {
  const article = useMemo(() => {
    return (
      <StArticle>
        <Title preventUnderline={!item.link}>{item.title}</Title>
        {item.role ? <SubTitle>{item.role}</SubTitle> : null}
        <Body>{item.body}</Body>
      </StArticle>
    );
  }, [item.body, item.link, item.role, item.title]);

  const onPress = () => {
    logEvent({
      action: "click",
      name: "open_" + item.type,
      properties: {
        urlName: item.title,
      },
    });
  };

  if (!item.link) {
    return article;
  }

  return (
    <StLink href={item.link} target="_blank" onClick={onPress}>
      {article}
    </StLink>
  );
};

const StLink = styled.a`
  text-decoration: none;
`;
