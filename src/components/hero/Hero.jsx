import React, { useRef } from 'react'
import Header from '../header/Header'
import './hero.css'
import { motion } from 'framer-motion'
import {Routes, Route} from 'react-router-dom'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'

const Hero = ({children}) => {

  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false
  const home = useRef()
  return (
    <>
      <div className='hero' id='home'>
        <div className="left-h">
          < Header />

          <div className="the-best-ad">
            <motion.div
              initial={{ left: mobile ? '168px' : '238px' }}
              whileInView={{ left: '8px' }}
              transition={{ ...transition, type: 'tween' }}
            ></motion.div>
            <span>The best fitness club in the town</span>
          </div>

          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>your</span>
              <br />
              <span>ideal body</span>
            </div>

            <div className="text-h">
              <span>
                In here we will help you to shape and build your ideal body and live up life to fullest
              </span>
            </div>
          </div>

          <div className="figures">
            <div>
              <span>+140</span>
              <p>experts coachs</p>
            </div>

            <div>
              <span>+978</span>
              <p>members joined</p>
            </div>

            <div>
              <span>+50</span>
              <p>fitness programs</p>
            </div>
          </div>

          <div className="hero-buttons">
            <button className='btn'>Get started</button>
            <button className='btn'>Learn More</button>
          </div>
        </div>

        <div className="rigth-h">
          <button className="btn">Join More</button>

          <motion.div
            initial={{ right: '-1rem' }}
            whileInView={{ right: '4rem' }}
            transition={transition}
            className="heart-rate">
            <img src={heart} />
            <span>Heart Rate <br />
              <b>116 bpm</b></span>
          </motion.div>

          <img src={hero_image_back} className='hero-img img-back' />
          <img src={hero_image} className='hero-img img-fitnnes' />

          <motion.div
            initial={{ right: '39rem' }}
            whileInView={{ right: '35rem' }}
            transition={transition}
            className="calories">
            <img src={calories} />
            <p>
              <span>Calories burned</span>
              <span>220 kcal</span>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero