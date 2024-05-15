import { useState, useEffect } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMortgageService from '../../services/useMortgageService';

import './mentor-card.scss';

import play from '../../assets/svgicons/play.svg';

const MentorCard = () => {

    const [mentList, setMentList] = useState([]);
    const {loading, error, getAllMentors} = useMortgageService();

    useEffect (()=>{
      onRequest();
    }, [])

    const onRequest = () => {
      getAllMentors()
      .then(onMentListLoaded);
    }

    const onMentListLoaded = (mentors) =>{
        setMentList(mentors);
    }

function renderItems (arr) {
  const items = arr.map((item, index) => {
      return (
        <div className="mentor-card__body" key={index}>
          <div className='mentor-card__body--row'>
            <img src={item.img} alt={item.title} className="mentor-card__img"/>
              <div className="mentor-card__action">
                <a href={item.videoUrl} target="_blank" className="play"><img src={play} alt='play'/></a>
                <div className="mentor-card__author">Meet {item.name}</div>
              </div>
           </div>
            <div className="accent-subtitle">{item.title}</div>
            <div className="mentor-card__name">{item.name}</div>
            <div className="mentor-card__text">{item.text}</div>   
            <div className="mentor-card__info title--h5">{item.nestedArrayTitle}</div>

        </div>
) 
})

 const nestedItems = arr.map((item, index) => {
      return (
            <div className="mentor-card__item" key={index}>
              <div className="mentor-card__item-img">{item.skills.icon}</div>
              <div className="mentor-card__item-text">{item.skills.name}</div>
            </div>
  )
 })                      
            
  return (
    <div className="mentors__cards">
       {items}
       <div className="mentor-card__items" >
           {nestedItems}
       </div>
      
      </div>   

  )
}

const items = renderItems(mentList);

const errorMessage = error ? <ErrorMessage/> : null;
const spinner = loading ? <Spinner/> : null;

    return (
<section className="mentors">
  <div className="container">
    <div className="mentors__head">
    <h2 className="title title--h2 text-center">Getting a mortgage funded takes a village</h2>
    <div className="mentor-card__head">
        <p>Well, not quite a village, but two of the villages best lending heroes!</p>
      </div>
      </div>
    <div className="mentor-card">
      {items}
      {errorMessage}
      {spinner}
    </div>
  
  </div>
</section>
    )
}

export default MentorCard;