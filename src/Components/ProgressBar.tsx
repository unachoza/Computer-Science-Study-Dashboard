import React from 'react';
// import Form from './Form/Form';
import '../App.css';
const udemyClasses = [
  ` ${Math.round(20000 / 258)}% ${Math.round(14600 / 258)}% — 19hrs — Zero to Master: Coding Interview`,
  ' 21.5hrs — Master Class: Javascript Algorithms and Data Structure',
  ` ${Math.round(3300 / 36)}% — 6hrs — Coding Interview Jumpstart`,
  ` ${Math.round(1600 / 85)}% — 4.5hrs — Foundations of Computer Science`,
  '28.5hrs — Data Science Bootcamp 2020',
];
const courseraClassesAlgorithms = [
  '17hrs — Divide and Conquer, Sorting, Searching, and Randomized Algorithms',
  '15hrs — Graph Search, Shortest Path, and Data Structures',
  '15hrs — Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming',
  '14hrs — Shortest Paths Revisited, NP-Complete Problems and What To Do About Them',
];
const DataStructuresAlgorithms = [
  '37hrs — Algorithmic Toolbox',
  '22hrs — Data Structures',
  '55hrs — Algorithms on Graphs',
  '17hrs — Algorithms on Strings',
  '27hrs — Advanced Algorithms and Complexity',
  '17hrs — Genome Assembly Programming Challenge',
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
      {udemyClasses.map((udemyClass) => (
        <div className="basic-text">{udemyClass}</div>
      ))}
      {courseraClassesAlgorithms.map((algoClass) => (
        <div className="basic-text">{algoClass}</div>
      ))}
      {DataStructuresAlgorithms.map((dataStructureClass) => (
        <div className="basic-text">{dataStructureClass}</div>
      ))}
      <div>
        <h1>Total Study Time {totalStudyTime(courseHrs)} Hours</h1>
      </div>
      {/* <Form /> */}
    </div>
  );
};

export default ProgressBar;
