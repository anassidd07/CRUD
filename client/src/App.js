import "./App.css";

//Components
import AddUser from "./component/Registration/AddUser";
import NavBar from "./component/Header/NavBar";
import Login from "./component/Login/Login";
import Welcome from "./component/Welcome/welcome";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from "react";
import AllUser from "./component/Home/AllUser";
import EditUser from "./component/Edit/EditUser";

const App = () => {
  const [user, setLoginUser] = useState({});
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route  path='/' element={<Welcome />} />
        <Route
          path="/home"
          element={
            <AllUser />
            //user && user._id ? <AllUser setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
          }
        />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
};

export default App;
