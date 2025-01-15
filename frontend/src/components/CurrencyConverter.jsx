import { useState, useEffect } from "react";
import { CurrencyConversion, getCurrencyCodes } from "../apis/Currencyapi";
import '../assets/Converter.css'

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [currencyCodes, setCurrencyCodes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyCodes = async () => {
            try {
                const codes = await getCurrencyCodes();
                setCurrencyCodes(codes);
            } catch {
                setError('Sorry, cant fetch codes!');
            }
        };
        fetchCurrencyCodes();
    }, []);

    const handleConversion = async () => {
        if (amount && !isNaN(amount)) {
            setError(null);
            try {
                const result = await CurrencyConversion(fromCurrency, toCurrency, amount);
                setConvertedAmount(result);
            } catch (err) {
                setError('Error! Please try again');
            }
        } else {
            setError("Please enter valid amount!");
        }
    };

    return (
        <div className="hero-content">
            <p className="heading">Currency Converter</p>
            <div className="white-cover">
                <input className="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <select className="fromCurrency"
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}>
                    {currencyCodes.map(({ code, name }) => (
                        <option key={code} value={code}>
                            {code} - {name}
                        </option>
                    ))}
                </select>
                <span>to</span>
                <select className="toCurrency"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}>
                    {currencyCodes.map(({ code, name }) => (
                        <option key={code} value={code}>
                            {code} - {name}
                        </option>
                    ))}
                </select>
            </div>
            <button className="convert" onClick={handleConversion}>Convert</button>
            {convertedAmount && <p className="finalAmount">Converted amount: {convertedAmount}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default CurrencyConverter;
