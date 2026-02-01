import { Outlet, Navigate } from 'react-router-dom'
import { getCurrentUser } from '../../services/auth/auth'

const ProtectedRoute = () => {
    const user = getCurrentUser()

    return user ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute