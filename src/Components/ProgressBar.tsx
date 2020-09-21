import React from 'react';
import '../App.css';
const udemyClasses = [
  '19hrs Zero to Master: Coding Interview',
  '21.5hrs Master Class: Javascript Algorithms and Data Structure',
  '6hrs Coding Interview Jumpstart',
  '4.5hrsFoundations of Computer Science',
  '28.5hrs Data Science Bootcamp 2020',
];
const courseraClassesAlgorithms = [
  '17hrs Divide and Conquer, Sorting, Searching, and Randomized Algorithms',
  '15hrs Graph Search, Shortest Path, and Data Structures',
  '15hrs Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming',
  '14hrs Shortest Paths Revisited, NP-Complete Problems and What To Do About Them',
];
const DataStructuresAlgorithms = [
  '37hrs Algorithmic Toolbox',
  '22hrs Data Structures',
  '55hrs Algorithms on Graphs',
  '17hrs Algorithms on Strings',
  '27hrs Advanced Algorithms and Complexity',
  '17hrs Genome Assembly Programming Challenge',
];
const ProgressBar = () => {
  return (
    <>
      {Math.round(14600 / 258)}%
      {udemyClasses.map((udemyClass) => (
        <div className="basic-text">{udemyClass}</div>
      ))}
      {courseraClassesAlgorithms.map((algoClass) => (
        <div className="basic-text">{algoClass}</div>
      ))}
      {DataStructuresAlgorithms.map((dataStructureClass) => (
        <div className="basic-text">{dataStructureClass}</div>
      ))}
    </>
  );
};

export default ProgressBar;
