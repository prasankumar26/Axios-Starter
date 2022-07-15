import React, { useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'

const url = 'https://icanhazdadjoke.com/';

const Headers = () => {

  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url, {
        // if you not give headers: Application/json data will come from api as text formate
        headers: {
          Accept: 'application/json',
        },
      });
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
    <WrapperOne>
        <div className="fetchdata">
            <h1>How to Fetch data From API Using "Axios Headers Method"</h1>
           <code>import axios from 'axios'</code>
<br />
<br />

       <button className="btn" onClick={fetchDadJoke}>Click To Generate Random joke</button>

       <p>{joke}</p>
           
          

        </div>
    </WrapperOne>
    </>
  )
}

export default Headers

const WrapperOne = styled.div`
width: 90vw;
margin: 0px auto;
.fetchdata{
    padding-top: 100px;
}

.btn{
  background-color: blue;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  border: none;
}

`