//importing React in the component module
import React from "react";
// importing  Article component in "ArticleList.js"
import Article from "./Article";

// defining the ArticleList component function that accepts the prop posts.
// return contains array of Article components.
// each Article component contain a prop of corresponding article in the "articles" array.
function ArticleList({posts }) {
    return (
      <main>
        {posts.map((post) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date }
            preview={post.preview}
          />
        ))}
      </main>
    );
  }
  
  export default ArticleList;