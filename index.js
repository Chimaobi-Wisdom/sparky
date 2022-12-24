
const txt1 = document.getElementById("text1");
const btn1 = document.getElementById("btn1");
const para = document.getElementById("para");

function myFunc(){
    para.innerHTML = txt1.value;
}

btn1.addEventListener('click',myFunc);