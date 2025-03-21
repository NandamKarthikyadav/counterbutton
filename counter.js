let count = 0;
function newcounter() {
    document.getElementById(`counter`).innerText=count;
   
}



function add(){
    count++;
    newcounter();
}

function sub() {
   if(count>0){
    count--;
    newcounter();
   }
  
}

