import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/FirebaseConfig";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google SignIn
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Create User
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login User
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout User
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Observer
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscriber();
        }
    }, [])

    const authInfo = {
        googleLogin,
        user,
        logOutUser,
        signUp,
        login,
        loading
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