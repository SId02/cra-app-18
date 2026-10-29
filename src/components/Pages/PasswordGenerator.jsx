import  { useState, useCallback, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const PasswordGenerator = () => {
    // Generator States
    const [length, setLength] = useState(12);
    const [numberAllowed, setNumberAllowed] = useState(true);
    const [symbolAllowed, setSymbolAllowed] = useState(true);
    const [password, setPassword] = useState("");
    const [copied, setCopied] = useState(false);

    // Checker States
    const [checkPassword, setCheckPassword] = useState("");
    const [strengthMessage, setStrengthMessage] = useState("Very Weak");
    const [strengthBarWidth, setStrengthBarWidth] = useState("0%");
    const [strengthBarColor, setStrengthBarColor] = useState("is-danger");
    const [messageColor, setMessageColor] = useState("has-text-danger");
    const [messageBgColor, setMessageBgColor] = useState("has-background-danger-light");

    // Theme State
    const [darkMode, setDarkMode] = useState(false);

    const passwordRef = useRef(null);

    useEffect(() => {
        const checkTheme = () => {
            setDarkMode(document.documentElement.getAttribute("data-theme") === "dark");
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        return () => observer.disconnect();
    }, []);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) letter += "0123456789";
        if (symbolAllowed) letter += "!@#$%^&*";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * letter.length);
            pass += letter.charAt(char);
        }

        setPassword(pass);
        setCheckPassword(pass); // Automatically evaluate the generated password strength
    }, [length, numberAllowed, symbolAllowed]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, symbolAllowed, passwordGenerator]);

    // Strength Checker Logic
    useEffect(() => {
        let newWidth = "0%";
        let barColor = "is-danger";
        let textColor = "has-text-danger";
        let bgColor = "has-background-danger-light";
        let newMessage = "Very Weak";

        if (checkPassword.length === 0) {
            newMessage = "Very Weak";
            newWidth = "0%";
        } else if (checkPassword.length <= 4) {
            newMessage = "Very Weak";
            newWidth = "25%";
        } else if (checkPassword.length <= 6) {
            newMessage = "Weak";
            newWidth = "45%";
            barColor = "is-warning";
            textColor = "has-text-warning";
            bgColor = "has-background-warning-light";
        } else if (checkPassword.length <= 8) {
            newMessage = "Medium";
            newWidth = "65%";
            barColor = "is-primary";
            textColor = "has-text-primary";
            bgColor = "has-background-primary-light";
        } else if (checkPassword.length <= 12) {
            newMessage = "Strong";
            newWidth = "85%";
            barColor = "is-info";
            textColor = "has-text-info";
            bgColor = "has-background-info-light";
        } else {
            newMessage = "Very Strong";
            newWidth = "100%";
            barColor = "is-success";
            textColor = "has-text-success";
            bgColor = "has-background-success-light";
        }

        setStrengthBarWidth(newWidth);
        setStrengthBarColor(barColor);
        setMessageColor(textColor);
        setMessageBgColor(bgColor);
        setStrengthMessage(newMessage);
    }, [checkPassword]);

    const cardBg = darkMode ? "#22252a" : "#ffffff";
    const textColor = darkMode ? "#f1f1f1" : "#363636";
    const subTextColor = darkMode ? "#b5b5b5" : "#4a4a4a";

    return (
        <div style={{ backgroundColor: darkMode ? "#141618" : "#f8f9fa", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "5rem" }}>
            <div>
                <section className="section pb-5">
                    <div className="container has-text-centered mb-5">
                        <h1 className="title is-2 has-text-weight-bold" style={{ color: textColor }}>
                            Password Generator & Analyzer
                        </h1>
                        <p className="subtitle is-6 mt-2" style={{ color: subTextColor }}>
                            Generate passwords and evaluate their strength in real-time.
                        </p>
                    </div>

                    {/* Generator Box */}
                    <div className="container" style={{ maxWidth: "700px" }}>
                        <div 
                            className="box p-5 mb-5"
                            style={{
                                backgroundColor: cardBg,
                                color: textColor,
                                borderRadius: "16px",
                                boxShadow: darkMode ? "0 8px 24px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.06)",
                                border: darkMode ? "1px solid #2a2e35" : "1px solid #eaeaea",
                            }}
                        >
                            <h3 className="title is-4 mb-4" style={{ color: textColor }}>Password Generator</h3>
                            <div className="field is-grouped mb-4">
                                <p className="control is-expanded">
                                    <input
                                        className="input is-medium"
                                        type="text"
                                        value={password}
                                        readOnly
                                        ref={passwordRef}
                                        style={{
                                            backgroundColor: darkMode ? "#181a1b" : "#f5f5f5",
                                            color: textColor,
                                            border: darkMode ? "1px solid #333" : "1px solid #dbdbdb"
                                        }}
                                    />
                                </p>
                                <button 
                                    className="button is-medium" 
                                    onClick={copyPasswordToClipboard}
                                    style={{
                                        backgroundColor: darkMode ? "#2a2e35" : "#f1f3f5",
                                        color: textColor,
                                        border: "none"
                                    }}
                                    title="Copy Password"
                                >
                                    <span className="icon mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                        </svg>
                                    </span>
                                    <span>{copied ? "Copied!" : "Copy"}</span>
                                </button>
                            </div>

                            <div className="is-flex is-flex-direction-column" style={{ gap: "1rem" }}>
                                <div className="is-flex is-align-items-center is-justify-content-space-between">
                                    <label htmlFor="lengthRange" className="has-text-weight-semibold" style={{ color: textColor }}>
                                        Length: {length} (Min 8 - Max 30)
                                    </label>
                                    <input
                                        id="lengthRange"
                                        type="range"
                                        min={8}
                                        max={30}
                                        value={length}
                                        onChange={(e) => setLength(Number(e.target.value))}
                                        style={{ width: "50%" }}
                                    />
                                </div>

                                <div className="is-flex is-justify-content-space-around mt-2">
                                    <label className="checkbox" style={{ color: textColor }}>
                                        <input
                                            type="checkbox"
                                            checked={numberAllowed}
                                            onChange={() => setNumberAllowed((prev) => !prev)}
                                            className="mr-2"
                                        />
                                        Numbers (0-9)
                                    </label>
                                    <label className="checkbox" style={{ color: textColor }}>
                                        <input
                                            type="checkbox"
                                            checked={symbolAllowed}
                                            onChange={() => setSymbolAllowed((prev) => !prev)}
                                            className="mr-2"
                                        />
                                        Symbols (!@#$%^&*)
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Strength Checker Box */}
                        <div 
                            className="box p-5"
                            style={{
                                backgroundColor: cardBg,
                                color: textColor,
                                borderRadius: "16px",
                                boxShadow: darkMode ? "0 8px 24px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.06)",
                                border: darkMode ? "1px solid #2a2e35" : "1px solid #eaeaea",
                            }}
                        >
                            <h3 className="title is-4 mb-4" style={{ color: textColor }}>Password Strength Analyzer</h3>
                            <div className="field mb-3">
                                <div className="control">
                                    <input
                                        className="input is-medium"
                                        type="text"
                                        value={checkPassword}
                                        onChange={(e) => setCheckPassword(e.target.value)}
                                        placeholder="Type or test any password..."
                                        style={{
                                            backgroundColor: darkMode ? "#181a1b" : "#f5f5f5",
                                            color: textColor,
                                            border: darkMode ? "1px solid #333" : "1px solid #dbdbdb"
                                        }}
                                    />
                                </div>
                            </div>

                            <progress
                                className={`progress ${strengthBarColor} mb-3`}
                                value={parseInt(strengthBarWidth, 10)}
                                max="100"
                                style={{ height: "10px", borderRadius: "5px" }}
                            ></progress>

                            <div className={`notification ${messageBgColor} ${messageColor} has-text-weight-bold has-text-centered py-3 m-0`} style={{ borderRadius: "8px" }}>
                                Strength: {strengthMessage}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="footer" style={{ backgroundColor: darkMode ? "#181a1b" : "#f1f3f5", borderTop: darkMode ? "1px solid #2a2e35" : "1px solid #e2e8f0" }}>
                <div className="content has-text-centered">
                    <Link to="/" className="has-text-weight-semibold" style={{ color: darkMode ? "#3ff1fd" : "#3273dc" }}>
                        &larr; Back to Home
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default PasswordGenerator;