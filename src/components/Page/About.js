import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function About() {

  const [isOut, setIsOut] = useState("diyari");

  if(!isOut) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div>
      <h1>About Page</h1>

      <p>When you are hiring for startups, you’re not only looking for a particular set of skills from candidates, you’re also looking for people that are ready to hustle, join a thriving culture, and have a sense of flexibility that comes with being part of a growing company. Though most of these intangibles can become clear in an interview or screening, it makes hiring managers’ lives easier when these candidates are self-selecting, when they’re clearly on the lookout for startup jobs.</p>

      <button onClick={ () => setIsOut(null)}>Home</button>
    </div>
  )
}

