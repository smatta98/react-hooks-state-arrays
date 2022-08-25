import React, {useState} from "react";
import SpicyFoodList from "./SpicyFoodList";

function App() {
  const [isDark, setIsDark] = useState(true);

  function darkModeToggle(){
    setIsDark((isDark => !isDark))
  }
console.log(isDark)
  return (
    <div className = {isDark ? "App dark" : "App light"} >
      <button onClick ={darkModeToggle}>Background Toggle</button>
      <h3>SpicyFoodList</h3>
      <SpicyFoodList />
    </div>
  );
}

export default App;
