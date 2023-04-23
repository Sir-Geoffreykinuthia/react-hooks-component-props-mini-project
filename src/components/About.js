// importing React in About.js
import React from 'react';

// defining about component function that accepts prop "blogImage" & "blogAbout".
// setting the default url if prop "blogImage"is not provided.
function About({ blogImage = "https://via.placeholder.com/215", blogAbout }) {
  return (
    <aside>
      <img src={blogImage} alt="blog logo" />
      <p>{blogAbout}</p>
    </aside>
  );
}
// exporting the component as default of the About module
export default About;

