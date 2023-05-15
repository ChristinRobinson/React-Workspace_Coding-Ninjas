import React, { Component } from 'react';

export class CartItem extends Component {
	render() {
		const { product, decreaseCount, increaseCount, removeProduct } = this.props;
		const { imageSrc, name, price, quantity } = product;

		return (
			<div className='cart-item'>
				<section className='product-image-section'>
					<img src={imageSrc} alt={name} />
				</section>

				<section className='product-details-section'>
					<h2 className='product-name'>{name}</h2>

					<p className='product-price'>Rs.{price}</p>

					<p className='product-quantity'>Qty: {quantity}</p>

					<div className='quantity-buttons-group'>
						<button className='increase-button' onClick={increaseCount}>
							<i className='bx bx-plus'></i>
						</button>

						<button className='decrease-button' onClick={decreaseCount}>
							<i className='bx bx-minus'></i>
						</button>

						<button className='remove-button' onClick={removeProduct}>
							<i className='bx bxs-trash'></i>
						</button>
					</div>
				</section>
			</div>
		);
	}
}

export default CartItem;
