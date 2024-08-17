// rrd imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// hooks import
import useAuthContext from "./hooks/useAuthContext";

// components import
import NavBar from './components/Navbar'

// pages import
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// libraries import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
