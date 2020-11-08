import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseUserContext } from '../App'

export const useConditionalRedirect = (ifUser?: boolean) => {

    const user = useContext(FirebaseUserContext)
    const history = useHistory()

    useEffect(() => {
        if (ifUser) {
            if (user) history.replace("/")
        } else {
            if (!user) history.replace("/")
        }
    }, [user, history, ifUser])

    return user
}
export default useConditionalRedirect