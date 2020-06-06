import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
};

const Statistic = ({text, count}) => (
  <tr>
    <td>{text}</td>
    <td>{count}</td>
  </tr>
);

const Statistics = ({values}) => {
  const [good, neutral, bad] = values;
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic text="good" count={good} />
          <Statistic text="neutral" count={neutral} />
          <Statistic text="bad" count={bad} />
          <Statistic text="all" count={all} />
          <Statistic text="average" count={(good - bad) / all} />
          <Statistic text="positive" count={(100 * good / all) + '%'} />
        </tbody>
      </table>
    </>
  );
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good+1)} text='good' />
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral' />
      <Button handleClick={() => setBad(bad+1)} text='bad' />
      <Statistics values={[good, neutral, bad]} />
    </div>
  )
}

export default App;