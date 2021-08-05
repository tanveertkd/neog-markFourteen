const stockPrices = document.querySelectorAll("#input-price");
const btnInput = document.querySelector("#input-btn");

const checkProfitLoss = () => {
    console.log("bought "+stockPrices[0].value+" current "+stockPrices[1].value+" Quantity "+stockPrices[2].value);

    const stockBoughtPrice = stockPrices[0].value;
    const stockCurrentPrice = stockPrices[1].value;
    const stockQuantity = stockPrices[2].value;

    const valid = inputValidator(stockBoughtPrice, stockCurrentPrice, stockQuantity);

    if(valid){
        if(stockBoughtPrice<stockCurrentPrice){
            console.log("Profit")
        } else {
            console.log("Loss")
        }
    }else{
        console.log("Invalid input");
    }
}

const inputValidator = (bought, current, qty) => {
    if(bought<1 || current<1 || qty <1){
        return false;
    } else {
        return true;
    }
}

btnInput.addEventListener("click", checkProfitLoss);