import React from 'react'
import './home.css'
import Navbar from '../components/navbar/Navbar.js'
import Banner from '../components/banner/Banner.js'
import requests from '../helpers/requests.js'
import Row from '../components/row/Row.js'

const Home = () => {
    return (
        <div className='homescreen'>
            {/* navbar */}
            <Navbar />
            {/* banner */}
            <Banner />


            {/* row */}
            <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}

export default Home