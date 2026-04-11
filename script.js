// 1: Expanded Inventory Database (100 items)
const inventory = [
    // FRUITS (20)
    {name: "Apple", price: 50, category: "Fruit"}, {name: "Banana", price: 30, category: "Fruit"},
    {name: "Cherry", price: 80, category: "Fruit"}, {name: "Date", price: 100, category: "Fruit"},
    {name: "Mango", price: 60, category: "Fruit"}, {name: "Orange", price: 40, category: "Fruit"},
    {name: "Papaya", price: 120, category: "Fruit"}, {name: "Watermelon", price: 350, category: "Fruit"},
    {name: "Pineapple", price: 150, category: "Fruit"}, {name: "Avocado", price: 50, category: "Fruit"},
    {name: "Passion Fruit", price: 20, category: "Fruit"}, {name: "Lemon", price: 15, category: "Fruit"},
    {name: "Lime", price: 10, category: "Fruit"}, {name: "Grape", price: 200, category: "Fruit"},
    {name: "Strawberry", price: 250, category: "Fruit"}, {name: "Plum", price: 70, category: "Fruit"},
    {name: "Pear", price: 90, category: "Fruit"}, {name: "Guava", price: 45, category: "Fruit"},
    {name: "Tangerine", price: 35, category: "Fruit"}, {name: "Kiwi", price: 110, category: "Fruit"},

    // VEGETABLES (20)
    {name: "Sukuma Wiki", price: 20, category: "Vegetable"}, {name: "Tomato", price: 15, category: "Vegetable"},
    {name: "Onion", price: 10, category: "Vegetable"}, {name: "Cabbage", price: 50, category: "Vegetable"},
    {name: "Spinach", price: 25, category: "Vegetable"}, {name: "Carrot", price: 10, category: "Vegetable"},
    {name: "Potato", price: 40, category: "Vegetable"}, {name: "Capsicum", price: 30, category: "Vegetable"},
    {name: "Cucumber", price: 35, category: "Vegetable"}, {name: "Ginger", price: 150, category: "Vegetable"},
    {name: "Garlic", price: 200, category: "Vegetable"}, {name: "Broccoli", price: 180, category: "Vegetable"},
    {name: "Cauliflower", price: 120, category: "Vegetable"}, {name: "Eggplant", price: 45, category: "Vegetable"},
    {name: "Pumpkin", price: 150, category: "Vegetable"}, {name: "Beetroot", price: 60, category: "Vegetable"},
    {name: "Zucchini", price: 80, category: "Vegetable"}, {name: "Celery", price: 90, category: "Vegetable"},
    {name: "Green Beans", price: 70, category: "Vegetable"}, {name: "Peas", price: 130, category: "Vegetable"},

    // DAIRY (20)
    {name: "Fresh Milk", price: 70, category: "Dairy"}, {name: "Yogurt", price: 120, category: "Dairy"},
    {name: "Cheese", price: 450, category: "Dairy"}, {name: "Butter", price: 300, category: "Dairy"},
    {name: "Margarine", price: 180, category: "Dairy"}, {name: "Heavy Cream", price: 250, category: "Dairy"},
    {name: "Mala", price: 110, category: "Dairy"}, {name: "Condensed Milk", price: 220, category: "Dairy"},
    {name: "Ghee", price: 600, category: "Dairy"}, {name: "Powdered Milk", price: 800, category: "Dairy"},
    {name: "Sour Cream", price: 150, category: "Dairy"}, {name: "Mozzarella", price: 550, category: "Dairy"},
    {name: "Cheddar", price: 500, category: "Dairy"}, {name: "Paneer", price: 400, category: "Dairy"},
    {name: "Cottage Cheese", price: 350, category: "Dairy"}, {name: "Ice Cream", price: 600, category: "Dairy"},
    {name: "Whipping Cream", price: 280, category: "Dairy"}, {name: "Skimmed Milk", price: 85, category: "Dairy"},
    {name: "Soy Milk", price: 160, category: "Dairy"}, {name: "Almond Milk", price: 450, category: "Dairy"},

    // GRAINS (20)
    {name: "Rice", price: 210, category: "Grain"}, {name: "Maize Flour", price: 145, category: "Grain"},
    {name: "Wheat Flour", price: 170, category: "Grain"}, {name: "Oats", price: 250, category: "Grain"},
    {name: "Millet", price: 180, category: "Grain"}, {name: "Sorghum", price: 160, category: "Grain"},
    {name: "Barley", price: 220, category: "Grain"}, {name: "Quinoa", price: 1200, category: "Grain"},
    {name: "Pasta", price: 110, category: "Grain"}, {name: "Spaghetti", price: 100, category: "Grain"},
    {name: "Macaroni", price: 95, category: "Grain"}, {name: "Brown Rice", price: 350, category: "Grain"},
    {name: "Couscous", price: 400, category: "Grain"}, {name: "Cornmeal", price: 80, category: "Grain"},
    {name: "Breadcrumbs", price: 150, category: "Grain"}, {name: "Popcorn", price: 200, category: "Grain"},
    {name: "Noodles", price: 60, category: "Grain"}, {name: "Lentils", price: 240, category: "Grain"},
    {name: "Green Grams", price: 220, category: "Grain"}, {name: "Kidney Beans", price: 180, category: "Grain"},

    // GROCERY (20)
    {name: "Sugar", price: 160, category: "Grocery"}, {name: "Salt", price: 30, category: "Grocery"},
    {name: "Cooking Oil", price: 350, category: "Grocery"}, {name: "Tea Leaves", price: 120, category: "Grocery"},
    {name: "Coffee", price: 500, category: "Grocery"}, {name: "Honey", price: 400, category: "Grocery"},
    {name: "Tomato Sauce", price: 150, category: "Grocery"}, {name: "Jam", price: 250, category: "Grocery"},
    {name: "Peanut Butter", price: 350, category: "Grocery"}, {name: "Baking Powder", price: 60, category: "Grocery"},
    {name: "Yeast", price: 40, category: "Grocery"}, {name: "Vinegar", price: 100, category: "Grocery"},
    {name: "Soy Sauce", price: 280, category: "Grocery"}, {name: "Mayonnaise", price: 450, category: "Grocery"},
    {name: "Mustard", price: 200, category: "Grocery"}, {name: "Black Pepper", price: 150, category: "Grocery"},
    {name: "Curry Powder", price: 80, category: "Grocery"}, {name: "Cinnamon", price: 120, category: "Grocery"},
    {name: "Biscuits", price: 50, category: "Grocery"}, {name: "Chocolate", price: 200, category: "Grocery"}
];

const select = document.getElementById("productSelect");

// 2: Logic for Filtering and Populating the Dropdown
function populateDropdown(filterCategory) {
    select.innerHTML = '<option value="" disabled selected>Choose a product...</option>';

    const filteredItems = inventory.filter(item => {
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

// 3: Category Filter Event Listeners
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = function() {
        const category = this.getAttribute("data-category");
        populateDropdown(category);
        
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    };
});

// Initialize the app with all items
populateDropdown("All");

// 4: Calculation and Discount Logic
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
        alert("Please select an item and a valid quantity.");
    }
};

// 5: UI Reset State
document.getElementById("clearBtn").onclick = function() {
    select.value = "";
    document.getElementById("qtyInput").value = "";
    document.getElementById("receiptBox").classList.add("hidden");
};