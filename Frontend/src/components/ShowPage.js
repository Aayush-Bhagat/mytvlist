import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"

export default function ShowPage() {
    const [show, setShow] = useState(null)
    const [loading, setLoading] = useState(true)
    const id = useParams().id
    console.log(id)
    const baseURL = `http://localhost:5000/api/shows/${id}`

    useEffect(() => {
        axios.get(baseURL)
        .then((res) => {
            setShow(res.data)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])
    console.log(show)
    return (
        <div>
            {loading? 
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


