import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddCategory = () => {
    const [category, setCategory] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/auth/add_category', {category})
        .then(result => {
            if(result.data.Status){
                navigate('/dashboard/category')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center h-75 align-items-center'>
        <div className='p-3 rounded w-45 border'>
            <h2>Add Category</h2>
            <form onSubmit= {handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="category"><strong>Category:</strong></label>
                    <input className='form-control rounded-0' type="text" name='category' placeholder='Enter Category'
                    onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <div className='btn1 text-center'>
                <button className='btn btn-success w-100  rounded-2 mb-2'>Add Category</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddCategory