import React, { useState, useEffect } from "react";
import { Jumbotron, Button } from "reactstrap";
import axios from "axios";

import "./welcome.css";
const Welcome = (props) => {
  const [Items, setItems] = useState([{}]);

  useEffect(() => {
    async function getResults() {
      const results = await axios("https://jsonplaceholder.typicode.com/posts");
      setItems(results.data);
    }
    getResults();
  }, []);
  return (
    // <div className="cont">
    //   <Jumbotron>
    //     <h1 className="display-3">Welcome to our E-Commerce app</h1>
    //     <p className="lead"></p>
    //     <hr className="my-2" />
    //     <p>Shopping become much easier</p>
    //     <p className="lead">
    //       <Button color="primary">
    //         <a
    //           style={{ color: "White", textDecoration: "none" }}
    //           target="_blank"
    //           href="https://searchcio.techtarget.com/definition/e-commerce#:~:text=E%2Dcommerce%20(electronic%20commerce),or%20consumer%2Dto%2Dbusiness."
    //         >
    //           Learn More
    //         </a>
    //       </Button>
    //     </p>
    //   </Jumbotron>
    // </div>
    <div className="jumbotron">  
    <h1 className="display-4"><b>Welcome to our E-Commerce app</b></h1>
  <hr className="my-4"></hr>
  <p>Shopping became much easier</p>
 
  </div>
  );
};

export default Welcome;
