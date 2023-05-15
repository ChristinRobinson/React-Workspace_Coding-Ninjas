import React, { Component } from 'react';
import { CartItem } from '../components';

export class CartPage extends Component {
	render() {
		const { products, increaseCount, decreaseCount, removeProduct } =
			this.props;

		return (
			<div className='cart-page'>
				{products.map((product, index) => {
					return (
						<CartItem
							key={index}
							product={product}
							increaseCount={() => increaseCount(product)}
							decreaseCount={() => decreaseCount(product)}
							removeProduct={() => removeProduct(product)}
						/>
					);
				})}
			</div>
		);
	}
}

export default CartPage;
