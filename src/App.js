import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Main from './component/Main'
import MainNavbar from './component/Navbar/MainNavbar';
function App() {
  return (
    <div>
      <MainNavbar />
      <Switch>
        <Route exact path="/"><Redirect to="/home" /></Route>
        <Route exact path="/:id" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
