// practice project - portal to access apps
// This is the root component of the app.
// Design Reference : https://m3.material.io/get-started
// Monitor Resolution Consideration
// 1. 1920 x 1080
//// standard resolution
// 2. 1366 x 768
//// change component size
// 3. 3840 x 2160
//// display all the components in a single page
// 4. 1920 x 540
//// component realignment
// 5. 960 x 540
//// minimum resolution
//// hide some components

import './App.css';

function App() {
  return (
    <div className="App">
      <button className="button">Button</button>
      <button className="button">Button</button>
    </div>
  );
}

export default App;
