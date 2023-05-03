import Home from "./components/home";
import { Routes, Route } from "react-router-dom"
import Spost from "./components/spost";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/post/:id" element={ <Spost/> } />
      </Routes>

    </div>
  );
}

export default App;
