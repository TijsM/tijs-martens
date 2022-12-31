import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectData } from "../../pages/api/projects";
import { Project } from "../Project";
import { H2 } from "../Types/PageTypes";

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();

      setProjects(data);
    };

    getData();
  }, []);

  return (
    <StSection>
      <H2>Projects</H2>
      {projects.map((project) => {
        return <Project key={project.title} project={project} />;
      })}
    </StSection>
  );
};

const StSection = styled.section`
  background-color: black;
`;
