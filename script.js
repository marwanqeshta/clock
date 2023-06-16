window.onload = function() {
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var timer;
  
    var startBtn = document.getElementById('startBtn');
    var stopBtn = document.getElementById('stopBtn');
    var resetBtn = document.getElementById('resetBtn');
  
    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);
  
    function startTimer() {
      if (!timer) {
        timer = setInterval(runTimer, 1000);
      }
    }
  
    function runTimer() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
  
      document.getElementById('hours').textContent = padTime(hours);
      document.getElementById('minutes').textContent = padTime(minutes);
      document.getElementById('seconds').textContent = padTime(seconds);
    }
  
    function padTime(time) {
      return time.toString().padStart(2, '0');
    }
  
    function stopTimer() {
      clearInterval(timer);
      timer = null;
    }
  
    function resetTimer() {
      clearInterval(timer);
      timer = null;
      hours = 0;
      minutes = 0;
      seconds = 0;
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
    }
  };
  