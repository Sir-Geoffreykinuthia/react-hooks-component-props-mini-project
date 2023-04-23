import React from "react";
//importing Header component into "App.js" //
import Header from "./Header";
// importing About Component into App.js //
import About from "./About";
// importing the ArticleList component to App.js
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* //rendering Header component as a child of the "App" component// */}
      {/* passing "blogData.name" value as a prop named "blogName" to it.  */}
      <Header blogName={blogData.name} />
      {/* rendering "About" as a child of the App.js  */}
      {/* passing "blogData.image" value as a prop "blogImage" */}
      {/* passing "blogData.about" values as prop "blogAbout" to it*/}
      <About blogImage={blogData.image} blogAbout={blogData.about} />
      {/* passing "articles" array as a prop to the <ArticleList> component. */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
