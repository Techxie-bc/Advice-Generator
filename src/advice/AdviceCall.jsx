import React, { useState, useEffect } from 'react'
import axios from "axios";

const AdviceCall = () => {
    useEffect(() => {
        FullAdvice();
    }, [])
    const [newAdvice, setNewAdvice] = useState(null);
    const url = 'https://api.adviceslip.com/advice'
    
    const FullAdvice = async () => {
        axios.get(url).then((response) => {
           setNewAdvice(response.data.slip)
           console.log(response.data.slip)
        }).catch((error) => {
           console.log(error)
       })
    }
  return (
      <div>
          <p>Advice {newAdvice.id}</p>
          <h1>{newAdvice.advice}</h1>
    </div>
  )
}

export default AdviceCall