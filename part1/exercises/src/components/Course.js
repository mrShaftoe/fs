import React from 'react';

const Header = ({course}) => (
  <h2>{course}</h2>
);
  
const Part = ({part}) => {
  const {name, exercises} = part;
  return (
    <p>{name} {exercises}</p>
  );
};

const Content = ({parts}) => {
  return ( 
    <>
      {parts.map(part => <Part part={part} key={part.id} />)}
    </>);
};

const Total = ({parts}) => {
const total = parts.reduce((acc, it) => acc + it.exercises, 0);  
  return (
    <p><b>Total {total} exercises</b></p>
  );
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div> ); 
}
export default Course;