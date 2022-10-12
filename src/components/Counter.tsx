import { useState } from 'react';
import styles from './Counter.modole.scss';
const Counter = () => {
  const [count, useCount] = useState(0);

  const IncrementCounter = () => {
    useCount(count + 1);
  };
  const DecrementtCounter = () => {
    useCount(count - 1);
  };

  return (
    <div className={styles}>
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={DecrementtCounter} className="minus">
          - Минус
        </button>
        <button onClick={IncrementCounter} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
};

export default Counter;
