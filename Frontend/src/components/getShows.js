import React, {useState, useEffect} from 'react'
import axios from 'axios'

const baseURL = "http://localhost:5000/api/shows";

export default function Shows() {
    const [shows, setShows] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(baseURL)
        .then((res) => {
            setShows(res.data)
            setLoading(false)
        })
    }, [])

    return (
        <div>
        {loading?
        <div>
            Loading...
        </div>
        : 
        <div>
            {shows.map((show) =>{
                return (
                    <p key= {show._id} > {show.title} </p>
                )
            })}
        </div>
        }
        </div>
    )
}
