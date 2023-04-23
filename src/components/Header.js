// importing React in Header.js //
import React from "react";  

// Defining a "Header" function component with a prop "blogName"//
function Header({ blogName }) {
    return (
        <header>
            <h1>{blogName}</h1>
        </header>
    );
}
// exporting the Header component as default export of the "Header.js"
export default Header;