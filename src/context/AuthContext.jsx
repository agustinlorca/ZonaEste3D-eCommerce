import { createContext, useState, useEffect} from "react"

import { auth} from "../firebase/credentials"
import {createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
} from "firebase/auth"

export const AuthCtxt = createContext()


const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthReady, setIsAuthReady] = useState(false);
  const register = (email, password) => createUserWithEmailAndPassword(auth,email,password);
  const login = async (email,password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const currentUser = userCredential.user;
    setUser(currentUser);
  };

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth,googleProvider);
    const currentUser = userCredential.user;
    setUser(currentUser);
  }
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw new Error('El correo electrónico no está asociado con ninguna cuenta');;
    }
  };

  const logout = () => signOut(auth);
  
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setIsAuthReady(true);
    });
  }, []);

  return (
    <AuthCtxt.Provider value={{user,isAuthReady,register, login,logout,loginWithGoogle,resetPassword}}>
      {children}
    </AuthCtxt.Provider>
  )
}

export default AuthContext


