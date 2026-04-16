document.getElementById("convertBtn").addEventListener("click", convertCurrency);

async function convertCurrency() {
    const amountInput = document.getElementById("amount");
    const statusText = document.getElementById("status");
    
    let amount = amountInput.value;
    
    if (!amount || amount <= 0) {
        statusText.style.color = "#ef4444";
        statusText.innerText = "Please enter a valid amount.";
        return;
    }

    try {
        statusText.style.color = "#94a3b8";
        statusText.innerText = "Converting...";
        
        let response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        let data = await response.json();
        let rate = data.rates.INR;
        
        let result = (amount * rate).toFixed(2);
        
        statusText.style.color = "#10b981"; // Success green
        statusText.innerText = `${amount} USD = ₹${result} INR`;
    } catch(error) {
        console.log(error);
        statusText.style.color = "#ef4444"; // Error red
        statusText.innerText = "Failed to fetch exchange rate.";
    }
}