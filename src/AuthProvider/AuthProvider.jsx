import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const gProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const setUserProfile = (first_name, last_name, photo_url) => {
    const fullName = first_name + " " + last_name;
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photo_url,
    });
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, gProvider);
  };

  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const checkUser = onAuthStateChanged(auth, (presentUser) => {
      setUser(presentUser);
      if (presentUser) {
        axios
          .post("https://dance-xtreme-school-server-site.vercel.app/jwt", {
            email: presentUser?.email,
          })
          .then((data) => {
            if (data.data.jwToken) {
              localStorage.setItem("accessJwt", data.data.jwToken);
              setLoading(false);
            }
          })
          .catch((error) => {
            if (error) {
              console.log(error.message);
            }
          });
      } else {
        localStorage.removeItem("accessJwt");
      }
      setLoading(false);
    });
    return () => {
      checkUser();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    userLogin,
    googleLogin,
    setUserProfile,
    userLogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
