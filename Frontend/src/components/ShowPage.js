import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"

export default function ShowPage() {
    const [show, setShow] = useState(null)
    const [userShows, setUserShows] = useState(null)
    const id = useParams().id
    const baseURL = `/api/shows/${id}`

    useEffect(() => {
        axios.get(baseURL)
        .then((res) => {
            setShow(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {show === null? 
               <p> Loading...</p>
                :
                <div>
                <h2>{show.title}</h2>
                <p>{show.category}</p>
                </div>
            }
            
        </div>
    )
}


