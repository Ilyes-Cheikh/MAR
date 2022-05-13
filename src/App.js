import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from './Pages/Users';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <div className="App">
    <Router>
    <Route exact path="/users">
          <Users/>
     </Route>
     <Route exact path="/">
          <h1>Hello</h1>
     </Route>
     <Route exact path="/signup">
          <SignUp/>
     </Route>
   </Router>
    </div>
  );
}

export default App;
