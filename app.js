function clickHandler() {
    const inputElement = document.getElementById('firstNameInput');
    const target = document.getElementById('target-p');
    target.innerHTML = inputElement.value;
  }
  
  const button = document.getElementById('btnClickMe');
button.addEventListener('click', clickHandler);
button.addEventListener('mouseover',clickHandler);