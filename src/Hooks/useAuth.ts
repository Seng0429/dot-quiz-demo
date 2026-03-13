import { useEffect, useState } from "react"
import {
    addAuthListener
} from "../services/auth/auth" 
import { User } from "firebase/auth";

export const useAuth = () => {
    const [authInfo, setAuthInfo] = useState({
        isLoading: true,
        user: null as User | null
    })

    useEffect(() => {
        const unsubscribe = addAuthListener((user: any) => {
            setAuthInfo({ 
                isLoading: false,
                user: user
            })
        })

        return unsubscribe
    }, [])

    return authInfo
}