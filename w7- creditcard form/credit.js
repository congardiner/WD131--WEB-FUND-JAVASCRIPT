document.getElementById("cardNumber").addEventListener("input", function () {
    // Automatically format card number with spaces every 4 digits
    this.value = this.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
});

document.getElementById("cvv").addEventListener("focus", function () {
    document.querySelector(".card-container").classList.add("flip");
});

document.getElementById("cvv").addEventListener("blur", function () {
    document.querySelector(".card-container").classList.remove("flip");
});

document.querySelector(".submit-button").addEventListener("click", function (event) {
    event.preventDefault();
    
    const cardNumber = document.getElementById("cardNumber").value.replace(/\s+/g, '');
    const cardHolder = document.getElementById("cardHolder").value;
    const expiryMonth = document.getElementById("expiryMonth").value;
    const expiryYear = document.getElementById("expiryYear").value;
    const cvv = document.getElementById("cvv").value;
    
    // Basic validation for each field
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }
    
    if (!/^[A-Za-z\s]+$/.test(cardHolder)) {
        alert("Please enter a valid name for the card holder.");
        return;
    }

    if (!/^\d{2}$/.test(expiryMonth) || expiryMonth < 1 || expiryMonth > 12) {
        alert("Please enter a valid month (MM).");
        return;
    }
    
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
    if (!/^\d{2}$/.test(expiryYear) || expiryYear < currentYear) {
        alert("Please enter a valid year (YY).");
        return;
    }
    
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("Please enter a valid 3-digit CVV.");
        return;
    }
    
    alert("Payment submitted successfully!");
});
