import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import axios from 'axios'


export default function Register(props) {
    const [registerInfo, setregisterInfo] = useState({username: "",email: "", password: "", password2: "" })
    
    let history = useHistory()
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("/api/auth/register", {
            username: registerInfo.username,
            password: registerInfo.password,
            email: registerInfo.email
        })
        .then((res)=>{
            if (res.status === 200){
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('username', registerInfo.username)
                localStorage.setItem('isAuth', true)
                props.setIsAuth(true)
                history.push("/")
            }
            else{

            }
        })
    }

    return (
        <div>
            <form action="POST" onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" onChange={(e)=> setregisterInfo((curState)=>{return{...curState, username:e.target.value}})} value={registerInfo.username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Email:</label>
                        <input type="email" name="username" id="username" onChange={(e)=> setregisterInfo((curState)=>{return{...curState, email:e.target.value}})} value={registerInfo.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={(e)=> setregisterInfo((curState)=>{return{...curState, password:e.target.value}})} value={registerInfo.password}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password:</label>
                        <input type="password" name="confirmPassword" id="password" onChange={(e)=> setregisterInfo((curState)=>{return{...curState, password2:e.target.value}})} value={registerInfo.password2}/>
                        {registerInfo.password !== registerInfo.password2 && registerInfo.password !== "" ?
                            <p>Passwords Don't Match</p> 
                            : null
                        }
                    </div>
                    <input type="submit" value="register" disabled={registerInfo.password !== registerInfo.password2 || registerInfo.password === ""} />
                </div>
            </form>
        </div>
    )
}

