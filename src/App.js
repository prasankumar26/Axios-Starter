import React from 'react'
import Navbar from './components/Navbar'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import AxiosFetchdata from './pages/AxiosFetchdata';
import CusttomInstance from './pages/CustomInstance'
import Headers from  './pages/Headers'
import PostRequest from './pages/PostRequest';
import GlobalInstance from './pages/GlobalInstance';
import CustomInstance from './pages/CustomInstance';
import Interceptors from './pages/Interceptors';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<AxiosFetchdata />} />
      <Route path="/headers" element={<Headers />} />
      <Route path="/custominstance" element={<CusttomInstance />} />
      <Route path="/postrequest" element={<PostRequest />} />
      <Route path="/globalinstance" element={<GlobalInstance />} />
      <Route path="/custominstance" element={<CustomInstance />} />
      <Route path="/interceptors" element={<Interceptors />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App