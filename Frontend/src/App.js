import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import GetShows from './components/getShows'
import ShowPage from './components/ShowPage'
import Login from './components/Login'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shows">Shows</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/shows">
            <GetShows />
          </Route>
          <Route path="/show/:id">
            <ShowPage />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        </div>
    </Router>
  );
}
