const price1= document.querySelector('#price1');
const price2= document.querySelector('#price2');

const qun1= document.querySelector('#qun1');
const qun2= document.querySelector('#qun2');

const avgprice = document.querySelector('.avg-price');
const totquntities = document.querySelector('.tot-qun-res');
const totinv=document.querySelector('.tot-inv-val');

const calbtn = document.querySelector('.cal-btn');

const calculate=()=>{
    const p1 = parseFloat(price1.value);
    const p2 = parseFloat(price2.value);
    const q1 = parseFloat(qun1.value);
    const q2 = parseFloat(qun2.value);

    totquntities.innerText=q1+q2;
    avgprice.innerText=(p1+p2)/2;
    totinv.innerText=(p1*q1)+(p2*q2);
    
}

calbtn.addEventListener('click',()=>{
    calculate();
})