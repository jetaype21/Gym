import './plan.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import { useRef } from 'react'

const Plans = () => {

  const plans = useRef()

  return (
    <div className='plans-container' id='plans'>

      <div className="blur plans-blur"></div>

      <div className="programs-header">
        <span className='stroke-text'>READY TO START</span>
        <span>YOU JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> $ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div><span>See more benefits {'->'} </span></div>
            <button className='btn'>Join now</button>
          </div>
        ))}
      </div>
      <div className="blur plans-blur-l"></div>
    </div>
  )
}

export default Plans