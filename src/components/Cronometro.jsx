import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setSeconds(seconds => seconds + 1)
      };
      if (seconds === 60) {
        setSeconds(1);
        setMinutes(minutes => minutes + 1)
      };
      if (minutes === 60) {
        setMinutes(1);
        setHours(hours => hours + 1)
      };
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }
  

  return (
    <div className="container">
      <p>Tempo decorrido: {hours} {hours === 1 ? "Hora" : "Horas"}, {minutes} {minutes === 1 ? "Minuto" : "Minutos"} e {seconds} segundos</p>
      <button onClick={toggleActive}>
        {isActive ? 'Parar' : 'Iniciar'}
      </button>
      <button onClick={reset}>
        Resetar
      </button>

    </div>
  );
}

export default Cronometro;



// function Options() {
//     return (
//       <div className="Options-container">
//         {/* <div id="timer" class="timer">00:00:00</div>
  
//         <section class="align-inputs">
//             <div class="input-container">
//             <label for="hour">Horas</label>
//             <input type="number" name="" id="hour" value="00" max="99" min="0"/>
//             </div>
//             <div class="input-container">
//             <label for="minute">Minutos</label>
//             <input type="number" name="" id="minute" value="00" max="59" min="0"/>
//             </div>
//             <div class="input-container">
//             <label for="second">Segundos</label>
//             <input type="number" name="" id="second" value="00" max="59" min="0"/>
//             </div>
        
//         </section>
//         <div class="btn">
//             <button id="btn-start">GO !</button>
//         </div> */}

        
//       </div>
//     );
//   }

//   export default Options