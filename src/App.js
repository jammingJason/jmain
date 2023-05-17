import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Location from './Location';
import Menu from './Menu';
import Pictures from './Pictures';

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <NavBar />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/location" element={<Location />} />
          <Route exact="true" path="/menu" element={<Menu />} />
          <Route exact="true" path="/pictures" element={<Pictures />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
