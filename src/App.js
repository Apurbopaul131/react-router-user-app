
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import SingleUser from './Components/SingleUser/SingleUser';

function App() {
  return (
    
     <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        
        <Route exact path="/">
            <Home></Home>
        </Route>
       <Route path="/user/:userId">
          <SingleUser></SingleUser>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
     </Router>
     
    
  );
}

export default App;
