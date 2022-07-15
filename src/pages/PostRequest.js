import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'

import axios from 'axios'


const url = 'https://course-api.com/axios-tutorial-post';



const PostRequest = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [data,setData] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!name || !email){
      return alert('Please provide name')
     }
   try {
    // post request 
     const response = await axios.post(url, {name,email})
    setData(response.data.user)
    setEmail('')
    setName('')
   } catch (error) {
    console.log(error);
   }
  };


  return (
    <>
    <WrapperOne>
    <section>
    <h2 className='text-center'>post request Using "Axios"
    </h2>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='email'
          className='form-input'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-block'>
        register
      </button>
    </form>
    <h2>{data.name}</h2>
        <h2>{data.email}</h2>
  </section>
  </WrapperOne>
  </>
  )
}

export default PostRequest


const WrapperOne = styled.div`
width: 90vw;
margin: 0px auto;
    padding-top: 100px;


.btn{
  background-color: blue;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  border: none;
}

`