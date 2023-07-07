import { useEffect, useState } from "react";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [convertedAmt, setConvertedAmt] = useState("");

  useEffect(
    function () {
      async function convert() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${targetCurrency}`
        );

        const data = await res.json();
        setConvertedAmt(data.rates[targetCurrency]);
      }

      if (!amount || targetCurrency === currency) return;
      convert();
    },
    [amount, currency, targetCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{targetCurrency === currency ? amount : convertedAmt}</p>
    </div>
  );
}

export default CurrencyConverter;
