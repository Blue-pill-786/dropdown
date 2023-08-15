import React from 'react';
import DropdownButton from './DropdownButton';

const items = [
  { label: 'Data Structure', value: 'option1' },
  { label: 'NodeJS', value: 'option2' },
  { label: 'ReactJS', value: 'option3' },
];

function App() {
  return (
    <div className="App">
      <h1>Select Your Skill</h1>
      <DropdownButton items={items} />
    </div>
  );
}

export default App;
