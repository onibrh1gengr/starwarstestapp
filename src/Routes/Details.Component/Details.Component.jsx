import React,{useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'

function DetailsComponent(props) {
  const { state } = useLocation();
  const { characters, title, director, opening_crawl, producer } = state.film;
  const [ characterDetails, setCharacterDetails] = useState([]);


  useEffect(()=>{
    const fetchedObjArray = characters.map(async (value)=>{
      let singleObj = {}
      await fetch(value).then(res=>res.json()).then(res=>singleObj = res)
      return singleObj
      })
      
      Promise.all(fetchedObjArray).then((value)=>{
      // this
      setCharacterDetails(value);
      }).catch(err=>console.log(err))
  },[])






if(characterDetails.length === 0){
  return (
    <div>Loading...</div>
  )
} else{
  return(
    <>
    {console.log(characterDetails)}
    </>
  )
}
}

export default DetailsComponent