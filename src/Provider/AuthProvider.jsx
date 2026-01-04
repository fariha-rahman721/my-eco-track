import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { app } from '../firebase/firebase.config';
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   updateProfile
} from 'firebase/auth';

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   };

   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const updateUser = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData)
   }

   const logOut = () => {
      return signOut(auth)
   }

   // Existing hook: sets user state
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser)
         setLoading(false)
      });
      return () => {
         unsubscribe();
      }
   }, [])

   
   useEffect(() => {
      if (!user) return; 

      const sendUserToBackend = async () => {
         try {
            const token = await user.getIdToken(); // get Firebase token

            await fetch("https://eco-track-server-two.vercel.app/users", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}` // include token
               },
               body: JSON.stringify({
                  name: user.displayName,
                  email: user.email,
                  photoURL: user.photoURL,
               }),
            });
         } catch (error) {
            console.error("Failed to sync user with backend:", error);
         }
      };

      sendUserToBackend();
   }, [user]);

   const authData = {
      user,
      setUser,
      createUser,
      logOut,
      signIn,
      loading,
      setLoading,
      updateUser,
   };
   return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;
