// 1. The Data Base (20 Fruits + 10 Mini-Mart Essentials)
const inventory = [
    {name: "Apple", price: 50, category: "Fruit"},
    {name: "banana", price: 30, category: "Fruit"},
    {name: "Cherry", price: 80, category: "Fruit"},
    {name: "Date", price: 100, category: "Fruit"},
    {name: "Mango", price: 60, category: "Fruit"},
    {name: "Orange", price: 40, category: "Fruit"},
    {name: "Papaya", price: 120, category: "Fruit"},
    {name: "Watermelon", price: 350, category: "Fruit"},
    {name: "Pineapple", price: 150, category: "Fruit"},
    {name: "Avocado", price: 50, category: "Fruit"},
    {name: "Passion Fruit", price: 20, category: "Fruit"},
    {name: "Lemon", price: 15, category: "Fruit"},
    {name: "Lime", price: 10, category: "Fruit"},
    {name: "Grape", price: 200, category: "Fruit"},
    {name: "Strawberry", price: 250, category: "Fruit"},
    {name: "Plum", price: 70, category: "Fruit"},
    {name: "Pear", price: 90, category: "Fruit"},
    {name: "Guava", price: 45, category: "Fruit"},
    {name: "Tangerine", price: 35, category: "Fruit"},
    {name: "Kiwi", price: 110, category: "Fruit"},
    
    //  Non-Fruit Items 
    {name: "Milk", price: 70, category: "Dairy"},
    {name: "Bread", price: 65, category: "Bakery"},
    {name: "Egg", price: 15, category: "Poultry"},
    {name: "Sukuma Wiki", price: 20, category: "Vegetable"},
    {name: "Tomato", price: 10, category: "Vegetable"},
    {name: "Onion", price: 5, category: "Vegetable"},
    {name: "Rice", price: 210, category: "Grain"},
    {name: "Maize Flour", price: 145, category: "Grain"},
    {name: "Sugar", price: 160, category: "Grocery"},
    {name: "Salt", price: 30, category: "Grocery"}
];

// Speaking With Calculate Button
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
    
    let discountMessage = "";

    if(qtyNum > 10){
        total = total * 0.9;
        
        alert("10% Bulk Discount Applied! ✅ You  saved KSh " + (foundPrice * qtyNum * 0.1)
        .toFixed(2) + "!")
    }

const plural = qtyNum > 1 ? "s" : "";

    display.innerText = `Total for ${qtyNum} ${searchFor}${plural}: KSh.${total.toFixed(2)}.`;
    display.style.color = "green";
}
else{
    display.innerText = "Sorry, we don't have that fruit today."
    display.style.color = "red"
}
}

// Speaking with the Clear Button
document.getElementById("clearBtn").onclick = function(){
    // 1.Clear input boxes
    document.getElementById("fruitInput").value = "";
    document.getElementById("qtyInput").value = "";


    // 2.Clear result message
    document.getElementById("receipt").innerText = "";
};