// parseInt(innerText)
function textToInt(id) {
    const textField = document.getElementById(id);
    const number = parseInt(textField.innerText);
    return number;
}

// computes gross total based on options selected
function computeGrossTotal() {
    const memoryCost = textToInt("memory-cost")
    const storageCost = textToInt("storage-cost")
    const deliveryCost = textToInt("delivery-cost")

    const grossTotal = 1299 + memoryCost + storageCost + deliveryCost;

    const grossTotalField = document.getElementById("gross-total");
    grossTotalField.innerText = grossTotal;
    const netTotalField = document.getElementById("net-total");
    netTotalField.innerText = grossTotal;
    return grossTotal;
}

// update sub cost for each option selected
function updateSubCost(id, amount) {
    const field = document.getElementById(id);
    field.innerText = amount;
    computeGrossTotal();
}

// 20% discount on mathced promocode
function checkPromoCode(promoCode) {
    const netTotalField = document.getElementById("net-total");
    let grossTotal = computeGrossTotal();
    let netTotal;
    if (promoCode.toLowerCase() == 'stevekaku') {
        netTotal = grossTotal - ((20 * grossTotal) / 100);
    } else {
        netTotal = grossTotal;
    }

    netTotalField.innerText = netTotal;
}

// specification option buttons
document.getElementById("mem-8GB").addEventListener("click", function () {
    updateSubCost("memory-cost", 0)
});
document.getElementById("mem-16GB").addEventListener("click", function () {
    updateSubCost("memory-cost", 180)
});
document.getElementById("storage-opt-1").addEventListener("click", function () {
    updateSubCost("storage-cost", 0)
});
document.getElementById("storage-opt-2").addEventListener("click", function () {
    updateSubCost("storage-cost", 100)
});
document.getElementById("storage-opt-3").addEventListener("click", function () {
    updateSubCost("storage-cost", 180)
});
document.getElementById("del-opt-1").addEventListener("click", function () {
    updateSubCost("delivery-cost", 0)
});
document.getElementById("del-opt-2").addEventListener("click", function () {
    updateSubCost("delivery-cost", 20)
});


// promo code  button
document.getElementById("promo-submit-btn").addEventListener("click", function () {
    const promoField = document.getElementById("promo-input");
    checkPromoCode(promoField.value);
    promoField.value = '';
});