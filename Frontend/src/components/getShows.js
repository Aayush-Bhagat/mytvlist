import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Shows from './Shows'
const baseURL = "/api/shows";

export default function GetShows() {
    const [shows, setShows] = useState(null)
    const [userShows, setUserShows] = useState(null)

    useEffect(() => {
        axios.get(baseURL)
        .then((res) => {
            setShows(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(() => {
        if(localStorage.getItem('isAuth')){
            axios.get('api/user/getShows',  {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            .then((res) =>{
                setUserShows(res.data)
            })
        }
        else{
            setUserShows([])
        }
    },[])

    console.log(userShows)

    return (
        <div>
        {shows === null || userShows === null?
        <div>
            Loading...
        </div>
        : 
        <Shows shows={shows} userShows={userShows} setUserShows={setUserShows} />
        }
        </div>
    )
}
