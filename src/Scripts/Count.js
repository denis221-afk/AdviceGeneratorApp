const isCaunt = document.querySelector('#isCount'), 
      isBtn = document.querySelector('#btn');


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