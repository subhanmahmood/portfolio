import React, { useContext, useState, useEffect } from "react";
import { auth } from "lib/firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  UserCredential,
  User,
} from "firebase/auth";

interface AuthContextInterface {
  currentUser: User | null | undefined;
  loading: boolean;
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

const initialState = {
  currentUser: null,
  loading: true,
  signup: (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, "email", "password"),
  login: (email: string, password: string) =>
    signInWithEmailAndPassword(auth, "email", "password"),
  resetPassword: (email: string) => sendPasswordResetEmail(auth, email),
  logout: () => signOut(auth),
};

const AuthContext = React.createContext<AuthContextInterface>(initialState);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>();
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signup,
    login,
    resetPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
