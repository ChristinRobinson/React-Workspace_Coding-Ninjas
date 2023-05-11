import React from 'react';

// Function
const myFunc = () => {
	return <p>Function Export</p>;
};

// Class
class MyClass extends React.Component {
	render() {
		return <p>Class Export</p>;
	}
}

// Variable
const a = 99;



// Default Export
export default myFunc;

// Named Exports
export { MyClass };

// Renamed Exports
export { a as RenamedVariable };
