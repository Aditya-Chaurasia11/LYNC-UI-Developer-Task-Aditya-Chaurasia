import React, { useEffect, useState } from "react";
import "./reviewCarousel.scss";
import reviewData from "../../data/reviewData";

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const totalSlides = reviewData?.length;
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log(width);

    if (width <= 758) {
      setSlidesToShow(1);
    } else if (width <= 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const nextSlide = () => {
    if (currentIndex < totalSlides - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="review_carousel-container">
      <button
        className="carousel-btn"
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 13L2 7L8 1" stroke="#DADDD8" stroke-width="2" />
        </svg>
      </button>

      <div className="review_carousel-content">
        {reviewData
          ?.slice(currentIndex, currentIndex + slidesToShow)
          .map((review, index) => (
            <div className="review_carousel-slide" key={index}>
              <div className="reviewData_reviews">
                <p>{review?.review}</p>
              </div>
              <div className="reviewData_profile">
                <div className="reviewData_profile_img"></div>
                <div className="reviewData_profile_name">
                  <h2>{review?.name}</h2>
                  <p>{review?.position}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <button
        className="carousel-btn"
        onClick={nextSlide}
        disabled={currentIndex === totalSlides - slidesToShow}
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L1 13" stroke="#DADDD8" stroke-width="2" />
        </svg>
      </button>
    </div>
  );
};

export default ReviewCarousel;
