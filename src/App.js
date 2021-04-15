import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import TopBar from './component/TopBar';
import Landingpage from './component/landingpage';
import Notfound from './component/Notfound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
    <div>
    <ToastContainer/> 
    <TopBar/>
      <div style={{padding:"10px"}}>
      <Switch>
      <Route path="/Notfound" component={Notfound}/>
      <Route path="/" exact component={Landingpage}/>
      <Redirect to="Notfound"/>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
