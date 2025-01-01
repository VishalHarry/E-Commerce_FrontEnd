import React, { createContext, useState, useEffect } from 'react';
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut 
} from 'firebase/auth';
import app from '../../firebase/firebase.config';

// Create the context
export const AuthContext = createContext();

const auth = getAuth(app); // Properly initialize Firebase Auth
const googleProvider = new GoogleAuthProvider(); // Properly initialize Google Auth Provider

function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // State to store user information
    const [loading, setLoading] = useState(true); // State to track loading status

    // Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign up with Gmail
    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Login with email and password
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Check user availability
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User:", currentUser); // Logs the current user
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe(); // Clean up on unmounting
    }, []); // Dependency array to prevent unnecessary re-renders
    
    const authInfo = {
        user,
        loading,
        createUser,
        signUpWithGmail,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
