import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/heroSection.css'

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <div className="hero-container">
            <h1>UNLEASH YOUR URBAN VIBE</h1>
            <button onClick={() => navigate('/about')}>Shop Now</button>
        </div>
    )
}

export default HeroSection;