import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  const { signInWithGoogle, createUserWithEmailPass } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => createUserWithEmailPass(data);
  return (
    <div className="register-form-container">
      <h2>
        Register to Fit<span className="text-highlight">Hub</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Enter your Email"
          {...register("email")}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <br />
        <input
          type="password"
          placeholder="Re-enter Password"
          {...register("confirmPass")}
        />
        <br />
        <input type="submit" value="Register" className="btn" />
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="toggleLink">
          Login
        </Link>
      </p>
      <p>---------- Or ----------</p>
      <button className="btn google-btn" onClick={signInWithGoogle}>
        Continue with Google
      </button>
    </div>
  );
};

export default Register;
