import styled from "styled-components";
import { ProjectData } from "../pages/api/projects";
import { Title, Body, SubTitle, StArticle } from "./Types/ComponentTypes";

interface ProjectProps {
  project: ProjectData;
}

export const Project = ({ project }: ProjectProps) => {
  return (
    <StArticle>
      <Title>{project.title}</Title>
      <SubTitle>{project.role}</SubTitle>
      <Body>{project.body}</Body>
    </StArticle>
  );
};
