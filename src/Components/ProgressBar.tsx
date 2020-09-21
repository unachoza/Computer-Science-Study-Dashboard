import React from 'react';
import '../App.css';
const udemyClasses = [
  'Zero to Master: Coding Interview',
  'Master Class: Javascript Algorithms and Data Structure',
  'Coding Interview Jumpstart',
  'Foundations of Computer Science',
  'Data Science Bootcamp 2020',
];
const ProgressBar = () => {
  return (
    <>
      <div className="basic-text">ProgressBar</div>
      {udemyClasses.map((udemyClass) => (
        <div className="basic-text">{udemyClass}</div>
      ))}
    </>
  );
};

export default ProgressBar;
