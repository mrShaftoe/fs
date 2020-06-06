import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick} >{text}</button>
  );
}
const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  
  const setNextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const setVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };
  const mostVoted = votes.indexOf(Math.max(...votes));


  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has votes: {votes[selected]}</p>
      <Button handleClick={setVote} text='vote' />
      <Button handleClick={setNextAnecdote} text='next' />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted]}</p>
      <p>has votes: {votes[mostVoted]}</p>
    </div>
  )
}

export default App;