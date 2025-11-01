const isBtn = document.querySelector(`#btn`), 
      isContent = document.querySelector(`#content`); 



function getRandomAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(res => pushAdvice(res.slip.advice))
    .catch(err => console.log(err))
}



 getRandomAdvice(); 

 function pushAdvice (text) {
    isContent.innerHTML = text; 
}

isBtn.addEventListener('click', getRandomAdvice)
