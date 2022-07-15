import { useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'

// we imported GlobalInstance -> there we wrote 
// import '../axios/global'


const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {

  const fetchData = async () => {
    try {
     const resp1 = await axios(productsUrl)
     const resp2 = await axios(randomUserUrl)
    //  console.log(resp1);
    //  console.log(resp2);
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
        <h1>GlobalInstance</h1>

        <p>inspect and See network tab request header 
           application/json added </p>
        
        </div>

    </WrapperOne>
  )
}

export default GlobalInstance



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