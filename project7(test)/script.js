document.getElementById("btn").addEventListener("click", getData);


async function getData() {
    let base = document.getElementById("cur").value;
    try{
        let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
           
        let data = await response.json();
        document.getElementById("output").innerText = data.rates.USD, INR, EUR, GBP, JPY, AUD;
    }
    catch(error){
        console.log(error);
    }
    
}

