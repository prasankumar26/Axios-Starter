import React, { useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import { useEffect } from 'react';

const url = 'https://course-api.com/react-store-products';



const AxiosFetchdata = () => {

    const [data, setData] = useState([])

    const fetchData = async () =>{
       try {
        const response = await axios(url)
        const data = response.data
        setData(data)
     } catch (error) {
         console.log(error);
       }
    }

    useEffect(() =>{
        fetchData()
    },[])

  return (
    <>
    <WrapperOne>
        <div className="fetchdata">
            <h1>How to Fetch data From API Using Axios</h1>
           <code>import axios from 'axios'</code>

          {
            data.map((item) =>{
                // console.log(item);
                return <h2>
                    {item.name}
                </h2>
            })
          }
          

        </div>
    </WrapperOne>
    </>
  )
}

export default AxiosFetchdata

const WrapperOne = styled.div`
width: 90vw;
margin: 0px auto;
.fetchdata{
    padding-top: 100px;
}

`