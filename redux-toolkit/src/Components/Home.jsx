import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { deleteUser } from '../Redux/UserReducer';

const Home = () => {
    const users=useSelector(state =>state.users)
    console.log("users",users);

    const dispatch=useDispatch()
    const handleDelete = (id) =>{
        dispatch(deleteUser(id))
    }
  return (
    <div className='container'>
        <h2>CRUD with redux toolkit</h2>
        <Link to="/create" className='btn btn-success my-3'>create +</Link>

        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(val =>{
                    return(
                        <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>
                            <Link to={`/edit/${val.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <button onClick={()=>handleDelete(val.id)} className='btn btn-sm btn-danger mx-2'>Delete</button>
                        </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home