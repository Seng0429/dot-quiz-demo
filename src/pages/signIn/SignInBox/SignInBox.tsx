import { useState, useEffect } from 'react'
import style from './SignInBox.module.css'
import { auth } from '@/services/firebaseService'
import { signInWithEmailAndPassword, User, sendEmailVerification } from 'firebase/auth'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import { appPath } from '@/utils/constants'
// import { saveUserInfo } from '@/app/store/authSlice'
// import { useAppDispatch } from '@/app/customHooks/useStore'
import Modal from '../../../components//Modal/Modal'
import Loader from '../../../components/Loader/Loader'

const SignInBox = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [modalMessage, setModalMessage] = useState<string | null>(null)
    const [userInfo, setUserInfo] = useState<null | User>(null)
    const [showLoader, setShowLoader] = useState(false)
    const [modalMessage2, setModalMessage2] = useState<null | string>(null)
    const [disableSend, setDisableSend] = useState(true)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const loginHandler = () => {

    }

    return (
      <form className={style.signInBox} autoComplete='off'>
            <span className={style.font1}>Username (Email)</span>
            <Input
                className={style.inputField}
                onChange={(e) => setEmail(e.target.value)}
            />
            <span className={style.font1}>Password</span>
            <Input
                className={style.inputField}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                }
            />
        <div className={style.errorMessage}>
            { error && <span>{error}</span> }
        </div>
        <div className={style.buttonWrapper}>
            <Button
                variant="contained"
                className={style.button}
                onClick={loginHandler}
            >
                Sign In
            </Button>
        </div>
        <div className={style.signUpLink}>
            <Link href="/sign-up" color="inherit" underline='hover'>
                Didn&apos;t have an account yet? Click me.
            </Link>
        </div>
      </form>
    )
}

export default SignInBox