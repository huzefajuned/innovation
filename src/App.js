import "./App.css";
import Home from "./components/TaskManager/TaskManager";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Nav from "./components/Nav/Nav";
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <Nav />

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
        <AddTaskButton />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </UserAuthContextProvider>
  );
}

export default App;
