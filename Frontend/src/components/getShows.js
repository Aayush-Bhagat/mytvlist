import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Shows from './Shows'
const baseURL = "http://localhost:5000/api/shows";

export default function GetShows() {
    const [shows, setShows] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(baseURL)
        .then((res) => {
            setShows(res.data)
        })
        .finally(() => {
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
        <Shows shows={shows} />
        }
        </div>
    )
}
