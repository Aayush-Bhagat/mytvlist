import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Home'
  import GetShows from './getShows'
  import ShowPage from './ShowPage'
  import Login from './Login'
  import Register from './Register'
  import './styles/Navbar.css'

  

export default function Navbar() {
    let [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.clear()
        setIsAuth(false)
    }
    

    return (
        <Router>
          <nav className="myNav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shows">Shows</Link>
              </li>
              {
                !isAuth?
            <>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
              </>
              : 
              <>
                <li>
                    <Link to='#'>My Shows</Link>
                </li>
                <li> {localStorage.getItem('username')} </li>
                <button onClick={logoutHandler}  >Logout</button>
              </>
            }
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
              <Login setIsAuth={setIsAuth} />
            </Route>
            <Route path="/register">
              <Register setIsAuth={setIsAuth} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
  
      </Router>
    )
}
