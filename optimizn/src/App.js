import './App.css';
import Home from './components/Home.js'
import Navigation from './components/Nav.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Projects from './components/Projects.js'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  
  return (
    <Router>
      <Navigation />
      <Switch> 
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
