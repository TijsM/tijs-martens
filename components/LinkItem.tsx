import { ProjectData } from "../pages/api/projects";
import { Title, Body, SubTitle, StArticle } from "./Types/ComponentTypes";

interface LinkItemProps {
  item: { title: string; body: string; link: string; role?: string };
}

export const LinkItem = ({ item }: LinkItemProps) => {
  return (
    <StArticle>
      <Title>{item.title}</Title>
      {item.role ? <SubTitle>{item.role}</SubTitle> : null}
      <Body>{item.body}</Body>
    </StArticle>
  );
};
