// importing React in "Article.js" component module
import React from   'react';

// defining a function component  "Article" that accepts the props passed tom it.
// returns the elements of the props passed to the component.
function Article({ title, date, preview }) {
    return (
      <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;