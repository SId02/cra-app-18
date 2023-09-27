import { useState, useCallback, useEffect, useRef } from 'react'


const PasswordGenerator = () => {
	const [length, setLength] = useState(8)
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [symbolAllowed, setSymbolAllowed] = useState(false);
	const [password, setPassword] = useState("")

//useRef hook
const passwordRef = useRef(null)

const passwordGenerator = useCallback(() => {
  let pass = ""
  let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) letter += "0123456789"
  if (symbolAllowed) letter += "!@#$%&*"

  for (let i = 1; i <= length; i++) {
	let char = Math.floor(Math.random() * letter.length + 1)
	pass += letter.charAt(char)
	
  }

  setPassword(pass)


}, [length, numberAllowed, symbolAllowed, setPassword])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password)
}, [password])

useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, symbolAllowed, passwordGenerator])


	return (
    <>
      <section>

      
			<div className="container p-5 has-text-centered">
				<h1 className="title ">Password Generator</h1>
			</div>

			<div classNameName="container p-6">
				<div className="columns is-mobile">
					<div className="column is-half is-offset-one-quarter">
						<form className="box">
							<div className="field is-grouped">
								<p className="control is-expanded">
									<input
										className="input"
										type="text"
											placeholder="Password"
											value={ password }
											readOnly
											ref={passwordRef}
									/>
									</p>
									
								<button className="button"  onClick={copyPasswordToClipboard}>
									<span className="icon is-small">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-clipboard"
										>
											<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
											<rect
												x="8"
												y="2"
												width="8"
												height="4"
												rx="1"
												ry="1"
											></rect>
										</svg>
									</span>
								</button>
							</div>
							<div className="condition p-3 field is-horizontal is-justify-content-space-evenly">
								<div>
									<input
										type="range"
										id="length"
										name="length"
										min={8}
										max={30}
										value={length}
											className="mr-2"
											onChange={(e) => {setLength(e.target.value)}}
									/>
									<label for="length">Length: {length}</label>
								</div>
								<div>
									<label className="checkbox numbers" htmlFor="numberInput">
											<input type="checkbox"
												  defaultChecked={numberAllowed}
												 id="numberInput"className=" mr-2"
											onChange={() => {
												setNumberAllowed((prev) => !prev);
											}}
											
											/>
										Numbers
									</label>
								</div>
								<div>
									<label className="checkbox symbols" htmlFor="characterInput">
											<input type="checkbox" className=" mr-2"
											defaultChecked={symbolAllowed}
											id="characterInput"
											onChange={() => {
												setSymbolAllowed((prev) => !prev )
											}}
											/>
										Symbols
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
        </div>
        
        <div className="container m-6">
        <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
              <div className="is-centered">
			<h3 className="is-text">Length -   Min 8  to Max 30 </h3>
				<h3 className="is-text">Letters - A to Z a to z </h3>
                <h3 className="is-text">Numbers - 0 to 9 </h3>
                <h3 className="is-text">Symbols - !@#$%&* </h3>
              </div>
            </div>
            </div>
        </div>
      </section>
		</>
	);
};

export default PasswordGenerator;
