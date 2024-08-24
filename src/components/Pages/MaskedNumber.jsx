import { useState } from "react";

const MaskedNumber = () => {
    const [number, setNumber] = useState("1234567890");
	const [maskedNumber, setMaskedNumber] = useState("");

	const handleMask = () => {
		const masked = number.replace(/\d(?=\d{4})/g, "*");
		setMaskedNumber(masked);
	};
    return (
      <>
   <section>
				<div className="container p-5 has-text-centered">
					<h1 className="title ">Masked Number</h1>
				</div>
				<div className="container p-6 ">
					<div className="columns is-desktop has-text-centered">
						<div className="column is-5 is-offset-one-quarter box">
							<div className="field">
								<div className="control">
									<input
										type="number"
										className="input"
										placeholder="Original Number"
										value={number}
										onChange={(e) => setNumber(e.target.value)}/>
								</div>
							</div>
                            <div className="field">
                                <div className="control">
                                        <input
                                            className="input p-2 m-2"
                                            type="text"
                                            value={maskedNumber}
                                            readOnly/>
                                        <button
                                            className="button"
                                            type="submit"
                                            onClick={handleMask}>
                                            Mask
                                        </button>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</section>
            </>
  )
}

export default MaskedNumber