import React, { Component } from 'react';
import CartPage from './pages/CartPage';
import { Navbar } from './components';

class App extends Component {
	constructor() {
		super();

		this.state = {
			products: [
				{
					id: 1,
					imageSrc:
						'https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UL320_.jpg',
					name: 'Mobile',
					price: 20000,
					quantity: 1,
				},
				{
					id: 2,
					imageSrc:
						'https://m.media-amazon.com/images/I/61LO6l4zB4L._AC_UL400_.jpg',
					name: 'Watch',
					price: 250,
					quantity: 2,
				},
				{
					id: 3,
					imageSrc:
						'https://m.media-amazon.com/images/I/71bV203ASmL._AC._SR360,460.jpg',
					name: 'Pen drive',
					price: 750,
					quantity: 3,
				},
				{
					id: 4,
					imageSrc:
						'https://images-eu.ssl-images-amazon.com/images/I/31HCup1pqFL._AC_SX184_.jpg',
					name: 'Headphone',
					price: 2500,
					quantity: 1,
				},
			],
		};
	}

	increaseCount = (product) => {
		const { products } = this.state;

		product.quantity += 1;

		this.setState(() => ({
			products,
		}));
	};

	decreaseCount = (product) => {
		const { products } = this.state;

		if (product.quantity == 1) {
			return;
		}

		product.quantity -= 1;

		this.setState(() => ({
			products,
		}));
	};

	removeProduct = (product) => {
		this.setState((prevState) => ({
			products: prevState.products.filter((item) => item != product),
		}));
	};

	getProductsCount = () => {
		const { products } = this.state;
		let count = 0;

		products.forEach((product) => (count += product.quantity));

		return count;
	};

  getTotal = () => {
    const {products} = this.state;
    let total = 0;
  
    products.forEach(product => total += (product.quantity * product.price));

    return total;
  }

	render() {
		const { products } = this.state;

		return (
			<div className='App'>
				<Navbar productsCount={this.getProductsCount()} />

				<main>
					<CartPage
						products={products}
						increaseCount={this.increaseCount}
						decreaseCount={this.decreaseCount}
						removeProduct={this.removeProduct}
					/>

					<div className='total-price'>
						<span>Total Amount: </span>
						<h2>{this.getTotal()}</h2>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
