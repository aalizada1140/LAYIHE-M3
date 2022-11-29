let leftbtn = document.querySelector('.left-block')
let rightbtn = document.querySelector('.right-block')
let leftcurr = document.querySelector('.currleft')
let rightcurr = document.querySelector('.currright')
let leftActive = 'USD';
let rightActive = 'RUB';
function deleteLeft() {
    leftbtn.forEach((element) => {
        element.classList.remove("isActive");
    });
}
function deleteRight() {
    rightbtn.forEach((element) => {
        element.classList.remove("isActive");
    });
}

async function currency(url) {
    url="https://exchangerate.host/latest ";
    let promiseL= await fetch(`${url}?base=${leftActive}&symbols=${rightActive} `)
    let promiseR=await fetch(`${url}?base=${rightActive}&symbols=${leftActive}`)
    let responseL=await promiseL.json()
    let responseR=await promiseR.json()
    leftcurr.innerText=``
    rightcurr.innerText=``
}

leftbtn.forEach(element=>{
    element.addEventListener('click',(event)=>{
        deleteLeft();
        event.classList.add('isActive')
        leftActive=event.innerText;
        currency('https://exchangerate.host/latest')
    })
})

rightbtn.forEach(element=>{
    element.addEventListener('click',(event)=>{
        deleteRight();
        event.classList.add('isActive')
        rightActive=event.innerText;
        currency('https://exchangerate.host/latest')
    })
})