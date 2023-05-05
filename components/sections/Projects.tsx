import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectData } from "../../pages/api/projects";
import { LinkItem } from "../LinkItem";
import { StSection } from "../styles/StSection";
import { StItems } from "../Types/ComponentTypes";
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
      <StItems>
        {projects.map((project) => {
          return <LinkItem key={project.title} item={{...project, type:"project"}}  />;
        })}
      </StItems>
    </StSection>
  );
};
