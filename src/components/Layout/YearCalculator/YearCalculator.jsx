import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const YearCalculator = () => {
    const [date, setDate] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(1995);
    const [years, setYears] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Sync theme with document element
        const checkTheme = () => {
            setDarkMode(document.documentElement.getAttribute("data-theme") === "dark");
        };
        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        return () => observer.disconnect();
    }, []);

    const calculateYear = () => {
        let d = parseInt(date, 10);
        let m = parseInt(month, 10);
        let y = parseInt(year, 10);

        if (!d || !m || !y) {
            setYears("Please enter a valid date, month, and year.");
            return;
        }

        let d2 = new Date().getDate();
        let m2 = 1 + new Date().getMonth();
        let y2 = new Date().getFullYear();
        let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Leap year adjustment for Feb
        if ((y2 % 4 === 0 && y2 % 100 !== 0) || y2 % 400 === 0) {
            monthDays[1] = 29;
        }

        if (y > y2 || (y === y2 && m > m2) || (y === y2 && m === m2 && d > d2)) {
            setYears("You haven't been born yet!");
            return;
        }

        if (d > d2) {
            d2 = d2 + monthDays[m2 - 1];
            m2 = m2 - 1;
        }
        if (m > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }

        const calculatedDays = d2 - d;
        const calculatedMonths = m2 - m;
        const calculatedYears = y2 - y;

        setYears(`You are ${calculatedYears} Years, ${calculatedMonths} Months, and ${calculatedDays} Days old! 🎉`);
    };

    const cardBg = darkMode ? "#22252a" : "#ffffff";
    const textColor = darkMode ? "#f1f1f1" : "#363636";
    const subTextColor = darkMode ? "#b5b5b5" : "#4a4a4a";
    const inputBg = darkMode ? "#181a1b" : "#f5f5f5";

    return (
        <div style={{ backgroundColor: darkMode ? "#141618" : "#f8f9fa", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: "5rem" }}>
            <div>
                <section className="section py-5">
                    <div className="container pb-4 has-text-centered">
                        <h1 className="title is-2 has-text-weight-bold" style={{ color: textColor }}>
                            ⏳ Age & Year Calculator
                        </h1>
                        <p className="subtitle is-6 mt-2" style={{ color: subTextColor }}>
                            Calculate your exact age down to the day, month, and year.
                        </p>
                    </div>

                    <div className="container pt-4">
                        <div className="columns is-centered">
                            <div className="column is-7-desktop is-9-tablet">
                                <div 
                                    className="box p-6"
                                    style={{
                                        backgroundColor: cardBg,
                                        color: textColor,
                                        borderRadius: "16px",
                                        boxShadow: darkMode ? "0 8px 24px rgba(0,0,0,0.4)" : "0 8px 24px rgba(0,0,0,0.06)",
                                        border: darkMode ? "1px solid #2a2e35" : "1px solid #eaeaea",
                                    }}
                                >
                                    <form onSubmit={(e) => { e.preventDefault(); calculateYear(); }}>
                                        <div className="columns is-multiline">
                                            <div className="column is-4">
                                                <div className="field">
                                                    <label htmlFor="date" className="label" style={{ color: textColor }}>Day (DD)</label>
                                                    <div className="control">
                                                        <input 
                                                            className="input is-medium" 
                                                            name="date"
                                                            id="date"
                                                            type="number"
                                                            placeholder="DD"
                                                            value={date}
                                                            onChange={(e) => setDate(e.target.value)}
                                                            min="1"
                                                            max="31"
                                                            style={{ backgroundColor: inputBg, color: textColor, border: darkMode ? "1px solid #333" : "1px solid #dbdbdb" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="column is-4">
                                                <div className="field">
                                                    <label htmlFor="month" className="label" style={{ color: textColor }}>Month (MM)</label>
                                                    <div className="control">
                                                        <input 
                                                            className="input is-medium" 
                                                            name="month"
                                                            id="month"
                                                            type="number"
                                                            placeholder="MM"
                                                            value={month}
                                                            onChange={(e) => setMonth(e.target.value)}
                                                            min="1"
                                                            max="12"
                                                            style={{ backgroundColor: inputBg, color: textColor, border: darkMode ? "1px solid #333" : "1px solid #dbdbdb" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="column is-4">
                                                <div className="field">
                                                    <label htmlFor="year" className="label" style={{ color: textColor }}>Year (YYYY)</label>
                                                    <div className="control">
                                                        <input 
                                                            className="input is-medium" 
                                                            name="year"
                                                            id="year"
                                                            type="number"
                                                            placeholder="YYYY"
                                                            value={year}
                                                            onChange={(e) => setYear(e.target.value)}
                                                            min="1900"
                                                            max="3000"
                                                            style={{ backgroundColor: inputBg, color: textColor, border: darkMode ? "1px solid #333" : "1px solid #dbdbdb" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field mt-5">
                                            <div className="control has-text-centered">
                                                <button 
                                                    className="button is-medium is-rounded has-text-weight-bold px-6" 
                                                    type="button" 
                                                    onClick={calculateYear}
                                                    style={{
                                                        background: "linear-gradient(135deg, #6554fc 0%, #745cfc 50%, #3ff1fd 100%)",
                                                        color: "#fff",
                                                        border: "none",
                                                        boxShadow: "0 4px 14px rgba(116, 92, 252, 0.4)",
                                                        transition: "transform 0.2s ease"
                                                    }}
                                                >
                                                    Calculate Age ✨
                                                </button>
                                            </div>
                                        </div>

                                        {years && (
                                            <div className="notification is-info is-light mt-5 has-text-centered has-text-weight-semibold" style={{ borderRadius: "10px" }}>
                                                {years}
                                            </div>
                                        )}
                                    </form>
                                </div>
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

export default YearCalculator;