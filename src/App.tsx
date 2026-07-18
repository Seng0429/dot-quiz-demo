import './App.css'
import '@services/firebase/firebaseService'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from '@/pages/SignInBoard/SignIn'
import Dashboard from '@/pages/dashboard/Dashboard'
import ProtectedRoute from '@/components/atoms/ProtectedRoute/ProtectedRoute'
import Loader from '@/components/atoms/Loader/Loader'
import { useAppSelector } from '@/hooks/useStore'
// import EditQuizPage from '@pages/EditQuizPage/EditQuizPage'
import EditQuiz from '@/pages/QuizEditBoard/QuizEditBoard'


function App() {
  const showLoader = useAppSelector((state) => state.loader.loading)

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignIn />} />
              <Route element={<ProtectedRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path='/create' element={<EditQuiz mode="create" />} />
                  <Route path='/edit/:id/' element={<EditQuiz mode="edit" />} />
              </Route>
          </Routes>
      </BrowserRouter>
      {showLoader && <Loader />}
    </>
  );
}

export default App;
