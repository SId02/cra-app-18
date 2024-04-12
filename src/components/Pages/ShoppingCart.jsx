import { useEffect, useReducer } from "react";
import Products from "../Layout/Shop/Products";
import Cart from "../Layout/Shop/Cart";
import { cartReducer } from "../../reducers/cartReducer";
import axios from "axios";

function ShoppingCart() {
	const [state, dispatch] = useReducer(cartReducer, {
		products: [],
		cart: [],
	});

	const fetchProducts = async () => {
		const { data } = await axios.get("https://dummyjson.com/products");

		dispatch({
			type: "ADD_PRODUCTS",
			payload: data.products,
		});
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<div className="container m-5">
				<div className="columns is-multiline  m-1">
					<div className="column is-8-desktop is-6-tablet has-background-light">
					<Products state={state} dispatch={dispatch} />
					</div>
					<div className="column is-4-desktop is-6-tablet has-background-white">
					<Cart state={state} dispatch={dispatch} />
					</div>
				</div>
			</div>
		</>
	);
}

export default ShoppingCart;
