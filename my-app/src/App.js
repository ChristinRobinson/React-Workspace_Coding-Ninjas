import React from 'react';

// Class Component Example
class ClassComponentExample extends React.Component {
	render() {
		return (
			// You can use <React.Fragment> as the parent instead of <div> if you want to avoid adding an extra wrapper element in the HTML structure.
			<React.Fragment>
				<h1>Class Component Example!</h1>
			</React.Fragment>
		);
	}
}

// Functional Component Example
const FunctionalComponentExample = () => {
	return (
		// You can use <React.Fragment> as the parent instead of <div> if you want to avoid adding an extra wrapper element in the HTML structure.
		<React.Fragment>
			<h1>Functional Component Example!</h1>
		</React.Fragment>
	);
};

const App = () => {
	return (
		// JSX Expressions must have one parent element
		<div className='App'>
			<h1>Hello, World!</h1>
			<ClassComponentExample />
			<FunctionalComponentExample />
		</div>
	);
};

export default App;
