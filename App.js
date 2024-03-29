// const heading = React.createElement("h1",
//  {id : "heading ", xyz:"abc"},
//  "Hello world from React with Dynamic id and attribute ");

//console.log(heading)

//root.render(heading);

/* <div id="parent">
  <div id="child">
    <h1> I'm h1 tag</h1>
    <h1> I'm h1 tag</h1>
  </div>
   <div id="child1">
    <h1> I'm h1 tag</h1>
    <h1> I'm h1 tag</h1>
  </div>
</div>; */

const parent = React.createElement("div",{ id: "parent" },[
  React.createElement("div", { id: "child1" },   [ 
   React.createElement("h1", {}, "nested element with h1 tag"),
   React.createElement("h2", {}, "nested element with h2 tag")
]),

React.createElement("div", { id: "child2" },   [ 
  React.createElement("h1", {}, "nested element with h1 tag"),
  React.createElement("h2", {}, "nested element with h2 tag")
]),
  
]);

//console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
