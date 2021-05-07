import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <header>
      <div className="header-inner">
        <p>headerです</p>
      </div>
    </header>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
