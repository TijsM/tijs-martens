import useSWR from "swr";
import { ArticleData } from "../../pages/api/articles";
import { fetcher } from "../../utils/fetcher";
import { LinkItem } from "../LinkItem";
import { StSection } from "../styles/StSection";
import { StItems } from "../Types/ComponentTypes";
import { H2 } from "../Types/PageTypes";

export const Articles = () => {
  const { data, error } = useSWR<ArticleData[]>("/api/projects", fetcher);

  if (error) {
    return null;
  }

  return (
    <StSection>
      <H2>Articles</H2>
      <StItems>
        {(data || []).map((article) => {
          return (
            <LinkItem
              key={article.title}
              item={{ ...article, type: "article" }}
            />
          );
        })}
      </StItems>
    </StSection>
  );
};
