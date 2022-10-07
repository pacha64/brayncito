import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(1);
  return (
    <div className="App">
    <img src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.pictoa.com%2Fmedia%2Fgalleries%2F172%2F700%2F172700594c19c2e7b86%2F3264837594c19c3056c4.jpg&f=1&nofb=1&ipt=ed6c6c1a8beafe6c3698901a6ff451ab766ba45d6eaedee64dd11e6d71b96481&ipo=images"} className="App-logo" alt="logo" />
    <p>
      Bryancito tiene {count} penes en la boca
    </p>
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >Quiere mas</button>
    </div>
  );
}

export default App;
