import React from 'react'
import View from '../../components/View'
import styles from './resume.css';
import Experiences from '../../components/Experiences';


const Resume = () => {
  return (
    <View>
      <div className={styles.root}>
        <Experiences/>
      </div>
    </View>
  )
}

export default Resume