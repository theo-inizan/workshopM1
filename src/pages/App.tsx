import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 