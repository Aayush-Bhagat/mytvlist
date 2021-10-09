import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ShowCards from './ShowCards'
import './styles/Shows.css'

export default function Shows(props) {
    const [showsToDisplay, setShowsToDisplay] = useState(props.shows.slice(0,50))
    const [isFiltered, setIsFiltered] = useState(false)
      

    const loadMoreHandler = () => {
        setShowsToDisplay((curState)=>{
            return [...curState, ...props.shows.slice(curState.length, curState.length+50)]
        })
    }

    const handleSearchChange = (event) => {
        event.target.value === "" ? setIsFiltered(false) : setIsFiltered(true)
        setShowsToDisplay(props.shows.filter((e)=> e.title.toLowerCase().startsWith(event.target.value.toLowerCase())).slice(0,50))
    }

    return (
        <div>
            <input  className="searhbar" type="text" onChange={handleSearchChange} name="search show" placeholder="Search Shows"/>
            <div className="wrapper">
            {showsToDisplay.map((tvShow) => {
               return (
                <ShowCards key={tvShow._id} show = {tvShow} added = {props.userShows.includes(tvShow._id)? true : false} setUserShows={props.setUserShows} />
               ) 
            })}
            {
            !isFiltered?
            <button onClick={loadMoreHandler}> Load more...</button>
            :
            <div></div>
            }
            </div>
        </div>
    )
}

