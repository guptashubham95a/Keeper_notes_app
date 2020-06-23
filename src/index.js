import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implemented the add note functionality.
//- Created a constant that keeps track of the title and content.
//- Passed the new note back to the App.
//- Added new note to an array.
//- Taken array and render seperate Note components for each item.

//2. Implemented the delete note functionality.
//-  Used callback from the Note component to trigger a delete function.
//- Used the filter function to filter out the item that needs deletion.
//- Passed a id over to the Note component, pass it back to the App when deleting.
