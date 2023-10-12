import React, { useState } from "react";

function Calculator() {
    
    const [inputvalue, setinputvalue] = useState("");

    function display(value) {
      setinputvalue(inputvalue + value);
    }
  
    function calculate() {
      var answers = eval(inputvalue);
      setinputvalue(answers);
    }
  
    function clear() {
      setinputvalue("");
    }
    return (
        <div className="conatiner box m-6">
            <form action="" className="calculator">
                <div className="columns  is-desktop  mt-5 has-text-centered is-vcentered">
                    <div className="column">
                    <input type="text" className="value box" value={ inputvalue } />
                    <button className="box" onClick={() => clear()}>Clear</button>
                    </div>
                </div>
                <div className="columns mt-5 has-text-centered is-multiline has-background-light">
                    <div className="column" onClick={() => display("1")}><button className="box">1</button></div>
                    <div className="column" onClick={() => display("2")}><button className="box">2</button></div>
                    <div className="column" onClick={() => display("3")}><button className="box">3</button></div>
                    <div className="column" onClick={() => display("4")}><button className="box">4</button></div>
                    <div className="column" onClick={() => display("5")}><button className="box">5</button></div>
                    <div className="column" onClick={() => display("6")}><button className="box">6</button></div>
                    <div className="column" onClick={() => display("7")}><button className="box">7</button></div>
                    <div className="column" onClick={() => display("8")}><button className="box">8</button></div>
                    <div className="column" onClick={() => display("9")}><button className="box">9</button></div>
                    <div className="column" onClick={() => display("0")}><button className="box">0</button></div>
                    <div className="column" onClick={() => display("+")}><button className="box">+</button></div>
                    <div className="column" onClick={() => display("-")}><button className="box">-</button></div>
                    <div className="column" onClick={() => display("/")}><button className="box">\</button></div>
                    <div className="column" onClick={ () => display("*") }><button className="box">*</button></div>
                    <div className="column" onClick={ () => display(".") }><button className="box">.</button></div>
                    <div className="column" onClick={() => display("00")}><button className="box">00</button></div>
                    <div className="column" onClick={() => calculate()}><button className="box">=</button></div>
                </div>
            </form>
        </div>
    )

}
export default Calculator;