// STEP 1: Inventory Database
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

const select = document.getElementById("productSelect");

// STEP 2: Function to Filter Inventory and Refill Dropdown
function populateDropdown(filterCategory) {
    // Clear the dropdown and add the default message
    select.innerHTML = '<option value="" disabled selected>Choose a product...</option>';

    const filteredItems = inventory.filter(item => {
        // Compare lowercase to lowercase to prevent typos from breaking the filter
        return filterCategory.toLowerCase() === "all" || 
               item.category.toLowerCase() === filterCategory.toLowerCase();
    });

    filteredItems.forEach(item => {
        let option = document.createElement("option");
        option.text = item.name;
        option.value = item.name;
        select.add(option);
    });
}

// STEP 3: Setup Click Listeners for All Filter Buttons
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = function() {
        const category = this.getAttribute("data-category");
        
        // Populate the dropdown based on the button's data-category attribute
        populateDropdown(category);

        // UI: Move the 'active' styling to the clicked button
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    };
});

// STEP 4: Price Calculation Logic
document.getElementById("calcBtn").onclick = function() {
    const productName = select.value;
    const quantity = document.getElementById("qtyInput").value;
    const receiptBox = document.getElementById("receiptBox");
    const receiptDisplay = document.getElementById("receipt");

    const product = inventory.find(item => item.name === productName);

    if (product && quantity > 0) {
        const qtyNum = Number(quantity);
        let total = product.price * qtyNum;
        
        if (qtyNum > 10) {
            total *= 0.9;
            alert(`10% Bulk Discount Applied!`);
        }

        receiptDisplay.innerText = `Total for ${qtyNum} ${productName}: KSh ${total.toFixed(2)}`;
        receiptBox.classList.remove("hidden");
    } else {
        alert("Please select an item and a quantity greater than 0.");
    }
};

// STEP 5: Reset UI
document.getElementById("clearBtn").onclick = function() {
    select.value = "";
    document.getElementById("qtyInput").value = "";
    document.getElementById("receiptBox").classList.add("hidden");
};

// Final Initialization
populateDropdown("All");