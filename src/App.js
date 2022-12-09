import "./App.css";
import Home from "./components/TaskManager";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
