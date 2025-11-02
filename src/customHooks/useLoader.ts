import { showLoading } from '../store/loaderSlice'
import { useAppDispatch } from './useStore'

const useLoader = () => {
    const dispatch = useAppDispatch()

    const showLoader = () => {
        dispatch(showLoading(true))
    }

    const hideLoader = () => {
        dispatch(showLoading(false))
    }

    return {
        showLoader,
        hideLoader
    }
}

export default useLoader