import React, {useState, useEffect} from 'react'
import './styles/ShowCards.css'

export default function ShowCards(props) {
    // TODO: Use HandleOnClick to add shows to user watchlists
    // const handleOnClick = (id) =>{}
    return (
        <div>
            <div className="card">
                <div className="card__body">
                  <h2 className="card__title">{props.show.title}</h2>
                  <p className="card__description">{props.show.category}</p>
                </div>
                <button className="card__btn">ADD</button>
              </div>
        </div>
    )
}
