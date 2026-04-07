// The Data Base
const inventory = ["Apple", "Banana", "Cherry", "Date"];
const prices = [50, 30, 80, 100];


// Speaking With HTML
document.getElementById("calcBtn").onclick = function(){
    const searchFor = document.getElementById("fruitInput").value;
    const quantity = document.getElementById("qtyInput").value;
    const display = document.getElementById("receipt");


let foundPrice = 0;
let itemFound = false;

//The loop
for(let i = 0;i < inventory.length;i++){
    if(inventory[i].toLowerCase() === searchFor.toLowerCase()){
        foundPrice = prices[i];
        itemFound = true;
        break;
}
}

//The Output
if(itemFound){
    const qtyNum = Number(quantity)
    let total = foundPrice * qtyNum;
    
    if(qtyNum > 10){
        total = total * 0.9;
    }

    display.innerText = `Total for ${qtyNum} ${searchFor}(s): KSh.${total}.`;
    display.style.color = "green";
}
else{
    display.innerText = "Sorry, we don't have that fruit today."
    display.style.color = "red"
}
}