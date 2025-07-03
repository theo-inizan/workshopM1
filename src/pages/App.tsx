import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Signup from './SignUp';
import PhoneNumberVerification from './PhoneNumberVerification';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verification" element={<PhoneNumberVerification />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App; 