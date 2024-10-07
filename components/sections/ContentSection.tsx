import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { LinkItem, LinkItemData, LinkItemType } from "../LinkItem";
import { LinkItemLoader } from "../LinkItem.loading";
import { StSection } from "../styles/StSection";
import { StItems } from "../Types/ComponentTypes";
import { H2 } from "../Types/PageTypes";

interface ContentSectionProps {
  title: string;
  url: string;
  type: LinkItemType;
}

export function ContentSection<T extends LinkItemData>({
  title,
  url,
  type,
}: Readonly<ContentSectionProps>) {
  const { data, error, isLoading } = useSWR<T[]>(url, fetcher);

  if (error) {
    return null;
  }

  return (
    <StSection>
      <H2>{title}</H2>
      <StItems>
        {isLoading &&
          new Array(3)
            .fill(0)
            .map((_, index) => <LinkItemLoader key={index} />)}
        {!isLoading &&
          (data || []).map((project) => {
            return (
              <LinkItem key={project.title} item={{ ...project, type: type }} />
            );
          })}
      </StItems>
    </StSection>
  );
}
