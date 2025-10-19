import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/signIn';
// import SiginUp from '@/pages/sign-up/SignUp

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-in" element={<SignIn />} />
            {/* <Route path="/sign-up" element={<SiginUp />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
