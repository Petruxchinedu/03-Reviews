import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const prevPerson = () => {
    setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  };
 
  const getRandomIndex = () => Math.floor(Math.random() * people.length);

  const randomPerson = () => {
    setIndex(getRandomIndex());
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn"onClick={randomPerson}>Surprise Me</button>
    </article>
  );
};

export default Review;
