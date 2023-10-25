import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const prevCard = () => {
    if(index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const nextCard = () => {
    if(index === people.length - 1){
      setIndex(0)
    } else {
      setIndex(index + 1);
    };
  };
  return (
    <article className='reviev'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'></img>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={prevCard} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={nextCard} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button  className='random-btn'> Supise Me</button>
    </article>
  )
};

export default Review;
