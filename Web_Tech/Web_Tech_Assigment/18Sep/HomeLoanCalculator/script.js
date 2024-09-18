const p =document.querySelector("#amount");
const m = document.querySelector("#month");
const r = document.querySelector("#rate");
const result = document.querySelector('#result');

const calculate=document.querySelector('button');

calculate.addEventListener('click',()=>{
    // P = Principal loan amount

    // N = Loan tenure in months

    // R = Monthly interest rate

    // P x R x (1+R)^N / [(1+R)^N-1]
    const principal = parseFloat(p.value);
    const time = parseInt(m.value);
    const rate = parseFloat(r.value)/12/100;
    const amount = principal * rate *(1+rate)**time/[(1+rate)**time-1]

    result.value=Math.round(amount);
})
