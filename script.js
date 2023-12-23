const Yrock = document.querySelector("#rock")
const Ypaper = document.querySelector("#paper")
const Yscissor = document.querySelector("#scissor")
const Ctern = document.querySelectorAll(".circle")
const newGame = document.querySelector("#newgame")
const reStart = document.querySelector("#reSt")

const msg = document.querySelector(".massage")
let num1 = 0;
let num2 = 0;
let yourNo = document.querySelector(".number1")
let comNo = document.querySelector(".number2")
let cnt = 5;

reStart.addEventListener("click",()=>{
    newGame.classList.add("dis");
    msg.innerText = "Play Your Move";
    msg.classList.add("purple");
    msg.classList.remove("red");
    msg.classList.remove("burlywood");
    msg.classList.remove("green");
    comNo.innerText = `${0}`
    yourNo.innerText = `${0}`
    cnt = 5;
    num1 = 0;
    num2 = 0;
})

newGame.addEventListener("click",()=>{
    newGame.classList.add("dis");
    msg.innerText = "Play Your Move";
    msg.classList.add("purple");
    msg.classList.remove("red");
    msg.classList.remove("burlywood");
    msg.classList.remove("green");
    comNo.innerText = `${0}`
    yourNo.innerText = `${0}`
    cnt = 5;
    num1 = 0;
    num2 = 0;
})

function finalPrint(){
    if(num1 === num2){
        msg.innerText = "Match Drow";
        msg.classList.remove("purple");
        msg.classList.add("burlywood");
        
    }else if(num1 > num2){
        msg.innerText = "Congratulation 🎉🎉, You Win";
        msg.classList.remove("purple");
        msg.classList.add("green");
        
    }else{
        msg.innerText = "You Loss 😢😢, Computer Win";
        msg.classList.remove("purple");
        msg.classList.add("red");
        
    }
    newGame.classList.remove("dis")
}

Yrock.addEventListener("click", () => {
    if (cnt) {
        let ranNo = Math.floor(Math.random() * 3);
        // console.log(ranNo);
        // num1++;
        // comNo.innerText = comNo.nodeValue+1
        // console.log(Ctern[ranNo] );
        if (Ctern[ranNo] === Yrock) {
        }else if(Ctern[ranNo] === Ypaper){
            num2++;
            comNo.innerText = `${num2}`
        }else{
            num1++;
            yourNo.innerText = `${num1}`
        }
        cnt--;
        if(cnt === 0)
        finalPrint();
    }else{
        finalPrint();
    }
})
Ypaper.addEventListener("click", () => {
    if (cnt) {
        let ranNo = Math.floor(Math.random() * 3);
        // console.log(ranNo);
        // num1++;
        // comNo.innerText = comNo.nodeValue+1
        // console.log(Ctern[ranNo] );
        if (Ctern[ranNo] === Ypaper) {
        }else if(Ctern[ranNo] === Yscissor){
            num2++;
            comNo.innerText = `${num2}`
        }else{
            num1++;
            yourNo.innerText = `${num1}`
        }
        cnt--;
        if(cnt === 0)
        finalPrint();
    }else{
        finalPrint();
    }
})
Yscissor.addEventListener("click", () => {
    if (cnt) {
        let ranNo = Math.floor(Math.random() * 3);
        // console.log(ranNo);
        // num1++;
        // comNo.innerText = comNo.nodeValue+1
        // console.log(Ctern[ranNo] );
        if (Ctern[ranNo] === Yscissor) {
        }else if(Ctern[ranNo] === Yrock){
            num2++;
            comNo.innerText = `${num2}`
        }else{
            num1++;
            yourNo.innerText = `${num1}`
        }
        cnt--;
        if(cnt === 0)
        finalPrint();
    }else{
        finalPrint();
    }
})




