import { useEffect, useState } from "react";
import { ProjectData } from "../../pages/api/projects";

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

  console.log(projects);


  return null;
};
