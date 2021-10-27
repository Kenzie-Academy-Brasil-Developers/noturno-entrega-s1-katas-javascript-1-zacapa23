//Atividade

function oneThroughTwenty() {
 let meuRetorno = [];
   
for(let ate20 = 1;ate20 <= 20;ate20 = ate20 + 1) {
  meuRetorno.push(ate20);
}
return meuRetorno;
} console.log(oneThroughTwenty());
//---

function evensToTwenty() {
 let meuRetorno2 = []
  
  for(let ParesAte20 = 2;ParesAte20 <= 20;ParesAte20+=2) {
    meuRetorno2.push(ParesAte20)      
}
return meuRetorno2;
} console.log(evensToTwenty());
  //---

function oddsToTwenty() {
 let meuRetorno3 = []
  
  for(let ImparesAte20 = 1;ImparesAte20 <= 20;ImparesAte20+=2) {
   meuRetorno3.push(ImparesAte20)
}
return meuRetorno3
} console.log(oddsToTwenty());
 //--- 

function multiplesOfFive() {
 let meuRetorno4 = []
   
 for(let multiplus = 5;multiplus <= 100;multiplus+=5){
    meuRetorno4.push(multiplus)
}
return meuRetorno4
} console.log(multiplesOfFive());

function squareNumbers() {/*Não sei fazer*/}

function countingBackwards() {  
 let meuRetorno6 = [];

  for(let paraTras = 20;paraTras >= 1;paraTras = paraTras - 1) {
   meuRetorno6.push(paraTras);
}
 return meuRetorno6;
} console.log(countingBackwards());
//--- 

function evenNumbersBackwards() {
 let meuRetorno7 = []

  for(let paraTrasPares = 20;paraTrasPares >= 2;paraTrasPares-=2) {
   meuRetorno7.push(paraTrasPares)      
}
 return meuRetorno7;
} console.log(evenNumbersBackwards());
///---

function oddNumbersBackwards() {
 let meuRetorno8 = []
  
  for(let paraTrasImpar = 19;paraTrasImpar >= 1;paraTrasImpar-=2) {
    meuRetorno8.push(paraTrasImpar)
}
 return meuRetorno8
} console.log(oddNumbersBackwards());
//--- 
 
function multiplesOfFiveBackwards() {
 let meuRetorno9 = []

  for(let MultiplosParaTras = 100 ;MultiplosParaTras >= 5;MultiplosParaTras-=5){
   meuRetorno9.push(MultiplosParaTras)
}
 return meuRetorno9
} console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {/*Não sei fazer*/}