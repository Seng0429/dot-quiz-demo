import { useState } from 'react'
import style from './SignInBox.module.css'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import useLoader from '../../../customHooks/useLoader'
import {
    signIn,
    isUserActivated
} from '../../../services/auth/auth'
import Modal from '../../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'

const SignInBox = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [modalMessage, setModalMessage] = useState<string | null>(null)
    const [disableSend, setDisableSend] = useState(true)

    const { showLoader, hideLoader } = useLoader()
    const navigate = useNavigate()

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const loginHandler = async () => {
        try {
            showLoader()
            const userCredential = await signIn(email, password)
            let isActivated = false

            if (userCredential) {
                isActivated = await isUserActivated(userCredential) as boolean
            } else {
                throw new Error('Error to check email status')
            }
            
            hideLoader()

            if (isActivated) {
                navigate('/dashboard')
                hideLoader()
            }
            
        } catch(error: any) {
            hideLoader()
            setError(error ?? 'Something went wrong')
        }

    }

    const cancelResendHandler = () => {
        setModalMessage(null)
        setError(null)
    }

    const resendEmailHandler = () => {

    }

    return (
        <>
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
                <Button
                    variant="contained"
                    className={style.button}
                    onClick={loginHandler}
                >
                    Sign In
                </Button>
                <div className={style.signUpLink}>
                    <Link href="/sign-up" color="inherit" underline='hover'>
                        Didn&apos;t have an account yet? Click me.
                    </Link>
                </div>
            </form>
            {
                modalMessage &&
                    <Modal showModal={!!modalMessage}>
                        <div className={style.modal}>
                            {modalMessage}
                        </div>
                        <div  className={style.modalBody}>
                            <Button
                                className={style.button}
                                onClick={cancelResendHandler}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                className={style.button}
                                onClick={resendEmailHandler}
                                disabled={disableSend}
                            >
                                Send
                            </Button>
                        </div>
                    </Modal>
            }
      </>
    )
}

export default SignInBox