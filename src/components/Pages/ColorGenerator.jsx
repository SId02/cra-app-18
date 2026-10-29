import { useState } from "react";
import { Link } from "react-router-dom";

const ColorGenerator = () => {
  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const [solidColor, setSolidColor] = useState("#6554fc");
  const [solidCopied, setSolidCopied] = useState(false);

  const [color1, setColor1] = useState("#6554fc");
  const [color2, setColor2] = useState("#3ff1fd");
  const [gradientDirection, setGradientDirection] = useState("to right");
  const [gradientCopied, setGradientCopied] = useState(false);

  // Random Color Handlers
  const getRandomNumber = () => Math.floor(Math.random() * hex.length);

  const generateRandomColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    setSolidColor(hexColor);
    setSolidCopied(false);
  };

  const copySolidToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(solidColor);
      setSolidCopied(true);
      setTimeout(() => setSolidCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  // Gradient Generator values
  const currentGradient = `linear-gradient(${gradientDirection}, ${color1}, ${color2})`;

  const copyGradientToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentGradient);
      setGradientCopied(true);
      setTimeout(() => setGradientCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy gradient!", err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Main Content Area */}
      <section className="section py-6">
        <div className="container">
          {/* Page Title Header */}
          <div className="has-text-centered mb-6">
            <h1
              className="title is-2 has-text-weight-bold mb-5"
              style={{ color: "#2c3e50" }}
            >
              Color Generator
            </h1>
            <p className="subtitle is-6" style={{ color: "#6f6f6f" }}>
              Generate random solid hex colors & custom gradient palettes
            </p>
          </div>

          <div className="columns is-centered is-multiline">
            {/* SECTION 1: Random Solid Color Generator Card */}
            <div className="column is-10-tablet is-5-desktop">
              <div
                className="box p-5 h-100 is-flex is-flex-direction-column is-justify-content-space-between"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div>
                  <h2 className="title is-4 mb-3" style={{ color: "#363636" }}>
                    Solid Color Generator
                  </h2>
                  <p className="is-size-7 mb-4" style={{ color: "#718096" }}>
                    Create a random aesthetic hex code color.
                  </p>

                  {/* Color Preview Box */}
                  <div
                    className="mb-4"
                    style={{
                      height: "120px",
                      backgroundColor: solidColor,
                      borderRadius: "12px",
                      boxShadow: "inset 0 2px 6px rgba(0,0,0,0.15)",
                      transition: "background-color 0.4s ease",
                    }}
                  ></div>

                  <div className="field is-grouped is-align-items-center mb-4">
                    <span
                      className="tag is-medium has-text-weight-bold px-4 py-3 mr-2"
                      style={{
                        backgroundColor: solidColor,
                        color: "#fff",
                        borderRadius: "8px",
                      }}
                    >
                      {solidColor}
                    </span>
                  </div>
                </div>

                <div className="buttons are-medium">
                  <button
                    className="button is-primary is-rounded is-fullwidth has-text-weight-semibold"
                    onClick={generateRandomColor}
                    style={{
                      background:
                        "linear-gradient(135deg, #6554fc 0%, #3ff1fd 100%)",
                      border: "none",
                    }}
                  >
                    Generate Solid Color
                  </button>
                  <button
                    className="button is-light is-rounded is-fullwidth has-text-weight-semibold"
                    onClick={copySolidToClipboard}
                  >
                    {solidCopied ? "Copied Hex!" : "Copy Hex Code"}
                  </button>
                </div>
              </div>
            </div>

            {/* SECTION 2: Gradient Color Generator Card */}
            <div className="column is-10-tablet is-5-desktop">
              <div
                className="box p-5 h-100 is-flex is-flex-direction-column is-justify-content-space-between"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div>
                  <h2 className="title is-4 mb-3" style={{ color: "#363636" }}>
                    Gradient Generator
                  </h2>
                  <p className="is-size-7 mb-4" style={{ color: "#718096" }}>
                    Blend two custom colors together seamlessly.
                  </p>

                  {/* Gradient Preview Box */}
                  <div
                    className="mb-4"
                    style={{
                      height: "120px",
                      backgroundImage: currentGradient,
                      borderRadius: "12px",
                      boxShadow: "inset 0 2px 6px rgba(0,0,0,0.15)",
                      transition: "background-image 0.4s ease",
                    }}
                  ></div>

                  {/* Color Pickers Inputs */}
                  <div className="columns is-mobile mb-3">
                    <div className="column">
                      <label
                        className="label is-small"
                        style={{ color: "#555" }}
                      >
                        Color 1
                      </label>
                      <input
                        type="color"
                        value={color1}
                        onChange={(e) => setColor1(e.target.value)}
                        style={{
                          width: "100%",
                          height: "38px",
                          border: "1px solid #ccc",
                          borderRadius: "6px",
                          cursor: "pointer",
                          background: "none",
                        }}
                      />
                    </div>
                    <div className="column">
                      <label
                        className="label is-small"
                        style={{ color: "#555" }}
                      >
                        Color 2
                      </label>
                      <input
                        type="color"
                        value={color2}
                        onChange={(e) => setColor2(e.target.value)}
                        style={{
                          width: "100%",
                          height: "38px",
                          border: "1px solid #ccc",
                          borderRadius: "6px",
                          cursor: "pointer",
                          background: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Direction Selector */}
                  <div className="field mb-4">
                    <label className="label is-small" style={{ color: "#555" }}>
                      Direction
                    </label>
                    <div className="select is-small is-fullwidth">
                      <select
                        value={gradientDirection}
                        onChange={(e) => setGradientDirection(e.target.value)}
                      >
                        <option value="to right">To Right</option>
                        <option value="to left">To Left</option>
                        <option value="to bottom">To Bottom</option>
                        <option value="to top">To Top</option>
                        <option value="to bottom right">
                          Diagonal (Bottom Right)
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="buttons are-medium">
                  <button
                    className="button is-link is-rounded is-fullwidth has-text-weight-semibold"
                    onClick={copyGradientToClipboard}
                    style={{ backgroundColor: "#3273dc" }}
                  >
                    {gradientCopied ? "Copied CSS!" : "Copy CSS Gradient"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="footer"
        style={{
          backgroundColor: "#f1f3f5",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div className="content has-text-centered">
          <Link
            to="/"
            className="has-text-weight-semibold"
            style={{ color: "#3273dc" }}
          >
            &larr; Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ColorGenerator;
