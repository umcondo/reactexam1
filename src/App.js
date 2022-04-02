import React from "react";
// import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const number = 5;
  console.log("rendering");
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    // initialValue: 5,
  };
  return (
    <Container>
      <div className="App">
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}
// ES module system
export default App;
