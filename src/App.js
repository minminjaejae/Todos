import React from "react";
import "./App.css";
import UseRef1 from "./component/UseRef1";
import UseRef2 from "./component/UseRef2";
import UseRef3 from "./component/UseRef3";
import UseRef4 from "./component/UseRef4";
import Todos from "./ex/Todos";

const App = () => {
  return (
    <>
      <h1>리액트</h1>
      {/*<UseRef1 />
      <UseRef2 />
      <UseRef3 />
  <UseRef4 />*/}
      <Todos />
    </>
  );
};

export default App;
