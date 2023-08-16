let count = 0;
document.querySelector('#btn-plus').addEventListener('click', function(){
    const pElement = document.querySelector('#text');
    const pText = pElement.innerText;
    count += 1;
    pElement.innerText = count;
})

document.getElementById('btn-minus').addEventListener('click', function(){
    const pElement = document.getElementById('text');
    pElement.innerText = count -= 1;
})