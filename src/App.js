import * as iconsSolid from '@heroicons/react/24/solid';
import * as iconsOutline from '@heroicons/react/24/outline';

import './App.css';

function App() {
  return (
    <div className="m-auto max-w-7xl text-center ">
      <div>
        <h2>Icons Solid</h2>
        {Object.keys(iconsSolid).map((icon, i) => (
          <div className="mb-6" key={i}>
            <span className="mb-2 text-gray-100">{icon}</span>
            <div className="w-6 h-6 text-gray-100">
              {iconsSolid[icon].render(icon)}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Icons Outline</h2>
        {Object.keys(iconsOutline).map((icon, i) => (
          <div className="mb-6" key={i}>
            <span className="mb-2 text-gray-100">{icon}</span>
            <div className="w-6 h-6 text-gray-100">
              {iconsOutline[icon].render(icon)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
