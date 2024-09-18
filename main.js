// console.log("Dokument je uspesno povezan sa HTML stranicom");
var turn=0;
// On load change localStorage
window.onload= ()=>{
    
   checkIfResExist();
}

// Function to check if localStorage is already set
function checkIfResExist(){
    if(localStorage.getItem("rez".length===2)){
            // document.getElementById("pl_1_rez").innerHTML= `Player 1: ${JSON.parse(localStorage.getItem("rez"))[0]}`;
            // document.getElementById("pl_2_rez").innerHTML= `Player 2: ${JSON.parse(localStorage.getItem("rez"))[1]}`;
            showScore()
    }else{
        localStorage.setItem("rez",JSON.stringify([0,0]));
        // document.getElementById("pl_1_rez").innerHTML= `Player X: ${JSON.parse(localStorage.getItem("rez"))[0]}`;
        // document.getElementById("pl_2_rez").innerHTML= `Player O: ${JSON.parse(localStorage.getItem("rez"))[1]}`;
        showScore();

    }
    return;
}
// END

// Clear table (restore blank photo) and make all elements clickable
function clearTable(){
    document.getElementById('m1').src="./img/blank.png";
    document.getElementById('m1').style.pointerEvents = "auto";
    document.getElementById('m2').src="./img/blank.png";
    document.getElementById('m2').style.pointerEvents = "auto";
    document.getElementById('m3').src="./img/blank.png";
    document.getElementById('m3').style.pointerEvents = "auto";
    document.getElementById('m4').src="./img/blank.png";
    document.getElementById('m4').style.pointerEvents = "auto";
    document.getElementById('m5').src="./img/blank.png";
    document.getElementById('m5').style.pointerEvents = "auto";
    document.getElementById('m6').src="./img/blank.png";
    document.getElementById('m6').style.pointerEvents = "auto";
    document.getElementById('m7').src="./img/blank.png";
    document.getElementById('m7').style.pointerEvents = "auto";
    document.getElementById('m8').src="./img/blank.png";
    document.getElementById('m8').style.pointerEvents = "auto";
    document.getElementById('m9').src="./img/blank.png";
    document.getElementById('m9').style.pointerEvents = "auto";
}

// Setting event listeners for m1-m9 elements
    document.getElementById("m1").addEventListener("click",()=>{toglOnClick("m1")});
    document.getElementById("m2").addEventListener("click",()=>{toglOnClick("m2")});
    document.getElementById("m3").addEventListener("click",()=>{toglOnClick("m3")});
    document.getElementById("m4").addEventListener("click",()=>{toglOnClick("m4")});
    document.getElementById("m5").addEventListener("click",()=>{toglOnClick("m5")});
    document.getElementById("m6").addEventListener("click",()=>{toglOnClick("m6")});
    document.getElementById("m7").addEventListener("click",()=>{toglOnClick("m7")});
    document.getElementById("m8").addEventListener("click",()=>{toglOnClick("m8")});
    document.getElementById("m9").addEventListener("click",()=>{toglOnClick("m9")});
    
// New game set Event Listener
    document.getElementById("header_btn_ng").addEventListener("click",clearTable);
 // Reset result to 0,0
    document.getElementById("header_btn_cr").addEventListener("click",resetResult);


function toglOnClick(p){
  
       if(turn===0){
     document.getElementById(`${p}`).src="./img/x.png";
     document.getElementById(`${p}`).style.pointerEvents="none";
        turn=1;
        
       }else{
        document.getElementById(`${p}`).src="./img/o.png";
        document.getElementById(`${p}`).style.pointerEvents="none";
        turn=0;
        
       }
       checkWin();
       return;
}

function checkWin(){
    let m1 = document.getElementById("m1").src.slice(-5)[0];
    let m2 = document.getElementById("m2").src.slice(-5)[0];
    let m3 = document.getElementById("m3").src.slice(-5)[0];
    let m4 = document.getElementById("m4").src.slice(-5)[0];
    let m5 = document.getElementById("m5").src.slice(-5)[0];
    let m6 = document.getElementById("m6").src.slice(-5)[0];
    let m7 = document.getElementById("m7").src.slice(-5)[0];
    let m8 = document.getElementById("m8").src.slice(-5)[0];
    let m9 = document.getElementById("m9").src.slice(-5)[0];

    // console.log([m1,m2,m3,m4,m5,m6,m7,m8,m9])

   if(m1==m2 && m2==m3){  if(m1==='x'){ alert("Player X wins"); addScore(1); LockBoard();}else if(m1==='o'){ alert("Player O wins"); addScore(0); LockBoard(); } }
   if(m4==m5 && m5==m6){  if(m4==='x'){ alert("Player X wins"); addScore(1); LockBoard();}else if(m4==='o'){ alert("Player O wins"); addScore(0); LockBoard();} }
   if(m7==m8 && m8==m9){  if(m8==='x'){ alert("Player X wins"); addScore(1); LockBoard();}else if(m8==='o'){ alert("Player O wins"); addScore(0); LockBoard();} }

   if(m1==m4 && m4==m7){  if(m1==='x'){ alert("Player X wins"); addScore(1); LockBoard();}else if(m1==='o'){ alert("Player O wins"); addScore(0); LockBoard();} }
   if(m2==m5 && m5==m8){  if(m2==='x'){ alert("Player X wins"); addScore(1); LockBoard();}else if(m2==='o'){ alert("Player O wins"); addScore(0); LockBoard();} }
   if(m3==m6 && m6==m9){  if(m3==='x'){ alert("Player X wins"); addScore(1); LockBoard();}else if(m3==='o'){ alert("Player O wins"); addScore(0); LockBoard();} }
   
 
   if(m1==m5 && m5==m9){  if(m1==='x'){ alert("Player X wins"); addScore(1); LockBoard();}else if(m1==='o'){ alert("Player O wins"); addScore(0); LockBoard();} }
   if(m3==m5 && m5==m7){  if(m3==='x'){ alert("Player X wins"); addScore(1); LockBoard();}else if(m3==='o'){ alert("Player O wins"); addScore(0); LockBoard();} }

   showScore();
   
}

function resetResult(){
    localStorage.setItem("rez",JSON.stringify([0,0]));
    return;
}

// score is stored as [player O , player X ] rez[0]- player O (similarity o~o)
function addScore(xox){
   let prevScore = JSON.parse(localStorage.getItem("rez"));
   let o = prevScore[0];
   let x = prevScore[1];
   if(xox===1){x++}else if(xox===0){o++}
   localStorage.setItem("rez",JSON.stringify([o,x]));
   console.log(localStorage);
}

// this function main task is to show results on the scoretable
function showScore(){
    document.getElementById("pl_1_rez").innerHTML= `Player X: ${JSON.parse(localStorage.getItem("rez"))[1]}`;
    document.getElementById("pl_2_rez").innerHTML= `Player O: ${JSON.parse(localStorage.getItem("rez"))[0]}`;
}


// function to lock Board in case the game is over
function LockBoard(){
    document.getElementById('m1').style.pointerEvents = "none";
    document.getElementById('m2').style.pointerEvents = "none";
    document.getElementById('m3').style.pointerEvents = "none";
    document.getElementById('m4').style.pointerEvents = "none";
    document.getElementById('m5').style.pointerEvents = "none";
    document.getElementById('m6').style.pointerEvents = "none";
    document.getElementById('m7').style.pointerEvents = "none";
    document.getElementById('m8').style.pointerEvents = "none";
    document.getElementById('m9').style.pointerEvents = "none";
}

// Test function to access localStorage during development
function testWriteLocalStorage(){
    console.log(localStorage);
}




// document.getElementById("m1").addEventListener("click",()=>{document.getElementById("m1").src = "./img/x.png"});
//  document.getElementById("m1").addEventListener("click",(event)=>{ console.log( event.target.id) });

let curr_rez = JSON.parse(localStorage.getItem("rez"));

// console.log(curr_rez);



