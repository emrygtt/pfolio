import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './about.css'
import { motion } from 'framer-motion'
import View from '../../components/View'

const About = () => {
  return (
    <View>
      <div className='top'>
        <div className='left'>
          <h2>emrygtt</h2>
          <div className= 'social-icons'>
            <SocialIcon className = 'icons'   url= 'https://github.com/emrygtt'           target= '_blank'/>
            <SocialIcon className = 'icons'   url= 'https://www.linkedin.com/in/emrygtt/' target= '_blank'/>
            <SocialIcon className = 'icons'   url= 'https://www.instagram.com/emrygtt/'   target= '_blank'/>
          </div>
        </div>
        <div className='right'>
          <p>
          Hello, I'm Emre YIGIT.<br/>
          Software Engineer/Developer
          </p>
        </div>
      </div>
    </View>    
  )
}

export default About