import React, {useState, useEffect} from 'react'
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
            <input type="text" onChange={handleSearchChange} name="search show"/>
            <div className="wrapper">
            {showsToDisplay.map((tvShow) => {
               return (
                <div className="card">
                <div className="card__body">
                  <h2 className="card__title">{tvShow.title}</h2>
                  <p className="card__description">{tvShow.category}</p>
                </div>
                <button className="card__btn">ADD</button>
              </div>
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

