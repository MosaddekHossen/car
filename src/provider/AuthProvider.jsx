import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/FirebaseConfig";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // Google SignIn
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Logout User
    const logOutUser = () => {
        return signOut(auth);
    }

    // Observer
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscriber();
        }
    }, [])

    const authInfo = {
        googleLogin,
        user,
        logOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;