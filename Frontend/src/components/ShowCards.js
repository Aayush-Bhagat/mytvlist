import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import axios from 'axios'
import './styles/ShowCards.css'

export default function ShowCards(props) {
    let history = useHistory()
    const [add, setAdd] = useState(false)
    const [watchStatus, setWatchStatus] = useState("Watching")
    const [added, setAdded] = useState(props.added)
    const handleNotLogged = () => {
      history.push('/login')
    }
    const addOnCLick = (e) =>{
      setAdd(true)
    }
    const cancelOnClick = (e)=>{
      setAdd(false)
    }

    const handleDropdownChange = (e)=>{
      setWatchStatus(e.target.value)
    }

    const addShowHandler = (e)=>{
      axios.put(`/api/user/addShow/${props.show._id}`, {
        watch: watchStatus
      }, 
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then((res) => {
        setAdd(false)
        setAdded(true)
        props.setUserShows((curShows)=>{
          return [...curShows, props.show._id]
        })
      })
    }

    return (
        <div>
              <div className="card">
                <Link className="card_link" to={`/show/${props.show._id}`}>
                    <div className="card__body">
                      <h2 className="card__title">{props.show.title} </h2>
                      <p className="card__description">{props.show.category}</p>
                    </div>
                  </Link>
                  {add?
                  <>
                    <select name="selectList" id="selectList" onChange={handleDropdownChange}>
                      <option value="Watching">Watching</option>
                      <option value="Watched">Watched</option>
                      <option value="Plan to Watch">Plan to Watch</option>
                    </select>
                    <div>
                    <button className="card__btn" onClick={cancelOnClick}>Cancel</button>
                    <button className="card__btn" onClick={addShowHandler}>ADD SHOW</button>
                    </div>
                  </>
                  
                  : added?
                    <p> Show Added</p> 
                    :
                    <button className="card__btn" onClick={localStorage.getItem('isAuth')? addOnCLick : handleNotLogged}>ADD</button>
                  }
               </div>
        </div>
    )
}
