function Options() {
    return (
      <div className="Options-container">
        <div id="timer" class="timer">00:00:00</div>
  
        <section class="align-inputs">
            <div class="input-container">
            <label for="hour">Horas</label>
            <input type="number" name="" id="hour" value="00" max="99" min="0"/>
            </div>
            <div class="input-container">
            <label for="minute">Minutos</label>
            <input type="number" name="" id="minute" value="00" max="59" min="0"/>
            </div>
            <div class="input-container">
            <label for="second">Segundos</label>
            <input type="number" name="" id="second" value="00" max="59" min="0"/>
            </div>
        
        </section>
        <div class="btn">
            <button id="btn-start">GO !</button>
        </div>
      </div>
    );
  }

  export default Options