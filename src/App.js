import { useState } from 'react';
import './App.css';
import AppContext from './AppContext';
import Content from './Content';
import Navbar from './Navbar';

function App() {
  const [userName, setUserName] = useState("Sienna Princess");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div className="App">
        <Navbar />
        <Content />
      </div>
    </AppContext.Provider>
  );
}

export default App;
