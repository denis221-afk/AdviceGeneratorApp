const isCaunt = document.querySelector('#isCount'), 
      isBtn = document.querySelector('#btn');
      isContent = document.querySelector(`#content`);

function trigerCaunt() {
    let caunt = 0;

    return function changeCaunt () {
        caunt++
        return caunt
    }
    
}

const handleCaunt = trigerCaunt();


isBtn.addEventListener('click', () => {
    isCaunt.innerHTML = `Advice#${handleCaunt().toString()}`;
})


     



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



