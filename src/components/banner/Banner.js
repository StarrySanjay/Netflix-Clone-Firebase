import React, { useEffect, useState } from 'react'
import axios from '../../helpers/axios'
import requests from '../../helpers/requests'
import './banner.css'


const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const request = await axios.get(requests.fetchNetflixOriginals);
              const results = request.data.results;
              if (results && results.length > 0) {
                  const randomIndex = Math.floor(Math.random() * results.length);
                  setMovie(results[randomIndex]);
              }
              return request;
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
      return string && string.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
      <div className='banner' style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: 'cover',
          backgroundPosition: "center center",
      }}>
          <div className='banner_content'>
              <h1 className='banner_title'>
                  {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <p className='banner_des'>{truncate(movie?.overview, 200)} </p>
              <div className='banner_buttons'>
                  <button className='banner_button'>Play</button>
                  <button className='banner_button'>My List</button>
              </div>
              
          </div>
         <div className='banner_fade'/>
      </div> 
  )
}

export default Banner;
