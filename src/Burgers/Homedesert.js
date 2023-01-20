import React, { useEffect, useState } from 'react'
import {deSert} from './burger'
import './Burger.css'
import { Paper,Typography } from '@mui/material'



function Homedesert() {
  const [allDesset,setallDessert]=useState([])

  useEffect(()=>{
    deSert()
    .then(({data})=>{
      console.log(data);
      setallDessert(data)
    })
  },[])

  return (
    <>
     {allDesset.map((myburger)=>{
      const{desc,name,images,ingredients}=myburger
      let small=images[0].sm
      let ingname=ingredients[1].name
      let ingimage=ingredients[0].img
      return(
        <>
          <Paper elevation={2} className='burger'>
            <Typography variant='h5' color='#00a152' padding={1}>{name}</Typography>
            <Typography marginLeft={3.3} padding={1}>{desc}</Typography>
            <img src={small} alt={name} className='image'/>
            <Typography color='secondary' variant='h6' marginLeft={3}>Ingredients</Typography>
            <img  src={ingimage} alt={name} />
            <Typography padding={2}>{ingname}</Typography>
          </Paper>
        </>
      )
     })}
    </>
  )
}

export default Homedesert