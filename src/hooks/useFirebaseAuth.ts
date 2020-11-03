import { useEffect, useState } from 'react';
import { auth } from '../Firebase'
import firebase from 'firebase/app'

export const useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unlisten = auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? setAuthUser(authUser)
                    : setAuthUser(null);
            },
        );
        return () => {
            unlisten();
        }
    });

    return authUser
}

export default useFirebaseAuth;