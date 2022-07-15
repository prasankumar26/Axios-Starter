import { useEffect } from 'react';
import styled from 'styled-components'


// create interceptors 
import authFetch from '../axios/interceptors';

const url = 'https://course-api.com/react-store-products';


const Interceptors = () => {

    const fetchData = async () => {
        try {
         const resp = await authFetch('/react-store-products')
         console.log(resp);
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
      <h2 className='text-center'>Interceptors</h2>
      <p>It is axios interceptors, Inspect and see you can handle errors easily...  </p>
    </div>
    </WrapperOne>
  )
}

export default Interceptors


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