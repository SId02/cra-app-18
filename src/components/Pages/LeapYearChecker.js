import React, { useState } from 'react';

const LeapYearChecker = () => {
   
   
    return (
        <>
            <section>
                    <div className="container p-5 has-text-centered">
                        <h1 className="title ">Age Validation</h1>
                    </div>

                    <div className="container p-6 is-centered">
                                <div className="columns is-desktop  has-text-centered">
                                    <div className="column is-4 is-offset-one-quarter box ">
                                        <form  onSubmit={handleSubmit}>
                                            <div className="field">
                                                <label className="label">Date</label>
                                                <div className="control">
                                                <input  className="input" type="text" value={date}    onChange={handleChange} placeholder="YYYY-MM-DD"/>
                                                </div>
                                            </div>
                                            {error && <p className="notification  p-3 m-2">{error}</p>}
                                            <button className="button is-primary" type="submit">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                    </div>
            </section>
        
  
        </>
    );
   }

export default LeapYearChecker