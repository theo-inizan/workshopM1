import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PhoneNumberPage from './PhoneNumberPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phone" element={<PhoneNumberPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 