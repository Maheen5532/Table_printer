function myFunction() {
    let tableNum = document.getElementById("table-num").value;
    let minLen = document.getElementById("minlen").value;
    let maxLen = document.getElementById("maxlen").value;
    let display = document.getElementById("table");

    for(let i = minLen; i <= maxLen; i++){
        table.innerHTML += `${tableNum}  x ${i} = ${tableNum*i} </br>`
    }
}
function reset(){
    let tableNum = document.getElementById("table-num").value = "";
    let minLen = document.getElementById("minlen").value = "";
    let maxLen = document.getElementById("maxlen").value = "";
    let display = document.getElementById("table").innerHTML ="";
}

