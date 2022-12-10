import "./App.css";
import Home from "./components/TaskManager";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";

function App() {
  return (
    <UserAuthContextProvider>
      <Nav />
      <Router>
        <Routes>
          <Route
            path="/Home"
            element={
              <ProtectedRoute>
                <Home />{" "}
              </ProtectedRoute>
            }
          />
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <ToastContainer />
    </UserAuthContextProvider>
  );
}

export default App;
