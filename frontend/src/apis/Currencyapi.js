const API_KEY = 'e3b7f6179b69f6c206614216';

export const CurrencyConversion = async (fromCurrency, toCurrency, amount) => {
    const response = await fetch(`https://api.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`);
    const data = await response.json();
    
    if (data.result === "success") {
        return data.conversion_result;
    } else {
        throw new Error('Something up with the backend!');
    }
}

export const getCurrencyCodes = async () => {
    const response = await fetch(`https://api.exchangerate-api.com/v6/${API_KEY}/codes`);
    const data = await response.json();

    if (data.result === "success") {
        return data.supported_codes.map(([code, name]) => ({ code, name }));
    } else {
        throw new Error('Failed to fetch currency codes');
    }
}