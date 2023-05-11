import React from 'react';

// Importing Default Export
// import MyFunc from './modules';

// Importing Named Exports
// import { MyClass } from './modules';

// Importing Renamed Exports
// import { RenamedVariable as MyVariable } from './modules';

// You can import them in a single line as well
import MyFunc, { MyClass, RenamedVariable as MyVariable } from './modules';

const Imports = () => {
	return (
		<div className='imports-exports-example'>
			<ol>
				<li>
					<h2>Default Export</h2>
					<MyFunc />
				</li>

				<li>
					<h2>Named Exports</h2>
					<MyClass />
				</li>

				<li>
					<h2>Renamed Exports</h2>
					<p>My Variable is: { MyVariable }</p>
				</li>
			</ol>
		</div>
	);
};

export default Imports;
