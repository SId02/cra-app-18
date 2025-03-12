import  { useState } from 'react';
import './GradientColorGenerator.css'; 

const GradientColorGenerator = () => {
  const [color1, setColor1] = useState('#0000ff');
  const [color2, setColor2] = useState('#ff0000');
  const [gradientColor, setGradientColor] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const generateGradientColor = () => {
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    setGradientColor(gradient);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(gradientColor);
      setSuccess('Gradient color copied to clipboard!');
      setError(null);
    } catch (err) {
      setError('Failed to copy gradient color to clipboard!');
      setSuccess(null);
    }
  };

  return (
    <div className="gradient-container">
      <h1 className="gradient-title">Gradient Color Generator</h1>
      {error && <div className="gradient-notification gradient-is-danger">{error}</div>}
      {success && <div className="gradient-notification gradient-is-success">{success}</div>}

      <div className="gradient-color-inputs">
        <div className="gradient-input-group">
          <label htmlFor="color1" className="gradient-label">
            Color 1:
          </label>
          <input
            type="color"
            id="color1"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            className="gradient-input"
          />
        </div>

        <div className="gradient-input-group">
          <label htmlFor="color2" className="gradient-label">
            Color 2:
          </label>
          <input
            type="color"
            id="color2"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            className="gradient-input"
          />
        </div>
      </div>

      <div className="gradient-buttons">
        <button className="gradient-button gradient-is-primary" onClick={generateGradientColor}>
          Generate Gradient Color
        </button>
        <button className="gradient-button gradient-is-link" onClick={copyToClipboard}>
          Copy to Clipboard
        </button>
      </div>

      <p className="gradient-result">
        Gradient Color:
        <span className="gradient-color-preview" style={{ backgroundColor: gradientColor }}>
          {gradientColor}
        </span>
      </p>
    </div>
  );
};

export default GradientColorGenerator;