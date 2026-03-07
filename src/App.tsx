import './App.css'
import '@services/firebase/firebaseService'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from '@pages/signIn/SignIn'
// import SiginUp from '@pages/sign-up/SignUp
import Dashboard from '@/pages/dashboard/Dashboard'
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute'
import Loader from '@components/Loader/Loader'
import { useAppSelector } from '@hooks/useStore'

function App() {
  const showLoader = useAppSelector((state) => state.loader.loading)

  return (
    <>
      <BrowserRouter>
          <Routes>
                {/* <Route path="/" element={<SignIn />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SiginUp />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route> */}

                    <Route path="/dashboard" element={<Dashboard />} />
                
          </Routes>
      </BrowserRouter>
      {showLoader && <Loader />}
    </>
  );
}

export default App;
