const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const biscuit1 = document.querySelector("#biscuit-1")
const btnRetry = document.querySelector("#btnRetry")

biscuit1.addEventListener('click', luckGerator)
btnRetry.addEventListener('click', toggleScreen)


function luckGerator() {
    let luck = [];
    luck[0] = "A vida trará coisas boas se tiveres paciência.";
    luck[1] = "Não compense na ira o que lhe falta de razão.";
    luck[2] = "Defeitos e virtudes são apenas dois lados da mesma moeda.";
    luck[3] = "A maior de todas as torres começa no solo.";
    luck[4] = "Não há que ser forte. Há que ser flexível.";
    luck[5] = "Há três coisas que jamais voltam: a flecha lançada, a palavra dita e a oportunidade perdida.";
    luck[6] = "A juventude não é uma época da vida, é um estado de espírito.";
    
    let i = Math.floor(7 * Math.random()); 
    screen2.querySelector("p").innerText = `${luck[i]};`
    toggleScreen()
}

function toggleScreen(){
    console.log("SOCORRO")
    screen1.classList.toggle("hide")  
    screen2.classList.toggle("hide")  
}
