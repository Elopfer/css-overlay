import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="item">
        This is the item
        <div className="overlay" id="overlayId">
          <div className="overlay-text">This is the overlay</div>
        </div>
      </div>
    </div>
  );
}
export default App;
