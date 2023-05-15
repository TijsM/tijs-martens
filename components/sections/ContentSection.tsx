import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { LinkItem, LinkItemData } from "../LinkItem";
import { StSection } from "../styles/StSection";
import { StItems } from "../Types/ComponentTypes";
import { H2 } from "../Types/PageTypes";

interface ContentSectionProps {
  title: string;
  url: string;
}

export function ContentSection<T extends LinkItemData>({
  title,
  url,
}: ContentSectionProps) {
  const { data, error } = useSWR<T[]>(url, fetcher);

  if (error) {
    return null;
  }

  return (
    <StSection>
      <H2>{title}</H2>
      <StItems>
        {(data || []).map((project) => {
          return (
            <LinkItem
              key={project.title}
              item={{ ...project, type: "side-project" }}
            />
          );
        })}
      </StItems>
    </StSection>
  );
}
