import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const useFirebase = () => {
  const auth = getAuth(app);

  // States
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  // create accout using Email & Pass
  const createUserWithEmailPass = (data) => {
    if (data.password === data.confirmPass) {
      if (data.password.length >= 6) {
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((result) => {
            setUser(result.user);
            alert(
              "Registration Successful. You will be redirect to login page."
            );
            navigate("/login");
          })
          .catch((error) => alert(error.message));
      } else {
        alert("Password length should be at least 6 character");
      }
    } else {
      alert("Password doesn't Matched. Please Re-enter the password.");
    }
  };

  // Email & Password Sign In
  const signInWithEmailPass = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((result) => {
        setUser(result.user);
        const route = location.state?.from || "/";
        navigate(route);
      })
      .catch((error) => alert(error.message));
  };

  // Google Sign In
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const route = location.state?.from || "/";
        navigate(route);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  // Logout

  const logOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .finally(() => setIsLoading(false));
  };

  // Observer for Auth State changes
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    user,
    error,
    logOut,
    isLoading,
    signInWithGoogle,
    signInWithEmailPass,
    createUserWithEmailPass,
  };
};

export default useFirebase;
