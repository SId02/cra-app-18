import React from "react";

const Products = ({ state, dispatch }) => {
	const { products, cart } = state;

	return (
		<>
			<div className="mt-5 mb-5 columns is-multiline">
				{products.map((prod) => (
					<div className="column is-4-desktop is-6-tablet" key={prod.id}>
						<div className="has-background-white pt-4 px-10 pb-10 is-relative">
							<a className="mt-6 mb-2 px-6 is-block" href="#">
								<img
									className="mx-auto mb-5 image"
									style={{ height: "224px", objectFit: "contain" }}
									src={prod.thumbnail}
									alt={prod.title}
								/>
								<h5 className="title is-size-5 mb-2">{prod.title}</h5>
								<p className="has-text-info is-size-5 has-text-weight-bold">
									$ {prod.price}
								</p>
							</a>
							{cart.some((p) => p.id === prod.id) ? (
								<button
									className="button is-outlined p-0 ml-auto is-flex"
									href="#"
									style={{ width: "48px", height: "48px" }}
									onClick={() =>
										dispatch({
											type: "REMOVE_FROM_CART",
											payload: prod,
										})
									}
								>
									-
								</button>
							) : (
								<button
									className="button is-outlined p-0 ml-auto is-flex"
									href="#"
									style={{ width: "48px", height: "48px" }}
									onClick={() =>
										dispatch({
											type: "ADD_TO_CART",
											payload: {
												id: prod.id,
												title: prod.title,
												thumbnail: prod.thumbnail,
												qty: prod.qty,
												price: prod.price,
											},
										})
									}
								>
									+
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Products;
