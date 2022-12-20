// let data = [1, 2, 3];

// console.log(data);

// let object = { name: "Fuad", surname: "Suleymanli" };

// console.log(object)

// function Telebe(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;

// }

// Telebe.prototype.hesabla = function () {
//   return 2022 - this.age;
// };

// var aygul = { name: "Aygul", surname: "Abbaszade", age: 24 };
// var benovshe = new Telebe("Benovhe", "Meherremova", 19);
// var kenan = new Telebe("Kenan", "Hesenzade", 23);

// console.log(aygul);
// console.log(benovshe);
// console.log(kenan.hesabla);



var questionText = document.querySelector(".question_text")
var answers = document.querySelector(".q")
var answer1 = document.querySelector(".q1")
var answer2 = document.querySelector(".q2")
var answer3 = document.querySelector(".q3")
var answer4 = document.querySelector(".q4")
var body = document.querySelector("body")

var container = document.querySelector(".container")

function BoxInto(text, questions, trueVariant) {
    this.questions = questions;
    this.text = text;
    this.trueVariant = trueVariant;

}

var boxInto1 = new BoxInto(" Azərbaycan dilində neche herf var?", [32, 34, 28, 26], 32)
var boxInto2 = new BoxInto("Hansi fizikdir", ["Rene Magritte", "Enriko Fremi", "Baruch Spinoza", "Luka Modrić"], "Enriko Fremi")
var boxInto3 = new BoxInto("Hansinin yazilisi duzgundur", ["Dovshan", "Dofshan", "Doshan", "Doyshan"], "Dovshan")

var quizlist = [boxInto1, boxInto2, boxInto3]
var sualSiraNomresi = 0;

function suallariGoster() {

    container.innerHTML = `
    <div class="question_text">${quizlist[sualSiraNomresi].text}</div> 
    <div class="q_all">
     <div class="q_duble">
    <span   class="q q1">${quizlist[sualSiraNomresi].questions[0]}</span>
    <span   class="q q2">${quizlist[sualSiraNomresi].questions[1]}</span>
     </div>
     <div class="q_duble">
    <span   class="q q3">${quizlist[sualSiraNomresi].questions[2]}</span>
    <span    class="q q4">${quizlist[sualSiraNomresi].questions[3]}</span>
 
     </div>
     <div class="control">
     <button onclick="novbetiSual()">Novbeti</button>
     </div>
    </div>
    `
}


suallariGoster()
let allow = true;

function novbetiSual() {
    sualSiraNomresi += 1;
    suallariGoster()
    showQuestion()
    allow = true;
}
const showQuestion = () => {
    var cavablar = document.getElementsByTagName("span")
    for (let i = 0; i < cavablar.length; i++) {

        cavablar[i].addEventListener("click", (e) => {

            if (!allow) return
            if (e.target.innerHTML == quizlist[sualSiraNomresi].trueVariant) {
                cavablar[i].style.backgroundColor = "green"
            } else {
                cavablar[i].style.backgroundColor = "red"
            }
            allow = false;

        })

    }
}
showQuestion()



// function klik(){
//     if(this.trueVariant == 32){
//      body.style.backgroundColor = "green"
//      }
//         else{
//              body.style.backgroundColor = "red"
//              }
// }




// answers.addEventListener("click",()=>{
// if(this.trueVariant == 32){
//     body.style.backgroundColor = "green"
// }
// else{
//      body.style.backgroundColor = "red"
//      }
// })



// answers.addEventListener("click",()=>{
// var newArray = quizlist[sualSiraNomresi].questions.map((e)=>{
//     if(e== 32){
//         body.style.backgroundColor = "green"
//     }else{
//         body.style.backgroundColor = "red"
//     }
// })
// })



















