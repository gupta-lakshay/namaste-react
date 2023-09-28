// element creation is core react thing
const heading = React.createElement("h1",{id: "heading"}, "Hello World from React");
// adding element to root is DOM operation , first create a root which will render all the DOM 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);