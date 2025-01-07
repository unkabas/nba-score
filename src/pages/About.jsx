import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  )
}

export default About;