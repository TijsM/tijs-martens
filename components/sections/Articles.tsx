import { useEffect, useState } from "react";
import styled from "styled-components";
import { ArticleData } from "../../pages/api/articles";
import { LinkItem } from "../LinkItem";
import { StSection } from "../styles/StSection";
import { StItems } from "../Types/ComponentTypes";
import { H2 } from "../Types/PageTypes";

export const Articles = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/articles");
      const data = await res.json();

      setArticles(data);
    };

    getData();
  }, []);

  return (
    <StSection>
      <H2>Articles</H2>
      <StItems>
        {articles.map((article) => {
          return <LinkItem key={article.title} item={article} />;
        })}
      </StItems>
    </StSection>
  );
};
