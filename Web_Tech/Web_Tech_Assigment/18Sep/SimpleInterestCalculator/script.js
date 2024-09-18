const p = document.querySelector('#amount');
const r = document.querySelector('#rate');
const t = document.querySelector('#time');
const interest=document.querySelector('#interest');
const totAmount=document.querySelector('#t-amount');
const calculateSIbtn=document.querySelector('button');

function calculateSI(p,r,t){
    let ty=t/12;
     return (p*r*ty)/100;  
}


calculateSIbtn.addEventListener('click',()=>{
    let principle = parseFloat(p.value);
    let rate = parseFloat(r.value);
    let time = parseInt(t.value);
    const Interest=calculateSI(principle,rate,time);
    interest.value=Math.floor(Interest);
    totAmount.value=Number(principle)+Number(Interest);
})