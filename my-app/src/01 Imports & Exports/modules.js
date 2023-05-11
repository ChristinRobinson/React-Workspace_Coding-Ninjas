import React from 'react';

const myFunc = () => {
  return <p>Function Component</p>
}

class MyClass extends React.Component {
  render() {
    return <p>Class Component</p>
  }
}

const a = 99;

export default myFunc;

export { MyClass };
  
export { a as RenamedVariable}
