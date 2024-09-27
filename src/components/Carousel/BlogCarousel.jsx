import React, { useEffect, useState } from "react";
import "./BlogCarousel.scss";
import blogData from "../../data/blogData";

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [width, setWidth] = useState(window.innerWidth);

  const totalSlides = blogData?.length;

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
    <div className="blog_carousel-container">
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
          <path d="M8 13L2 7L8 1" stroke="#DADDD8" strokeWidth="2" />
        </svg>
      </button>

      <div className="blog_carousel-content">
        {blogData
          ?.slice(currentIndex, currentIndex + slidesToShow)
          .map((blog, index) => (
            <div className="blog_carousel-slide" key={index}>
              <img src={blog?.image} alt={`Slide ${index}`} />
              <div className="blog_carousel_data">
                <h3>{blog?.title}</h3>
                <p>{blog?.description}</p>
                <button className="blog_carousel_button">Read more</button>
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
          <path d="M1 1L7 7L1 13" stroke="#DADDD8" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};

export default BlogCarousel;
