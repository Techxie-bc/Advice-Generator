import React from 'react'
import './advice.css';
import icon from './images/pattern1.svg';
import pattern2 from './images/dice.svg'

import AdviceCall from './AdviceCall';

const Advice = () => {
    
    // if (!newAdvice) return null;


  return (
      <div className="container">
          <div className="card">
              <div className="cardWords">
                  <AdviceCall />
            
           
              </div>
              <div className="cardIcons">
                  <img src={icon} alt="icons" />
              </div>
              <div className="bottomIcon">
                  <img src={pattern2} alt="pattern-icon" />
              </div>
              </div>
    </div>
  )
}

export default Advice