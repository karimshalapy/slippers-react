import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { LastLocationType, useLastLocation } from 'react-router-last-location'
import { FirebaseUserContext } from '../App'

export const useConditionalRedirect = (ifUser?: boolean) => {

    const user = useContext(FirebaseUserContext)
    const history = useHistory()
    const [lastLocationBeforeAuth, setLastLocationBeforeAuth] = useState<LastLocationType>(null)
    const lastLocation = useLastLocation();

    useEffect(() => {
        if (lastLocation?.pathname !== "/auth") setLastLocationBeforeAuth(lastLocation)
    }, [lastLocation])

    useEffect(() => {
        if (ifUser) {
            if (user) {
                if (lastLocationBeforeAuth) {
                    history.push(lastLocationBeforeAuth)
                } else history.push("/")
            }
        } else {
            if (!user) history.replace("/")
        }
    }, [user, history, ifUser, lastLocationBeforeAuth])

    return user
}
export default useConditionalRedirect