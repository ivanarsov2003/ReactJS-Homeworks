import { useState, useEffect } from 'react';
const Timer = () => {
  const [timer, setTimer] = useState(1);
  

  useEffect(() => {
    const countdown = setInterval(() => {
        setTimer((sec) => sec + 1);
    }, 1000)

    const clearIntervalFunction = () => clearInterval(countdown);

    return clearIntervalFunction;
  }, [])
  
  const resetTimer = () => {
    setTimer(1)
  }

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={resetTimer}>Reset timer</button>
    </div>
  );
};

export default Timer;