import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import axios from "axios"

function AddPage() {

  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [allData, setAllData] = useState([])
  const [input, setInput] = useState('')


  async function fetchData(e) {
    e.preventDefault()
    if (!image || !title || !description || !category) {
      alert('input must not be empty')
      return
    }

    await axios.post('http://localhost:3600/products/', {
      image,
      title,
      category,
      description
    })
    alert('product Created')
    setImage('')
    setCategory('')
    setDescription('')
    setTitle('')
  }


  async function fetchAllData() {
    const res = await axios.get('http://localhost:3600/products/')
    setAllData(res.data)
  }
  useEffect(() => {
    fetchAllData()
  })


  function handleChange(value, setState) {
    setState(value)
    setState(value)
  }



  async function deleteData(id) {
    await axios.delete(`http://localhost:3600/products/${id}`)
    fetchAllData()
  }
  return (
    <>
      <Helmet>
        <title>Home | Add</title>
      </Helmet>
      <div className='add'>
        <form action="" onSubmit={(e) => fetchData(e)}>
          <label htmlFor="">Image Link</label>
          <input value={image} onChange={(e) => handleChange(e.target.value, setImage)} type="text " placeholder='Enter Image Link...' />
          <label htmlFor="">Title</label>
          <input value={title} onChange={(e) => handleChange(e.target.value, setTitle)} type="text " placeholder='Enter Title...' />
          <label htmlFor="">Category</label>
          <input value={category} onChange={(e) => handleChange(e.target.value, setCategory)} type="text " placeholder='Enter Category...' />
          <label htmlFor="">Description</label>
          <input value={description} onChange={(e) => handleChange(e.target.value, setDescription)} type="text " placeholder='Enter Description...' />
          <input type="submit" />
        </form>
        <h2 style={{ margin: "50px 0" }}>Products</h2>
        <input className='search' onChange={(e) => handleChange(e.target.value, setInput)} style={{ border: '1px solid gray', borderRadius: '8px', width: '30%', height: "40px" }} type="text" placeholder='Search By Name' />
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allData && allData
              .filter(x => x.title.trim().toLowerCase().includes(input.trim().toLowerCase()))
              .map(item => (
                <tr key={item._id}>
                  <td>
                    {item._id}
                  </td>
                  <td>
                    <img style={{ width: "50px", height: "50px", borderRadius: '100%' }} src={item.image} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td>
                    <i onClick={() => deleteData(item._id)} className='fa-solid fa-trash-can'></i>
                  </td>

                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AddPage