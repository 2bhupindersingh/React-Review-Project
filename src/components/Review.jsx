import React, { useState, useEffect } from "react";
import reviews from "../data";
import Button from "react-bootstrap/Button";

const Review = () => {
  const [data, setData] = useState(reviews);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevHandler = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const nextHandler = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const isLastSlide = currentSlide === data.length - 1;

  return (
    <div className="review-container">
      {data.map((item) => (
        <div
          key={item.id}
          className="review-list"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="review-img">
            <img src={item.image} alt="img" />
          </div>
          <div className="review-content">
            <div className="review-heading">
              <h2>{item.name}</h2>
            </div>
            <div className="job-post">
              <h6>{item.job}</h6>
            </div>
            <div className="review-text">{item.text}</div>
          </div>
        </div>
      ))}
      {currentSlide > 0 ? (
        <Button onClick={prevHandler} className="prev-btn">
          <span class="material-icons">arrow_back</span>
        </Button>
      ) : (
        ""
      )}

      {!isLastSlide ? (
        <Button onClick={nextHandler} className="next-btn">
          <span class="material-icons">arrow_forward</span>
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Review;
