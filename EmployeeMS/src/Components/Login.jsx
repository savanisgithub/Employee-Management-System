import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [values, seteValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values)
        .then(result => {
            if(result.data.loginStatus){
                navigate('/dashboard')
            }
            else{
                setError (result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }



  return (
    <div className='d-flex justify-content-center vh-100 align-items-center  loginPage'>
        <div className='p-3 rounded w-30 border loginForm'>
            <div className='text-danger'>
                {error && error}
            </div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email:</strong></label>
                    <input className='form-control rounded-0' type="email" name='email' autoComplete='off' placeholder='Enter Email'
                    onChange={(e) => seteValues({...values, email : e.target.value})}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password:</strong></label>
                    <input className='form-control rounded-0' type="password" name='password' placeholder='Enter Password'
                    onChange={(e) => seteValues({...values, password : e.target.value})}/>
                </div>
                <div className='btn1 text-center'>
                <button className='btn btn-success w-50  rounded-2 mb-2'>Log in</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login