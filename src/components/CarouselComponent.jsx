import { useState, useEffect } from "react";
import {
  YachtOptimized1,
  YachtOptimized2,
  YachtOptimized3,
  YachtOptimized4,
} from "../main";

export function CarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(1); // State to track current slide, starting from slide 1

  const nextSlide = () => {
    const totalSlides = 4; // Total number of slides
    setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1); // Loop back to 1 after the last slide
  };

  const prevSlide = () => {
    const totalSlides = 4; // Total number of slides
    setCurrentSlide((prevSlide) => {
      if (prevSlide === 1) {
        return totalSlides;
      } else {
        return prevSlide - 1;
      }
    });
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Adjust slide duration (milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mb-16">
      <div className="carousel w-11/12 relative ">
        {/* Display current slide based on state */}
        <div
          id={`slide${currentSlide}`}
          className="carousel-item relative w-full "
        >
          {currentSlide === 1 && (
            <img
              src={YachtOptimized1}
              className="w-full h-56 rounded-lg"
              alt="Slide 1"
            />
          )}
          {currentSlide === 2 && (
            <img
              src={YachtOptimized2}
              className="w-full h-56 rounded-lg"
              alt="Slide 2"
            />
          )}
          {currentSlide === 3 && (
            <img
              src={YachtOptimized3}
              className="w-full h-56 rounded-lg"
              alt="Slide 3"
            />
          )}
          {currentSlide === 4 && (
            <img
              src={YachtOptimized4}
              className="w-full h-56 rounded-lg"
              alt="Slide 4"
            />
          )}

          {/* Navigation buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button className="btn btn-circle" onClick={prevSlide}>
              ❮
            </button>
            <button className="btn btn-circle" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
