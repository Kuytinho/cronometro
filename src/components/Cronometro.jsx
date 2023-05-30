import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive) {
        setSeconds(seconds => seconds + 1)
      };
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  

  return (
    <div>
      <h1>Cronômetro</h1>
      <p>Tempo decorrido: {seconds} segundos</p>
      <button onClick={toggleActive}>
        {isActive ? 'Parar' : 'Iniciar'}
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