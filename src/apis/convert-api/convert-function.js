import fx from "money";

const convertValue = (amountToConverted,fromCurrency,toCurrency,course) => {
    fx.rates = course;
    const convertedAmount = fx.convert(amountToConverted,{from:fromCurrency,to:toCurrency});
    return parseFloat(convertedAmount.toFixed(2))
}

export default convertValue;