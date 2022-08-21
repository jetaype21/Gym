import { programsData } from '../../data/programsData'
import './programs.css'
import RightArrow from '../../assets/rightArrow.png'
import { useRef } from 'react'

const Programs = () => {

  const programs = useRef()

  return (
    <div className="programs" id='programs'>
<div className="blur programs-blur"></div>

      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map(program => (
          <div className="category" key={program.heading}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs