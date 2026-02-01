import { 
    signInWithEmailAndPassword,
    UserCredential,
    User,
    onAuthStateChanged,
    getAuth,
    signOut as firebaseSignOut,
    setPersistence,
    browserSessionPersistence 
} from 'firebase/auth'
import { auth } from '../firebase/firebaseService'

const signIn = async (email: string, password: string) => {
    return setPersistence(auth, browserSessionPersistence)
        .then(() => {
            const result = signInWithEmailAndPassword(auth, email, password)
            return result
        })
        .catch((error) => {
            return error
        })
}

const checkEmailStatus = (user: User) => new Promise((resolve) => {
    if (user?.emailVerified) {
        resolve(true) 
    } else {
        resolve(false)
    }
})

const isUserActivated = async (userCredential: UserCredential) => {
    try {
        return await checkEmailStatus(userCredential.user)
    } catch(error) {
        throw new Error('Error verifying user status')
    } 
}

const getCurrentUser = () => {
    const user = getAuth().currentUser

    if(!user) return null
    return user
}

const addAuthListener = (callback: (arg0: {} | null) => void) => {
    const onChange = (user: any) => {
        if (user) {
            callback({})
        } else {
            callback(null)
        }
    }

    return onAuthStateChanged(auth, onChange)
}

const signOut = async () => {
    try {
        await firebaseSignOut(auth)
    } catch(error) {
        throw new Error('Error signing out')
    }
}

export {
    signIn,
    isUserActivated,
    getCurrentUser,
    addAuthListener,
    signOut
}