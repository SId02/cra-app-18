import  { useState } from 'react';

const BinaryToDecimalConverter = () => {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [decimalNumber, setDecimalNumber] = useState('');
  const [error, setError] = useState('');

  const validateBinaryNumber = (number) => {
    return /^[01]+$/.test(number);
  };

  const handleConvert = () => {
    
    setError('');

    if (binaryNumber.trim() === '') {
      setError('Please, Enter a Binary Number (e.g., 101)');
      return;
    }

    if (!validateBinaryNumber(binaryNumber)) {
      setError('Please, Enter a Valid Binary Number (only 0 and 1)');
      return;
    }

    try {
      const decimal = parseInt(binaryNumber, 2);
      setDecimalNumber(decimal.toString());
    } catch (err) {
      setError('Conversion Error');
    }
  };

  return (
    <section className="py-6 section">
      <div className="container pb-5 has-text-centered">
        <h1 className="title">Binary to Decimal Converter</h1>
      </div>
      
      <div className="container pt-5 has-text-centered">
        <div className="columns is-multiline is-centered">
          <div className="column is-10 is-10-desktop">
            {error && (
              <div className="notification is-danger">
                {error}
              </div>
            )}
            
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
                      placeholder="Enter Binary Number (e.g., 101)"
                      value={binaryNumber}
                      onChange={(e) => setBinaryNumber(e.target.value)}
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

            <div className="p-6 field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <button 
                      className="button is-primary" 
                      onClick={handleConvert}
                    >
                      CONVERT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BinaryToDecimalConverter;