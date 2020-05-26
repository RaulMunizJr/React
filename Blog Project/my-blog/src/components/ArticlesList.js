import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <>
    {/* Same as React.Fragment */}
    <h1>Articles</h1>
    {/* 'map' always requires 'key' */}
    {articles.map((article, key) => (
      <Link
        className="article-list-item"
        key={key}
        to={`/article/${article.name}`}
      >
        {/* Make sure to use backtick quotes in link param */}
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}...</p>
        {/* substring is used to get the first 150 chars of the article content in array 0 */}
      </Link>
    ))}
  </>
);

export default ArticlesList;
