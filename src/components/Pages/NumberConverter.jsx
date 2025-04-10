import React, { useState, useEffect } from 'react';
const NumberConverter = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [decimalNumber, setDecimalNumber] = useState('');
  const [binaryNumber, setBinaryNumber] = useState('');
  const [hexadecimalNumber, setHexadecimalNumber] = useState('');
  const [octalNumber, setOctalNumber] = useState('');
  const [error, setError] = useState('');

  const validateBinaryNumber = (number) => /^[01]+$/.test(number);
  const validateHexadecimalNumber = (number) => /^[0-9A-Fa-f]+$/.test(number);
  const validateOctalNumber = (number) => /^[0-7]+$/.test(number);

  useEffect(() => {
    const convertNumber = () => {
      setError('');
      const trimmedInput = inputNumber.trim();

      if (trimmedInput === '') {
        clearResults();
        return;
      }

      let decimalValue;
      let base = 10;

      if (validateBinaryNumber(trimmedInput)) {
        base = 2;
      } else if (validateHexadecimalNumber(trimmedInput)) {
        base = 16;
      } else if (validateOctalNumber(trimmedInput)) {
        base = 8;
      } else if (!isNaN(Number(trimmedInput))) {
        base = 10;
      } else {
        setError(
          'Please, Enter a Valid Number (Binary: 0/1; Hex: 0-9, A-F; Octal: 0-7; Decimal: 0-9)'
        );
        clearResults();
        return;
      }

      decimalValue = parseInt(trimmedInput, base);

      if (!isNaN(decimalValue)) {
        setDecimalNumber(decimalValue.toString());
        setBinaryNumber(decimalValue.toString(2));
        setHexadecimalNumber(decimalValue.toString(16).toUpperCase());
        setOctalNumber(decimalValue.toString(8));
      } else {
        setError('Conversion Error');
        clearResults();
      }
    };
    convertNumber();
  }, [inputNumber]);

 
  const clearResults = () => {
    setDecimalNumber('');
    setBinaryNumber('');
    setHexadecimalNumber('');
    setOctalNumber('');
  };

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  return (
    <section className="py-6 section">
      <div className="container pb-5 has-text-centered">
        <h1 className="title">Number Converter</h1>
      </div>

      <div className="container pt-5 has-text-centered">
        <div className="columns is-multiline is-centered">
          <div className="column is-10 is-10-desktop">
            {error && <div className="notification is-danger">{error}</div>}

            <div className="p-3 field is-horizontal">
              <div className="field-body">
                <div className="field-label is-normal">
                  <label className="label">Input Number</label>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter Number"
                      value={inputNumber}
                      onChange={handleInputChange}
                    />
                  </p>
                </div>

                <div className="field-label is-normal">
                  <label className="label">Decimal</label>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Decimal Number"
                      value={decimalNumber}
                      readOnly
                    />
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 field is-horizontal">
              <div className="field-body">
                <div className="field-label is-normal">
                  <label className="label">Binary</label>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Binary Number"
                      value={binaryNumber}
                      readOnly
                    />
                  </p>
                </div>

                <div className="field-label is-normal">
                  <label className="label">Hexadecimal</label>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Hexadecimal Number"
                      value={hexadecimalNumber}
                      readOnly
                    />
                  </p>
                </div>

                <div className="field-label is-normal">
                  <label className="label">Octal</label>
                </div>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Octal Number"
                      value={octalNumber}
                      readOnly
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberConverter;