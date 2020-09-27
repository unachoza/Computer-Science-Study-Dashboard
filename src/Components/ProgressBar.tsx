import React from 'react';
import ProgressInput from './Form/ProgressInput';
import '../App.css';

const onlineClasses = [
  {
    completed: `${Math.round(20000 / 258)}%`,
    hours: 19,
    name: 'Zero to Master: Coding Interview',
    platform: 'Udemy',
  },
  {
    completed: `${Math.round(3300 / 36)}%`,
    hours: 6,
    name: 'Coding Interview Jumpstart',
    platform: 'Udemy',
  },
  {
    completed: 0,
    hours: 21,
    name: 'Master Class: Javascript Algorithms and Data Structure',
    platform: 'Udemy',
  },
  {
    completed: ` ${Math.round(1600 / 85)}%`,
    hours: 4.5,
    name: 'Foundations of Computer Science',
    platform: 'Udemy',
  },
  {
    completed: 0,
    hours: 28.5,
    name: 'Data Science Bootcamp 2020',
    platform: 'Udemy',
  },
  {
    completed: 0,
    hours: 17,
    name: ' Divide and Conquer, Sorting, Searching, and Randomized Algorithms',
    platform: 'Coursera',
    specialization: 'Algorithms',
  },
  {
    completed: 0,
    hours: 15,
    name: 'Graph Search, Shortest Path, and Data Structures',
    platform: 'Coursera',
    specialization: 'Algorithms',
  },
  {
    completed: 0,
    hours: 15,
    name: 'Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming',
    platform: 'Coursera',
    specialization: 'Algorithms',
  },
  {
    completed: 0,
    hours: 14,
    name: 'Shortest Paths Revisited, NP-Complete Problems and What To Do About Them',
    platform: 'Coursera',
    specialization: 'Algorithms',
  },
  {
    completed: 0,
    hours: 37,
    name: 'Algorithmic Toolbox',
    platform: 'Coursera',
    specialization: 'Data Structures',
  },
  {
    completed: 0,
    hours: 22,
    name: 'Data Structures',
    platform: 'Coursera',
    specialization: 'Data Structures',
  },
  {
    completed: 0,
    hours: 55,
    name: 'Algorithms on Graphs',
    platform: 'Coursera',
    specialization: 'Data Structures',
  },
  {
    completed: 0,
    hours: 17,
    name: 'Algorithms on Strings',
    platform: 'Coursera',
    specialization: 'Data Structures',
  },
  {
    completed: 0,
    hours: 27,
    name: 'Advanced Algorithms and Complexity',
    platform: 'Coursera',
    specialization: 'Data Structures',
  },
  {
    completed: 0,
    hours: 17,
    name: 'SGenome Assembly Programming Challenge',
    platform: 'Coursera',
    specialization: 'Data Structures',
  },
];

const courseHrs = [37, 22, 55, 17, 27, 17, 27, 17, 15, 15, 14, 19, 21.5, 6, 4.5, 28.5];
const totalStudyTime = (courseHrs: number[]) => {
  let total = courseHrs.reduce(function (a, b) {
    return a + b;
  }, 0);
  return total;
};
const ProgressBar = () => {
  return (
    <div className="main">
      {onlineClasses.map((udemyClass) => (
        <div className="basic-text">{udemyClass.name}</div>
      ))}

      <div>
        <h1>Total Study Time {totalStudyTime(courseHrs)} Hours</h1>
      </div>
      <ProgressInput />
    </div>
  );
};

export default ProgressBar;
