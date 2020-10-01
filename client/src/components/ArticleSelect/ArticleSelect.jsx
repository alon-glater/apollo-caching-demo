import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";

const GET_ARTICLES = gql`
  query {
    articles {
      _id
      title
      body
    }
  }
`;

export const ArticleSelect = ({ client }) => {
  // const { data } = useQuery(GET_ARTICLES, { fetchPolicy: "no-cache" });
  const [articles, setArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await client.query({
        query: GET_ARTICLES,
        fetchPolicy: "no-cache",
        context: {
          queryDeduplication: false
        }
      });

      // const response = await fetch("http://localhost:9000/graphql", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     query: `
      //     query {
      //       articles {
      //         _id
      //         title
      //         body
      //       }
      //     }
      //     `,
      //   }),
      // });
      // const { data } = await response.json();

      setArticles(data.articles);
    })();
  }, []);

  const handleChange = (event) => {
    setSelectedArticleId(event.target.value);
  };

  return (
    <Select value={selectedArticleId} onChange={handleChange}>
      {articles.map(({ _id, title }) => (
        <MenuItem key={_id} value={_id}>
          {title}
        </MenuItem>
      ))}
    </Select>
  );
};
