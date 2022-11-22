import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import useFirebase from '../../../Hooks/UseFirebase';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {signIn, users,signInUsingGoogle}=useFirebase()
   
    const location = useLocation()
    const history = useHistory()

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
       // const {users}=useFirebase()
        newData[field] = value
        setLoginData(newData)

    }

    const handleLogInSubmit = (e) => {
        e.preventDefault()
        signIn(loginData.email, loginData.password, location, history)
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {email:users.email })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            
        })

    }

    const handleGoggleSignIn=()=>{
        signInUsingGoogle(location,history)
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {email:users.email })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className='login'>
                
                <div className='text-center text-info'><h1>Welcome To BUSINESS-TALLY</h1></div>
            
            <div className='col-md-3 m-auto border border-primary bg-secondary  p-5'>
                    <p className='text-center mt-5 text-light'>Log-in</p>
                    <form onSubmit={handleLogInSubmit}>
                        <label>Email</label>
                        <input className="form-control" placeholder='Enter Your Email'  name="email" type="email" onChange={handleChange}   />
                        <label>Password</label>
                        < input className='form-control' name="password" onChange={handleChange}  type="password" placeholder='******'  />
                            <br/>
                        <button className='btn btn-success form-control' type="submit" variant='contained'>LOGIN</button>
                        <br/>
                        <Link to="/register">  <h6 className='text-light mt-2'>NEW USER? Create New Account</h6> </Link>
                      
                       
                        <button className='btn btn-primary form-control' onClick={handleGoggleSignIn}>Login With Google</button>

                    </form>


                </div>

           
        </div>
    );
};

export default Login;