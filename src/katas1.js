  /* Your code goes below
   Write a for or a while loop
   return the result */
//call function oneThroughTwenty

function oneThroughTwenty() {
   let meuRetorno = [];
   
  for(let ate20 = 1;ate20 <= 20;ate20 = ate20 + 1) {
    meuRetorno.push(ate20);

  }
  return meuRetorno;

}
 console.log(oneThroughTwenty());

 let ContarApartirDe = 1;
 oneThroughTwenty(ContarApartirDe);
  

  function evensToTwenty() {
    let meuRetorno2 = []

   for(let ParesAte20 = 2;ParesAte20 <= 20;ParesAte20+=2) {
      meuRetorno2.push(ParesAte20)      
    }
    return meuRetorno2;
  }  
   console.log(evensToTwenty());
   let ParesAte20 = 2; 
   evensToTwenty(ParesAte20);


function oddsToTwenty() {
    let meuRetorno3 = []
  
  for(let ImparesAte20 = 1;ImparesAte20 <= 20;ImparesAte20+=2) {
    meuRetorno3.push(ImparesAte20)
  }
  return meuRetorno3
}
 console.log(oddsToTwenty());
 let ImparesAte20 = 1;
 oddsToTwenty(ImparesAte20);


 function multiplesOfFive() {
 let meuRetorno4 = []
   for(let multiplus = 5;multiplus <= 100;multiplus+=5){
    meuRetorno4.push(multiplus)
  }
   return meuRetorno4
}
 let multiplus = 5;
 console.log(multiplesOfFive());


function squareNumbers() {
      //definitivamente não sei fazer isso
}

function countingBackwards() {  

let meuRetorno6 = [];
   
  for(let paraTras = 20;paraTras >= 1;paraTras = paraTras - 1) {
    meuRetorno6.push(paraTras);

  }
  return meuRetorno6;

}
 let paraTras = 20
 console.log(countingBackwards());

function evenNumbersBackwards() {
  let meuRetorno7 = []

  for(let paraTrasPares = 20;paraTrasPares >= 2;paraTrasPares-=2) {
     meuRetorno7.push(paraTrasPares)      
   }
   return meuRetorno7;
 }  
  console.log(evenNumbersBackwards());
  let paraTrasPares = 20; 

function oddNumbersBackwards() {
    
  let meuRetorno8 = []
  
  for(let paraTrasImpar = 19;paraTrasImpar >= 1;paraTrasImpar-=2) {
    meuRetorno8.push(paraTrasImpar)
  }
  return meuRetorno8
}
 console.log(oddNumbersBackwards());
 let paraTrasImpar = 19;
 



function multiplesOfFiveBackwards() {
  let meuRetorno9 = []

  for(let MultiplosParaTras = 100 ;MultiplosParaTras >= 5;MultiplosParaTras-=5){
   meuRetorno9.push(MultiplosParaTras)
 }
  return meuRetorno9
}
let Multiplus = 100;
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function squareNumbersBackwards
