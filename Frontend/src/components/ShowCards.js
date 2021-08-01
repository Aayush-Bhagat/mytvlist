import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/ShowCards.css'

export default function ShowCards(props) {
    // TODO: Use HandleOnClick to add shows to user watchlists
    // const handleOnClick = (id) =>{}
    return (
        <div>
            <div className="card">
                <div className="card__body">
                  <h2 className="card__title"><Link to={`/show/${props.show._id}`}>{props.show.title}</Link> </h2>
                  <p className="card__description">{props.show.category}</p>
                </div>
                <button className="card__btn">ADD</button>
              </div>
        </div>
    )
}
