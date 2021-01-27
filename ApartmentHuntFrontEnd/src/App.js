import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';

function App() {
  return (
   <>
     <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>

          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
   </>
  );
}

export default App;
