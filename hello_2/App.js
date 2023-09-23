const head=React.createElement(
    "h1", 
    {id : "head" },
    "hello react bhai!"
 );

console.log(head);//return object 
            
const rout=ReactDOM.createRoot(document.getElementById("root"));

rout.render(head);//render our object