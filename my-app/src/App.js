import React from 'react';

// Imports & Exports
import Imports from './01 Imports & Exports/Imports';

// Class Component Example
class ClassComponentExample extends React.Component {
	render() {
		return (
			// You can use <React.Fragment> as the parent instead of <div> if you want to avoid adding an extra wrapper element in the HTML structure.
			<React.Fragment>
				<h2>Class Component Example!</h2>
			</React.Fragment>
		);
	}
}

// Functional Component Example
const FunctionalComponentExample = () => {
	return (
		// You can use <React.Fragment> as the parent instead of <div> if you want to avoid adding an extra wrapper element in the HTML structure.
		<React.Fragment>
			<h2>Functional Component Example!</h2>
		</React.Fragment>
	);
};

const App = () => {
	return (
		// JSX Expressions must have one parent element
		<div className='App'>
			<h1>Hello, World!</h1>
			<hr />

			<h1>
				<u>Types of Components</u>
			</h1>
			<ClassComponentExample />
			<FunctionalComponentExample />
			<hr />

			<h1>
				<u>Imports / Exports</u>
			</h1>
			<Imports />
		</div>
	);
};

export default App;
