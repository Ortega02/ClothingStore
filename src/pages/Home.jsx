import React from 'react'
import '../css/home.css'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'


const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
            <NavBar/>
                <HeroSection/>
            </div> 
            <h2>Our Products:</h2>
        </div>
    )
}

export default Home;