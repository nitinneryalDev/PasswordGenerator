import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
// import { Children } from 'react'



//  => ➡️ // the syntax is not accurate here thats why it is not working as expected
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https:://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };




//➡️ =>// this will only convert to the object only
// const anotherElement = (
//   <a href="https:://google.com" target="_blank">
//     {" "}
//     Visit Google
//   </a>
// );
// const anotherUser = '➡️ evaluted Expression we cannot write expressions here '


//  => ➡️ // the syntax is not accurate here thats why it is not working as expected
const reactElement = React.createElement( 
    // first is the teg expected  here
  // "a",
  // {href: "https://google.com", target: "_blank" },
  //   "Click me to visit google",
    // variable injection is after the tree and we cannot write the condition's here like if() else() 
    // anotherUser
    App
)




ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
