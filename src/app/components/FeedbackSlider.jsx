// src/components/FeedbackSlider.js
"use client"

import React, { useState } from 'react';

const FeedbackSlider = () => {
 const feedbacks = [
    { name: 'John Doe', feedback: 'This is great!', role: 'CEO, ABC Corp' },
    { name: 'Jane Doe', feedback: 'Incredible service!', role: 'PM, XYZ Corp' },
    { name: 'John Doe', feedback: 'This is great!', role: 'CEO, ABC Corp' },
    { name: 'Jane Doe', feedback: 'Incredible service!', role: 'PM, XYZ Corp' },
    { name: 'John Doe', feedback: 'This is great!', role: 'CEO, ABC Corp' },
    { name: 'Jane Doe', feedback: 'Incredible service!', role: 'PM, XYZ Corp' },
    { name: 'John Doe', feedback: 'This is great!', role: 'CEO, ABC Corp' },
    { name: 'Jane Doe', feedback: 'Incredible service!', role: 'PM, XYZ Corp' },
    { name: 'John Doe', feedback: 'This is great!', role: 'CEO, ABC Corp' },
    { name: 'Jane Doe', feedback: 'Incredible service!', role: 'PM, XYZ Corp' },
    // ... add more feedbacks here
 ];

 const [currentIndex, setCurrentIndex] = useState(0);

 const nextFeedback = () => {
    setCurrentIndex((currentIndex + 1) % feedbacks.length);
 };

 const prevFeedback = () => {
    setCurrentIndex((currentIndex - 1 + feedbacks.length) % feedbacks.length);
 };

 return (
    <div className="feedback-slider bg-black p-4 rounded">
      <div className="feedback-slider-controls flex justify-between">
        <button className="btn btn-primary" onClick={prevFeedback}>
          &lt; Prev
        </button>
        <button className="btn btn-primary" onClick={nextFeedback}>
          Next &gt;
        </button>
      </div>
      <div className="feedback-slider-content mt-4">
        <p className="text-xl font-bold">{feedbacks[currentIndex].feedback}</p>
        <p className="mt-2 text-gray-500">{feedbacks[currentIndex].name}</p>
        <p className="mt-2 text-gray-500">{feedbacks[currentIndex].role}</p>
      </div>
    </div>
 );
};

export default FeedbackSlider;


// "use client"

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaStar } from 'react-icons/fa';


// const feedbacks = [
//     {
//       id: 1,
//       text: "Great service! The team was responsive and delivered high-quality work.",
//       author: "John Doe",
//     },
//     {
//       id: 2,
//       text: "I'm impressed with the level of professionalism. Will definitely work with them again.",
//       author: "Jane Smith",
//     },
//     {
//       id: 3,
//       text: "Great service! The team was responsive and delivered high-quality work.",
//       author: "John Doe",
//     },
//     {
//       id: 4,
//       text: "I'm impressed with the level of professionalism. Will definitely work with them again.",
//       author: "Jane Smith",
//     },
//     {
//       id: 5,
//       text: "Great service! The team was responsive and delivered high-quality work.",
//       author: "John Doe",
//     },
//     {
//       id: 6,
//       text: "I'm impressed with the level of professionalism. Will definitely work with them again.",
//       author: "Jane Smith",
//     },
//     {
//       id: 7,
//       text: "Great service! The team was responsive and delivered high-quality work.",
//       author: "John Doe",
//     },
//     {
//       id: 8,
//       text: "I'm impressed with the level of professionalism. Will definitely work with them again.",
//       author: "Jane Smith",
//     },
//     {
//       id: 9,
//       text: "Great service! The team was responsive and delivered high-quality work.",
//       author: "John Doe",
//     },
//     {
//       id: 10,
//       text: "I'm impressed with the level of professionalism. Will definitely work with them again.",
//       author: "Jane Smith",
//     },
//     // Add more feedbacks as needed
// ];

// const FeedbackSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       {feedbacks.map((feedback) => (
      
//         <div key={feedback.id} className="text-center p-4">
//           <p className="text-lg text-gray-950 font-semibold">{feedback.text}</p>
//           <p className="text-gray-800 mt-2">{feedback.author}</p>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default FeedbackSlider;
