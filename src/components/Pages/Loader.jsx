import React from "react";
import Spinner from "../Layout/Spinner/Spinner";
import ProgressBar from "../Layout/ProgressBar/ProgressBar";
const Loader = () => {
	return (
		<>
           <div className="container has-text-centered">  
			<h2>Loading...</h2>
            <br/>
            <br/>
			<h2>Spinner</h2>
			<br/>
			 <Spinner/>
            <br/>
			   <h2>ProgressBar</h2>
			<br/>
			 <ProgressBar/>
            <br/>
			</div>
		</>
	);
};

export default Loader;
