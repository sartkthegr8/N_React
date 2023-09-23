// how create element work>>
// createElement(
//     "h1", //html element/tag
//     {id : "head" }, //object reference
//     "hello react bhai!" //what inside html element
//  );

// how to create nested div(html) >>
// <div id="parent">
//     <div id="child">
//         //hello
//     </div>
// </div>
//#sol>
// const parent=React.createElement(
//     "div", 
//     {id : "parent"},
//     React.createElement(
//         "div",
//         {id : "child" },
//         React.createElement("h1",{},"Hello react bhai")
//     )
// );




// how to create siblings >>
// <div id="parent">
//   <h1>hello h1</h1>
//   <h2>hello h2</h2> 
// </div>
//#sol>>
// >>>> send third argument in React.createElement -> as Array of siblings 
// eg>  
    // React.createElement(
    // "div",
    // {id : "child" },
    // [ React.createElement("h1",{},"Hello react bhai") , React.createElement("h2",{},"Hello react bhai") ]
    // )

const parent=React.createElement(
    "div", 
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child" },
        [ React.createElement("h1",{},"Hello react bhai") , React.createElement("h2",{},"Hello react bhai") ]
    )
);

console.log(parent);//return object 
            
const rout=ReactDOM.createRoot(document.getElementById("root"));

rout.render(parent);//render our object