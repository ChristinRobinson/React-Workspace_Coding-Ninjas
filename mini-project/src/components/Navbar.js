import React, { Component } from 'react';

export class Navbar extends Component {
	render() {
		const { productsCount } = this.props;

		return (
			<div className='navbar'>
				<span className='cart-icon'>
					<i className='bx bx-cart-alt'></i>
					<span className='cart-quantity'>{productsCount}</span>
				</span>
			</div>
		);
	}
}

export default Navbar;
