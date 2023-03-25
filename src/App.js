import React from 'react'
import SearchBar from './components/SearchBar'
import searchImage from './api'
import { useState } from 'react'
import ImageList from './components/ImageList';

export default function App() {
  const [images,setImage]=useState([])

const handleSubmit=async (term)=>{
const result=await searchImage(term)
setImage(result);
}


  return (
    <div style={{backgroundColor:'black'}}>
   <SearchBar onSubmit={handleSubmit} />
   <ImageList images={images} />
    </div>
  )
}
