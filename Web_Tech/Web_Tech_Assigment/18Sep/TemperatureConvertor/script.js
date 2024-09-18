const cel=document.querySelector('#cel');
const fer=document.querySelector('#fer');

const btntofer=document.querySelector('#btn');

btntofer.addEventListener('click',()=>{
    let celcius=parseFloat(cel.value);
    let fahrenheit=celcius*9/5+32;
    fer.value=fahrenheit;
})