import React from 'react'
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import {Provider} from "react-redux";
import NavBar from './components/NavBar';
import "./main.scss";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
 import store from "./store/";
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path='/Dashboard' element={<Dashboard/>}/>
          </Routes>
      </Router>
       </Provider>
  )
}

export default App
