import React, { useState } from 'react';
import { FaStop } from 'react-icons/fa';

const GetRandomNumber = () => {
  const numbers = [...Array(15).keys()].map((i) => i + 1);
  numbers.sort(function (a, b) { return 0.5 - Math.random() });
  return {
    numbers: numbers.reduce(
      (rows, key, index) => (index % 3 === 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, [])
  };
}

const Grid = ({ numbers, correct, setNumbers }) => {
  const RemoveNumber = (r, c) => {
    if (numbers[r][c] === correct) {
      numbers[r][c] = '';
      setNumbers(numbers);
    }
  }

  const tableRows = numbers.map(
    (row, r) => <div className='game-table-row' key={r}>
      {row.map((elem, c) => <div key={c}>
        <button className='game-button' onClick={() => RemoveNumber(r, c)}>{elem}</button>
      </div>)}
    </div>
  );

  return (
    <div className='game-table'>
      {tableRows}
    </div>
  );
}

const OneToFifteen = ({ stop }) => {
  const [game, setGame] = useState({ ...GetRandomNumber(), correct: 1 });
  return (
    <div className='game-container'>
      <Grid
        numbers={game.numbers}
        correct={game.correct}
        setNumbers={(numbers) => setGame({numbers: numbers, correct: game.correct + 1})}
      />
      <button className='button' onClick={() => stop()}>
        <FaStop size='3em' />
      </button>
    </div>
  );
};

export default OneToFifteen;
