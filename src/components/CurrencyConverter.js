function CurrencyConverter() {
  // `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

  return (
    <div>
      <input type="text" />

      <select>
        <option value="USD">USD</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
      </select>
      <p>Output</p>
    </div>
  );
}

export default CurrencyConverter;
