import { useEffect } from 'react';
import styled from 'styled-components'


import axios from 'axios'
import authFetch from '../axios/custom';


// const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';


const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch('/react-store-products')
      const resp2 = await axios(randomUserUrl)
      // console.log(resp1);
      // console.log(resp2);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WrapperOne>
    <div>
      <h2 className='text-center'>custom instance</h2>
      <p>In this custom instance you can takkkle two types of sinarios,</p>
      <p>lets, thinkk, you have fetched two external url's = In that you need
        one "application json" and another one is "test format"...   
       </p>
    </div>
    </WrapperOne>
  )
}

export default CustomInstance


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