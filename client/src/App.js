import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Grid } from "@material-ui/core";
import { ArticleSelect } from "./components/ArticleSelect";
import "./App.css";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  cache: new InMemoryCache(),
  defaultOptions,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Grid container>
        <Grid item xs={12}>
          <ArticleSelect client={client} />
        </Grid>
        <Grid item xs={12}>
          <ArticleSelect client={client} />
        </Grid>
        <Grid item xs={12}>
          <ArticleSelect client={client} />
        </Grid>
        <Grid item xs={12}>
          <ArticleSelect client={client} />
        </Grid>
      </Grid>
    </ApolloProvider>
  );
}

export default App;
