const datorValet = document.getElementById("DatorVal");
const dittVal = document.getElementById("DittVal");
const resultatVal = document.getElementById("Resultatet");
const btnVal = document.querySelectorAll("#valknapp");
const h3 = document.querySelector("#Poäng");
const h33 = document.querySelector("#DatorPoäng");
const h1 = document.createElement('h1')
const button = document.getElementById('guess-btn')
const textinput=document.getElementById('text-input')
const container = document.querySelector('.container')
let DittVal1;     // Jag vet jag har namngett dåligt men allt som slutar på siffran 1 är en let variabel som ändrar värde   const dittval / let DittVal 1
let datorValet1;  //   samma sak här const datorValet / let Dittval 1
let resultat;
let playerscore = 0;    
let datorscore = 0;
let namn = ''                      
                                                                      


button.addEventListener('click', function(event){                    // Nör jag skriver in ett namn i inputer så blir det display = 'block' o startar spelet och det är en form
   if(textinput.value===''){                                         // så preventDefault ska anges för att få funktionen att fungera
    return
   }
  event.preventDefault();
  namn=textinput.value
  container.style.display= 'block'
  h3.innerText= namn


})
//console.log(btnVal);                                                  
btnVal.forEach((btnVal) =>                                            // Använde mig utav foreach men såklart med förståelse att den tar varje item för sig precis som en forloop , fick lite hjälp på nätet
  btnVal.addEventListener("click", (event) => {                       /// Varje gång jag klickar så vill jag att något ska hända
    DittVal1 = event.target.textContent;                              // Min let variabel ska "targeta"/ fånga upp textcontent på de jag klickar
    dittVal.innerHTML = DittVal1;                                     
    const input = document.querySelector('#text-input');
    const guess = input.value;
    input.value = '';
    computer();
    slutresultat();
    
  })
);


console.log(computer)
function computer() {                                           // Min function computer ger varje Nummer en String så exempelvis
  const randomNummer = Math.floor(Math.random() * 3) + 1;       // landar numret på 1 i consolen kommer det loggas som "Sten"                                                             
  console.log(randomNummer);                                                                    

  if (randomNummer === 1) {
    datorValet1 = "Sten";
  }

  if (randomNummer === 2) {
    datorValet1 = "Sax";
  }

  if (randomNummer === 3) {
    datorValet1 = "Påse";
  }
  datorValet.innerHTML = datorValet1;                                        
 
}

//console.log(isWinner)
function slutresultat(event) {                                    // Min function slutresultat är bara if-satser på olika statement på olkia utfall av matchen
  if (isWinner()) {                                               //  Vi ger ett Exempel : vi säger att mittval är påse och datorn randomar sten, så kommer resultatet att logga "Du vann"                                        
    h1.style.visibility='hidden'                                  // och min let variabel = playerscore  kommer ju öka med 1 playerscore++
  }
  if (datorValet1 === DittVal1) {                                 
    resultat = "Det blev lika!";
  }
  if (datorValet1 === "Sten" && DittVal1 === "Påse") {
    resultat = "Du Vann!!";
    playerscore++;
    h3.innerText = namn + ": " + playerscore;

  }
  if (datorValet1 === "Sten" && DittVal1 === "Sax") {
    resultat = "Du Förlora!";
    datorscore++;
    h33.innerText = 'CPU ' + datorscore;
  }
  if (datorValet1 === "Påse" && DittVal1 === "Sten") {
    resultat = "Du Förlora!";
    datorscore++;
    h33.innerText = 'CPU ' + datorscore;
  }
  if (datorValet1 === "Påse" && DittVal1 === "Sax") {
    resultat = "Du Vann!!";
    playerscore++;
    h3.innerText = namn + ": " + playerscore;
  }
  if (datorValet1 === "Sax" && DittVal1 === "Påse") {
    resultat = "Du Förlora!";
    datorscore++;
    h33.innerText = 'CPU ' + datorscore;
  }
  if (datorValet1 === "Sax" && DittVal1 === "Sten") {
    resultat = "Du Vann";
    playerscore++;
    h3.innerText = namn + ": " + playerscore;
  }
  
  if (isWinner()) {                                                                         // Min isWinner function som är under men här förklarar jag också så för de kanske finns lite
    document.body.append(h1);                                                              // undran här om Player eller Datorn kommer först till 3 så kommer ett h1 text att läggas till som vinnare
    h1.innerText = "" + ((playerscore > datorscore) ? "Spelare" : "Dator") + " är vinnare!"; // Och ja Clara jag lärde mig faktiskt att ? "spelare" : "Dator" är ett litet finare sätt
    playerscore=0;                                                                           // att skriva en ifsats på som jag lärde mig så du inte tror jag bara har fått det utan vetskap XD!!!
    datorscore=0;  
    const spelaOm = document.querySelector('#spelaOm') 
    spelaOm.style.display= 'block'                                                           
    spelaOm.addEventListener('click', () => {                                                 
      location.reload()
    } )                                                                     
    /*const spelaOm = document.createElement('button')
    document.body.append(spelaOm)                                                             // appenda en knapp med börja om som reloda pagen vilket inte var så bra
    spelaOm.innerText ='Börja om'                                                            // så jag kommentera ut det och la en knapp i html som jag sedan la i denna ifsatsen.
    spelaOm.addEventListener('click', () => {
      location.reload()
    })*/
  
}
  resultatVal.innerHTML = resultat;
}

function isWinner() {
  if (playerscore >= 3 || datorscore >=3) {
      return true;
  }
  return false;
}
