let count = 0;
function newcounter() {
    document.getElementById(`counter`).innerText=count;

}

function add(){
    count++;
    newcounter();
}

function sub() {
    count--;
    newcounter();
}