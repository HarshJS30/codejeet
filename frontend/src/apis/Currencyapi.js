export const CurrencyConversion = async (fromCurrency, toCurrency, amount) => {
    const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
    const data = await response.json();
    
    if (data.rates) {
        return data.rates[toCurrency];
    } else {
        throw new Error('Something up with the backend!');
    }
}

export const getCurrencyCodes = async () => {
    const response = await fetch('https://api.frankfurter.app/currencies');
    const data = await response.json();

    if (data) {
        // Convert object to array of {code, name} objects
        return Object.entries(data).map(([code, name]) => ({ code, name }));
    } else {
        throw new Error('Failed to fetch currency codes');
    }
}