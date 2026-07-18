import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import { useEffect, useState, createContext } from "react"

interface AuthContextProps {
    children: React.ReactNode
}

const AuthProvider = (props: AuthContextProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  if (loading) {
    return <div>Loading authentication state...</div>
  }

  const AuthContext = createContext<any>(null)
  return <AuthContext.Provider value={{ currentUser }}>{props.children}</AuthContext.Provider>
}

export default AuthProvider