import React, { useReducer, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
const initialState = {
	loading: true,
	error: "",
	post: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_SUCCESS":
			return {
				loading: false,
				post: action.payload,
				error: "",
			};
		case "FETCH_ERROR":
			return {
				loading: false,
				post: {},
				error: "Something went wrong!",
			};
		default:
			return state;
	}
};

function DataFetchUsingUseReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/1`)
			.then((response) => {
				dispatch({ type: "FETCH_SUCCESS", payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: "FETCH_ERROR" });
			});
	}, []);
	return (
		<>
		<div>
			<section className="container">
				<div className="columns is-desktop mt-5 has-text-centered">
					<div className="column is-6 is-half is-offset-one-quarter">
						<div className="post bg-white p1 box">
							<div>
								<p className="post1">
									{state.loading ? "Loading" : state.post.title}
									{state.error ? state.error : null}
								</p>
							</div>
						</div>
					</div>
				</div>
            </section>
            <br />
            <br />
            <br />
            <br />
		</div>
		<hr/>
		<br />
            <br />
            <br />
            <br />
			  <div className="container has-text-centered">  
                <Loader/>
			   </div>
            <br />
            <br />
            <br />
            <br />
		</>
	);
}

export default DataFetchUsingUseReducer;
