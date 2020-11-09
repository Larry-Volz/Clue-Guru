   
//set # of possible clues
var unusedClues = 3;
var usedClues = 0;
// set minutes
   
    
    
//ASK LENGTH OF GAME (password 1) 
//AND then TIME UNTIL CLUES (password 2) 

function password1(){
    x = parseInt(prompt("password1?"));
    var intYes=0;
    var inRangeYes=0;
    if (Number.isInteger(x)){
            //alert('number is integer');
        var intYes=1;
    }else{
            //alert('is NOT integer');
        password1();
        }
   
    if (x>0 && x <= 60){
            //alert('x is in range');
         inRangeYes = 1;   
        }else{
            //alert('x is NOT in range');
            password1();
        }
    if (intYes && inRangeYes){
            //alert("X PASSES MUSTER!")
            return x;
        }
    }
   
    
//Makes sure password 2 (time until clues allowed) < game time
  function password2(){
    x = parseInt(prompt("password2?"));
    var intYes=0;
    var inRangeYes=0;
    if (Number.isInteger(x)){
            //alert('number is integer');
        var intYes=1;
    }else{
            //alert('is NOT integer');
        password2();
        }
   
    if (x < mins){
            //alert('x is less than');
            //alert(mins);
         inRangeYes = 1;   
        }else{
            //alert('x is NOT in range');
            password2();
        }
    if (intYes && inRangeYes){
            //alert("Y PASSES MUSTER!")
            return x;
        }
    }  
    
        

    
mins = password1(); 
    
var timeToFirstClue = password2();  
    
var giveFirstClue = mins-timeToFirstClue;
 
    
    
    
//COUNTDOWN
// calculate the seconds (don't change this! unless time progresses at a different speed for you...)
var secs = mins * 60;
function countdown() {
	setTimeout('Decrement()',1000);
}
function Decrement() {
	if (document.getElementById) {
		minutes = document.getElementById("minutes");
		seconds = document.getElementById("seconds");
        

        
		// if less than a minute remaining
		if (seconds < 59) {
			seconds.value = secs;
		} else {
			minutes.value = getminutes();
			seconds.value = getseconds();
            /**********************************DUPLICATE THIS!!! ********************************************/
            localStorage.setItem('minutesLogged', minutes.value);
            localStorage.setItem('secondsLogged', seconds.value);
            
            if (seconds.value==0 && minutes.value==0){
                window.location.assign("zombieDeath.html")
            }
		}
		secs--;
		setTimeout('Decrement()',1000);
	}
}
function getminutes() {
	// minutes is seconds divided by 60, rounded down
	mins = Math.floor(secs / 60);
	return mins;
}
function getseconds() {
	// take mins remaining (as seconds) away from total seconds remaining
	return secs-Math.round(mins *60);
}

    
    
    
// HIDE THE PICTURE AND SHOW THE HIDDEN TEXT FOR EACH CLUE
	function showClueHideBomb(clueID, pictureID) {
    document.getElementById(clueID).style.display = "block";
	document.getElementById(pictureID).style.display = "none";
}
	
	function firstClue(clueID, pictureID){
		timeElapsed=getminutes();
        var message='';
        var minsToClue = 1 + timeElapsed - giveFirstClue;
		if(timeElapsed < giveFirstClue && unusedClues>0){
				unusedClues --;
				usedClues++;
			showClueHideBomb(clueID, pictureID)
			//alert('Here is Your clue')
		}else if(timeElapsed < giveFirstClue && unusedClues<=0){
			alert('you are out of clues')
		}else if(timeElapsed >= giveFirstClue){
            message = "you have to wait about "+String(minsToClue)+" more minutes."; 
			alert(message);
		}
}
    
    
    
// FOR THE GAME BOOM!  ADAPT TO OFFER A WIN CODE!
	function checkDisarmCode(fieldId){
		if (document.getElementById(fieldId).value==="4590"){
			alert("BOMB DEFUSED!")
		}else{
			alert("YOU'RE DEAD!!! YOU KILLED US ALL!!!! AAAAAHHHH!!!!")
		}
	}
  
// SET VARIABLES OUTSIDE OF A FUNCTION SO THEY ARE GLOBAL DUH!
  var formID = [];
  var entryFieldNames =["pw0","pw1","pw2","pw3","pw4"];

                for (i=0; i<5; i++){
                    ii=i.toString();
                    x = "biohazardInput"+ii;
                    formID.push(x); 
                
              //scaffolding    alert(formID[i]);
                  
                    }
//declaring array for player's answers 
var answer=[];

var correctAnswers = [42,27,11,15,65];
        
countdown();
      
//   <!-- ################ BIOHAZARD MACHINE CODING ######## -->

 //This is to keep enter from submitting
function noenter() {
        return !(window.event && window.event.keyCode == 13); }

/* VARIABLES FOR BIOHAZARD DEVICE LATER */  




function bioHazard(){

    var counter = 0;
    for (i=0; i<5; i++){

    var x = document.getElementById(formID[i]);
    
    var y = x.elements[0].value;
    answer[i] = y;
        
    //check to see if correct
        if (correctAnswers[i] == answer[i]){
            counter++;
        }

     //   alert(answer[i]);
    //    alert('GAAAAAHH');
   }
    if (counter == 5){
        window.location.assign("winPage.html");
    }else{
        alert('Incorrect programming sequence');
    }
    
}


        
            
// <!-- WORKING DATA ENTRY MODULE USE FOR BOOM!

// Enter Biohazard Reset Code HERE:<br />
//     <form id="winForm">
//     <input type="password" name="secretCode" onkeypress="return noenter()"><br>
// </form> 

// <button onclick="winFunction()">Engage</button>

// <p id="demo"></p>

// <script>

// //This is to keep enter from submitting
// function noenter() {
// return !(window.event && window.event.keyCode == 13); }

// winCode = 12357; //first 5 prime numbers

// function winFunction(){
//     var x= document.getElementById("winForm");
//     var text = x.elements[0].value;
//     var codeEntered = parseInt(text);
//     if (isNaN(codeEntered)){
//         alert('Only numbers allowed');
//         return;
//     }
//     if (codeEntered == 12357){
//         window.location.assign("winPage.html");
//     }else{
//         alert('Incorrect');
//         return;
//     }
//     //document.getElementById("demo").innerHTML = text;
// }

// </script>

// -->