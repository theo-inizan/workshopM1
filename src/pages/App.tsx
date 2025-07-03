import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from '../contexts/ToastContext';
import HomePage from './HomePage';
import Signup from './SignUp';
import PhoneNumberVerification from './PhoneNumberVerification';
import InfoPerso from './Information_perso';
import Spliit from './Spliiit';
import Signin from './SignIn';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verification" element={<PhoneNumberVerification />} />
          <Route path="info" element={<InfoPerso />} />
          <Route path="spliiit" element={<Spliit/>} />
          <Route path="/signin" element={<Signin/>} />

          
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App; 