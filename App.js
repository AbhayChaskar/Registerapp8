import './App.css';
import {BrowserRouter as Router,Route,Switch,Link, NavLink} from 'react-router-dom';
import Registration from './Components/Registration';
import Home from './Components/Home';
import Navv from './Components/Navv';
import Loginn from './Components/Loginn';
function App() {
  return (
    <>
    <Router>
      <Navv/>
      <Switch>
        <Route path="/" exact component={Loginn}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/registration" exact component={Registration}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
