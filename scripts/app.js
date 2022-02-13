function getPin () {
  const pin = Math.round(Math.random() * 10000);
  if (pin.toString().length !== 4) return getPin();
  return pin;
}

document.querySelector('.generate-btn').addEventListener('click', function() {
  const pin = getPin();
  document.getElementById('display-pin').value = pin;
  document.getElementById('matched').style.display = 'none';
  document.getElementById('not-matched').style.display = 'none';
  document.getElementById('check-pin').value = '';
});

document.querySelector('.calc-body').addEventListener('click', function(event) {
  const key = event.target;
  const number = key.innerText;
  const checkPinDisplay = document.getElementById('check-pin');
  const checkPinDisplayValue = checkPinDisplay.value;
  if (Number.isNaN(+number)) {
    if (number === 'C') checkPinDisplay.value = '';
    if (number === '<') checkPinDisplay.value = checkPinDisplayValue.slice(0, -1);
  } else {
    if (checkPinDisplayValue.length < 4) checkPinDisplay.value = checkPinDisplayValue + number;
  }

  // matching
  if (key.classList.contains('submit-btn')) {
    const pin = document.getElementById('display-pin').value;
    if (pin === checkPinDisplayValue) {
      document.getElementById('matched').style.display = 'block';
      document.getElementById('not-matched').style.display = 'none';
    } else {
      document.getElementById('not-matched').style.display = 'block';
      document.getElementById('matched').style.display = 'none';
    }
  }
})
