import './App.css';
import RouteTree from "./components/Api/RouteTree/RouteTree";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="d-flex align-items-center column">
          <BrowserRouter>
              <RouteTree/>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
