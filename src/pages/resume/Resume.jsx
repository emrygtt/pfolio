import React from 'react'
import View from '../../components/View'
import './resume.css';
import Experiences from '../../components/Experiences';


const Resume = () => {
  return (
    <View>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Experiences/>
      </div>
    </View>
  )
}

export default Resume