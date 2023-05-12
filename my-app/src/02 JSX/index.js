import React from 'react';

const JSXExamples = () => {
	let name = 'Christin Robinson';
	let loading = false;

	if (loading) {
		return <h2>Loading</h2>;
	}

	return (
		<div className='jsx-example'>
			<h2>Hello, {name}</h2>
		</div>
	);
};

export default JSXExamples;
