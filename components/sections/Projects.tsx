import useSWR from "swr";
import { ProjectData } from "../../pages/api/projects";
import { fetcher } from "../../utils/fetcher";
import { LinkItem } from "../LinkItem";
import { StSection } from "../styles/StSection";
import { StItems } from "../Types/ComponentTypes";
import { H2 } from "../Types/PageTypes";

export const Projects = () => {
  const { data, error } = useSWR<ProjectData[]>("/api/projects", fetcher);

  if (error) {
    return null;
  }

  return (
    <StSection>
      <H2>Projects</H2>
      <StItems>
        {(data || []).map((project) => {
          return (
            <LinkItem
              key={project.title}
              item={{ ...project, type: "project" }}
            />
          );
        })}
      </StItems>
    </StSection>
  );
};
