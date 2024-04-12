function calculate() {
    var cost = parseFloat(document.getElementById('cost').value);
    var liters = parseFloat(document.getElementById('liters').value);
    var total = cost * liters;
    var totalElement = document.getElementById('total');
    totalElement.textContent = "$" + total.toFixed(2);
}

calculate()