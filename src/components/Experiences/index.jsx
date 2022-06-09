import React from 'react'
import './styles.css';
import {experiences} from '../../experiences'


const List = ({
  year,
  title,
  company
}) => {
  return (
    <div className="experienceRoot">
      <div className="experience">
        <div className="year">{year}</div>
        <div className="rightContainer">
          <div className="title">{title}</div>
          <div className="company">{company}</div>
        </div>
      </div>
    </div>
  )
}


const Experiences = () => {

  return (
    <div className="outerCont">
      <div className='header'>
        <span>Experiences</span>
      </div>
      {experiences?.map((e, index) => (
        <List key={index} year={e?.year || ''} company={e?.company || ''} title={e?.title || ''} />
      ))}
    </div>
  )
}

export default Experiences