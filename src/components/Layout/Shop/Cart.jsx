import { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
	const { cart } = state;
	const [total, setTotal] = useState();

	useEffect(() => {
		setTotal(
			cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
		);
	}, [cart]);

	const changeQty = (id, qty) =>
		dispatch({
			type: "CHANGE_CART_QTY",
			payload: {
				id: id,
				qty: qty,
			},
		});

	return (
		<>
			<div className="columns mt-5 m-3  has-background-light">
				<div className="column">
					<h3 className="title is-4">Cart</h3>
					<table className="table is-fullwidth">
						<thead>
							<tr>
								<th>Item Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{cart.length > 0 ? (
								cart.map((prod) => (
									<tr>
										<td>{prod.title}</td>
										<td>$ {prod.price}</td>
										<td>{prod.qty}</td>
										<td>
											<div className="buttons">
												<button
													className="button is-danger is-small"
													onClick={() => changeQty(prod.id, prod.qty - 1)}
												>
													-
												</button>
												<button
													className="button is-danger is-small"
													onClick={() => changeQty(prod.id, prod.qty + 1)}
												>
													+
												</button>
											</div>
										</td>
									</tr>
								))
							) : (
								<span style={{ padding: 20, alignSelf: "center" }}>
									Cart is empty
								</span>
							)}
						</tbody>
					</table>
					<h3 className="Title">Total :$ {total}</h3>
				</div>
			</div>
		</>
	);
};

export default Cart;
