import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Signup from './SignUp';
import PhoneNumberVerification from './PhoneNumberVerification';
import InfoPerso from './Information_perso';
import Spliit from './Spliiit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verification" element={<PhoneNumberVerification />} />
        <Route path="info" element={<InfoPerso />} />
        <Route path="spliiit" element={<Spliit/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App; 