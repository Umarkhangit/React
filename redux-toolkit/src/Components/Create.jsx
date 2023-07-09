import React, { useState } from 'react'
import { addUser } from '../Redux/UserReducer'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import {useNavigate} from "react-router-dom"

const Create = () => {
    const [inputs,setInputs] = useState({
        name:"",
        email:""
    })

    const handleChange = (e) =>{
        setInputs({...inputs,[e.target.name]:e.target.value})
    }
    console.log("inputs",inputs)
    const users=useSelector(state =>state.users)

    const dispatch = useDispatch()
    const navigate=useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addUser({...inputs,id:users[users.length-1].id+1}))
        navigate("/")
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' onChange={handleChange}/>
                </div><br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create