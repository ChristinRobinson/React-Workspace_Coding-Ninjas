import React from 'react';

const JSXExamples = () => {
	let name = 'Christin Robinson';
	let isLoggedIn = false;

	return (
		<div className='jsx-example'>
			{!isLoggedIn && <p>Hello, World!</p> }
			{isLoggedIn && <h2>Hello, {name}</h2>}
		</div>
	);
};

export default JSXExamples;
