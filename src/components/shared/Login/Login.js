import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInWithGoogle, signInWithEmailPass } = useAuth();
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => signInWithEmailPass(data);
  return (
    <div className="login-form-container">
      <h2>
        Login to Fit<span className="text-highlight">Hub</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <br />
        <input type="submit" value="Login" className="btn" />
      </form>
      <p>
        New to FitHub?{" "}
        <Link to="/register" className="toggleLink">
          Create Account
        </Link>
      </p>
      <p>---------- Or ----------</p>
      <button className="btn google-btn" onClick={signInWithGoogle}>
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
