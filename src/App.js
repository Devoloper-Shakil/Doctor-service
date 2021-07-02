import logo from './logo.svg';
import "./App.css";
import Home from "./Componants/Home/Home";
import AllService from "../src/Componants/Services/AllService";
import TopBar from "./Componants/Home/TopBar";
import Header from "./Componants/Home/Header";
import About from "./Componants/Home/About";
import Footer from "./Componants/Home/Footer";
import Department from "../src/Componants/Department/Department";
import Doctors from "../src/Componants/Doctors/Doctors";
import Contact from "../src/Componants/Contact/Contact";
import Appointment from "../src/Componants/Appointment/Appointment";
import NoMatch from "../src/Componants/NoMacth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {



  return (
    <div >



      <Router>
        <TopBar></TopBar>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home ></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <AllService></AllService>
          </Route>
          <Route path="/departments">
            <Department></Department>
          </Route>

          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
