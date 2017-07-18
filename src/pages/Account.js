import React, { Component } from 'react';

class Account extends Component {
	render() {
		return (
			<div>
				<h4>Products added to cart - {this.props.products.length}</h4>
				{
					this.props.products
					.map( product =>
						<div key={product.id}>
							<h4> {product.name} </h4>
							<h6> Quantity: {product.quantity} </h6>
							<button onClick={() =>this.props.remove(product)}>Remove From Cart</button>
						</div>
					)
				}
			</div>
		)
	}
}

export default Account;