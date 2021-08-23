import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavbarComp from './components/NavbarComp'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import ViewMore from './components/ViewMore'

function App() {
  return (
    <Router>
    <div>
     <NavbarComp style={{position:'sticky',top:0}} 
        item1="home"
        item2="contact"
        item3="about us"/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" component={About}/>
{/*         <Route path="/ViewMore" component={ViewMore}></Route> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
