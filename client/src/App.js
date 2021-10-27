import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { RegisterContextProvider } from "./context/registerContext/RegisterContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndForm from "./pages/dndFrom/DndForm";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/form">
            <DndProvider backend={HTML5Backend}>
              <DndForm />
            </DndProvider>
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            <RegisterContextProvider>
              <Register />
            </RegisterContextProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
