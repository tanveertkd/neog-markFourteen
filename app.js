const stockPrices = document.querySelectorAll("#input-price");
const btnInput = document.querySelector("#input-btn");
const popupModal = document.querySelector(".popup-modal");
const popupModalContent = document.querySelector(".popup-modal-content");
const popupModalCloseBtn = document.querySelector(".popup-modal-close-btn");
const popupModalProfit = document.querySelector(".popup-modal-img-profit");
const popupModalLoss = document.querySelector(".popup-modal-img-loss");
const popupModalText = document.querySelector(".popup-modal-text");
const plPopup = document.querySelector(".pl-popup");
const plText = document.querySelector("#pl-text");
const plPopupBtn = document.querySelector("#pl-close-btn");
const primaryBgLight = document.querySelector(".bg-light");
const primaryBgDark = document.querySelector(".bg-dark");
const footer = document.querySelector(".footer");
const heroHeader = document.querySelector(".hero-header");

plPopup.style.display = "none";

const checkProfitLoss = () => {
    // console.log("bought "+stockPrices[0].value+" current "+stockPrices[1].value+" Quantity "+stockPrices[2].value);

    const stockBoughtPrice = stockPrices[0].value;
    const stockCurrentPrice = stockPrices[1].value;
    const stockQuantity = stockPrices[2].value;

    const valid = inputValidator(stockBoughtPrice, stockCurrentPrice, stockQuantity);

    if(valid){
        
        if(Number(stockBoughtPrice)<Number(stockCurrentPrice)){
            //console.log("Profit")
            showProfit(stockBoughtPrice, stockCurrentPrice, stockQuantity);
        } else {
            //console.log("Loss")
            showLoss(stockBoughtPrice, stockCurrentPrice, stockQuantity);
        }
    }else{
        //console.log("Invalid input");
        plPopup.style.display = "block";
        plText.style.padding = "1rem";
    }
}

const inputValidator = (bought, current, qty) => {
    if(bought<1 || current<1 || qty <1){
        return false;
    } else {
        return true;
    }
}

const showProfit = (bought, current, quantity) => {
    popupModal.style.display = "block";
    popupModalProfit.style.display = "block";
    popupModalLoss.style.display = "none";
    
    const totalProfit = (current-bought)*quantity;
    const totalCost = bought*quantity;
    const totalProfitPercent = ((totalProfit/totalCost)*100).toFixed(2);
    
    popupModalText.innerText = "Profits totalling to Rs "+totalProfit+" at "+totalProfitPercent+"%."

}

const showLoss = (bought, current, quantity) => {
    popupModal.style.display = "block";
    popupModalProfit.style.display = "none";
    popupModalLoss.style.display = "block";

    const totalLoss = (bought-current)*quantity;
    const totalCost = bought*quantity;
    const totalLossPercent = ((totalLoss/totalCost)*100).toFixed(2);

    if(totalLossPercent>50){
        darkMode();
    }

    popupModalText.innerText = "Losses totalling to Rs "+totalLoss+" at "+totalLossPercent+"%.";
}

const darkMode = () => {
    primaryBgLight.style.display = "none";
    primaryBgDark.style.display = "flex";
    footer.style.backgroundColor = "#475569";
    document.body.style.backgroundColor = "#F1F5F9";
    heroHeader.classList.add("hero-dark");
    popupModalContent.classList.add("popup-modal-content-dark");
}

btnInput.addEventListener("click", checkProfitLoss);

popupModalCloseBtn.addEventListener("click", () => {
    popupModal.style.display = "none";
});

plPopupBtn.addEventListener("click", () => {
    plPopup.style.display = "none";
});