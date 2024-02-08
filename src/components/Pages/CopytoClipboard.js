import React from "react";

const CopytoClipboard = () => {
	return (
		<>
			
			{/*  */ }
			<section className="hero is-medium">
          <div className="hero-body"> 
					<div className="container has-text-centered ">
					  		<div className="mb-5  is-multiline  is-centered">																				
							<h2 className="mt-2 mb-4 is-size-3  has-text-weight-bold">
								Copy to Clipboard
							</h2>
							</div>
						<div className="columns is-mobile">
					
                  <div className="column is-half is-offset-one-quarter">
                    <div className="card">
                      <div className="card-header field is-grouped has-background-grey-lighter">
                        <h3 className="card-header-title is-justify-content-space-evenly ">
                        Background Color <span className="tag is-large is-pulled-right color" id="color-code">hexcode
                        </span></h3>
                        <button className="p-4 m-4 button" id="copyColorHex" onclick="myFunction()">
                                <span className="icon is-small is-right">
                                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                              </svg>
                                </span>
                          </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="container has-text-centered">
              <div className="p-5 ">
                <button className="button " id="button">Random Color</button>
              </div>
            </div>
          </div>
      </section>
			{/*  */}
		</>
	);
};

export default CopytoClipboard;
