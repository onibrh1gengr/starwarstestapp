import React, {useState, useEffect} from 'react'
import "./Master.component.styles.scss"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Star from "../../assets/starwars.webp"

function MasterComponent() {
  const [filmsList, setFilmsList] = useState([])
  const [peopleList, setPeopleList] = useState([])
  useEffect(()=> {
    axios.get(`https://swapi.dev/api/films/`)
    .then(res => {
      const films = res.data;
      const {results} = films;
      setFilmsList(results);
    })
    axios.get(`https://swapi.dev/api/people/`)
    .then(res => {
      const films = res.data;
      const {results} = films;
      setPeopleList(results);
    })
  },[])

  const navigate = useNavigate();

  return (
    <div className='card-container'>
      {filmsList.length > 0 && (
      <div className='film-card-container'>
        {filmsList.map( (film) => 
        <div 
        onClick={() => navigate('/details', { state: { film , people: peopleList} })} 
        key={film.episode_id}
        >
          <div className='film-card'>
            <img src={Star} width={100} height={100} alt={"starwars"} />
            <p><strong>{film.title}</strong></p>
            <small className='film-desc'>{film.opening_crawl}</small>
          </div> 
        </div>
        )}
      </div>
      )}
    </div>
  )
}

export default MasterComponent