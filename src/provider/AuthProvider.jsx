import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    // Create User
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login User
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
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
        logOutUser,
        signUp,
        login
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