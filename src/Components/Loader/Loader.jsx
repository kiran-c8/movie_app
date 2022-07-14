import React from 'react'
import { Rings } from 'react-loader-spinner';
import './Loader.css'
const Loader = () => {
  return (
    <div className='loader'>
        <Rings color="#00BFFF" style={{height:'100vh'}} height={80} width={80} />
    </div>
  )
}

export default Loader