function lockDevice() {
  const lockDiv = document.createElement('div');
  lockDiv.className = 'lock-screen';
  lockDiv.innerText = '';
  document.body.appendChild(lockDiv);

  // ✳️ أضف أضواء الهاكر
  const greenLight = document.createElement('div');
  greenLight.className = 'hacker-light green';
  lockDiv.appendChild(greenLight);

  const redLight = document.createElement('div');
  redLight.className = 'hacker-light red';
  lockDiv.appendChild(redLight);

  const audio = document.getElementById('alarm');
  audio.play();

  setTimeout(() => {
    document.body.removeChild(lockDiv);
    audio.pause();
    audio.currentTime = 0;
  }, 15000);
}
