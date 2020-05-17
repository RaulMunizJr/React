import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";

{
  /* match is the url paramter */
}
const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);
  {
    /* Finds the article whose article's name is equal to the url string */
  }
  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  {
    /* filters for that only other articles display (not current one) */
  }

  return (
    <>
      <h1>{article.title}</h1>
      {/* Mapping article's content peroperty to JSX elements */}
      {article.content.map((paragraph, key) => (
        <p key={key}> {paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
