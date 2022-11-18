import { useState } from 'react';
import * as iconsSolid from '@heroicons/react/24/solid';
import * as iconsOutline from '@heroicons/react/24/outline';

import './App.css';

function App() {
  const [InputChange, setInputChange] = useState('');

  const foundIcons =
    InputChange === ''
      ? Object.keys(iconsSolid)
      : Object.keys(iconsSolid).filter(key =>
          key.toLowerCase().includes(InputChange.toLowerCase()),
        );
  return (
    <div className="py-48 text-center">
      <h1 className="mb-12 font-bold text-2xl text-gray-900">
        Heroicons/react v 2.0.12
      </h1>
      <div className="mb-6">
        <label htmlFor="">
          <span className="block mp-3">Search icons</span>
          <input
            className="rounded-md"
            type="text"
            value={InputChange}
            onChange={e => setInputChange(e.target.value)}
          />
        </label>
      </div>
      <div className="flex items-center justify-between w-full max-w-7xl m-auto text-center ">
        <div className="w-2/5">
          <h2 className="mb-6 font-bold text-lg text-gray-900">Icons Solid</h2>
          {foundIcons.map((icon, i) => (
            <div className="flex items-center justify-between mb-6" key={i}>
              <div className="w-6 h-6 text-gray-700">
                {iconsSolid[icon].render(icon)}
              </div>
              <span className="mb-2 text-gray-700">{icon}</span>
            </div>
          ))}
        </div>
        <div className="w-2/5">
          <h2 className="mb-6 font-bold text-lg text-gray-900">
            Icons Outline
          </h2>
          {foundIcons.map((icon, i) => (
            <div className="flex items-center justify-between mb-6" key={i}>
              <div className="w-6 h-6 text-gray-700">
                {iconsOutline[icon].render(icon)}
              </div>
              <span className="mb-2 text-gray-700">{icon}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
