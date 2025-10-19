import { useState, useEffect } from 'react'
import style from './index.module.css'
import illustrator1 from '../../assets/images/illustrator1.png'
import SignInBox from './SignInBox/SignInBox'
import useWindowResize from '../../customHooks/useWindowResize'

const SignIn = () => {
    const windowResize = useWindowResize()

    return (
        <div className={style.page}>
            {
                windowResize.width >= 840 &&
                <div className={style.pageLeft}>
                    <div className={style.pageLeftBackground}>
                        <h2>Welcome to dot Quiz</h2>
                        <div className={style.imageContainer}>
                            <img src={illustrator1} className={style.leftImage}/>
                        </div>
                    </div>
                </div>
            }
            <div className={style.pageRight}>
                {
                    windowResize.width < 840 &&
                        <h4 className={style.title}>
                            Welcome to dotQuiz!
                        </h4>
                }
                <SignInBox/>
            </div>
        </div>
    )
}

export default SignIn