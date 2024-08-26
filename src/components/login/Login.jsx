import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import padlock from "../images/padlock.svg";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import load from "../images/load.gif";
import "./login.css";
import useAuth from "../useAuth";

const Login = () => {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    memberId: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const login = useAuth();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = Validation(values);
    setErrors(err);

    if (!err.memberId && !err.password) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://ican-abeokuta-backend.onrender.com/api/v1/user/login",
          values
        );

        console.log("Response:", response.data);
        console.log("Token:", response.data.token);
         localStorage.setItem("authToken", response.data.token);
         localStorage.setItem(
          "userInfo",
          JSON.stringify(response.data.data.user)
        );
        toast.success("Login successful!");
        // login(response.data.token);
        navigate("/dashboard");

        // if (response.status === 200) {

        // Redirect to the homepage after successful login
        // Ensure this is the correct path
        form.reset();
        // } else {
        //   setServerError("No user found! Please check your credentials.");
        // }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            setServerError(
              "Incorrect member ID or password. Please try again."
            );
            toast.error("Incorrect member ID or password. Please try again.");
          } else {
            setServerError(
              error.response.data.message ||
                "An error occurred. Please try again"
            );
          }
        } else if (error.request) {
          setServerError(
            "No response from the server. Please try again later."
          );
        } else {
          setServerError("");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="login-wrap">
        <div className="login">
          {serverError && <p className="server-error">{serverError}</p>}
          <form onSubmit={handleSubmit}>
            <div className="membership-id">
              <label htmlFor="memberId">Membership ID</label>
              <input
                type="text"
                name="memberId"
                id="memberId"
                onChange={handleInput}
              />
              {errors.memberId && (
                <span className="log-err">*{errors.memberId}</span>
              )}
            </div>
            <div className="password-i">
              <label htmlFor="password">Password</label>
              <input
                type={PasswordVisible ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="log-err">*{errors.password}</span>
              )}
              <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {PasswordVisible ? (
                  <FiEye className="i" />
                ) : (
                  <FiEyeOff className="i" />
                )}
              </span>
            </div>
            <div className="checkbox">
              <input
                className="check"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? (
                <img className="subload" src={load} alt="Loading..." />
              ) : (
                "Login"
              )}
            </button>
            <ToastContainer />
            <h2 className="register-link">
              Don't have an Account? <Link to="/register">Register</Link>
            </h2>
            <div className="secured">
              <img src={padlock} alt="Padlock" />
              <h4>All information is safely secured</h4>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
