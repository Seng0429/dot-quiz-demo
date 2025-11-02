import { signInWithEmailAndPassword, UserCredential, User } from 'firebase/auth'
import { auth } from '../firebase/firebaseService'

export const signIn = async (email: string, password: string) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password)
        return result
        // { userId }
    } catch(error) {
        throw new Error('Error signing in')
    }
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
    try {
        return auth.currentUser
    } catch(error) {
        throw new Error('Error getting current user')
    }
}

// export const addAuthListener = (callback) => {
//     const onChange = (user) => {
//         if (user) {
//             callback({})
//         } else {
//             callback(null)
//         }
//     }

//     return onAuthStateChanged(onChange)
// }

// export const signOut = async () => {
//     try {
//         await firebase.auth().signOut()
//     } catch(error) {
//         throw new Error('Error signing out')
//     }
// }

const authService = {
    signIn,
    isUserActivated,
    getCurrentUser,
    // addAuthListener,
    // signOut
}
export default authService