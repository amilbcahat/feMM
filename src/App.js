import { ArrowIcon, ChatIcon } from "./svg";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import { io } from "socket.io-client";
import SocketContext from "./context/SocketContext";
import { useEffect, useState } from "react";
import { logout } from "./features/userSlice";
const socket = io(process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0]);
function App() {
  //const [connected, setConnected] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const token = user.token;

  return (
    <div className="dark">
      <button onClick={() => dispatch(logout())} className="hidden">
        logout
      </button>
      <SocketContext.Provider value={socket}>
        <Router>
          <Routes>
            <Route exact path="/" element={token ? <Home /> : <Login />} />
            <Route
              exact
              path="/login"
              element={!token ? <Login /> : <Home />}
            />
            <Route
              exact
              path="/register"
              element={!token ? <Register /> : <Home />}
            />
          </Routes>
        </Router>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
