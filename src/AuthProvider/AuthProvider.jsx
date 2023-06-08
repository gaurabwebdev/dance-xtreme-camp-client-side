import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

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

  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const checkUser = () => {
      onAuthStateChanged(auth, (presentUser) => {
        console.log(presentUser);
        if (presentUser) {
          setUser(presentUser);

          axios
            .post("http://localhost:5000/jwt", { email: presentUser.email })
            .then((data) => {
              if (data.data.jwToken) {
                localStorage.setItem("accessJwt");
              }
            })
            .catch((error) => {
              if (error) {
                console.log(error.message);
              }
            });

          setLoading(false);
        } else {
          localStorage.removeItem("accessJwt");
        }
      });
    };
    return () => {
      checkUser();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    userLogin,
    setUserProfile,
    userLogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
