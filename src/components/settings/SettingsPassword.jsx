import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import './settings.css';
import search from '../images/search.svg';
import clock from '../images/clock.svg';
import check from '../images/check-nav.svg';
import arrow from '../images/arrow-nav.svg';
import notification from '../images/notification.svg';
import divider from '../images/divider.svg';
import back from '../images/back.svg';
import not from '../images/set-not.svg';
import cal from '../images/calendar.svg';
import env from '../images/envelope.svg';
import lock from '../images/set-lock.svg';
import setuser from '../images/set-user.svg';
import Badge from '@mui/material/Badge';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import load from "../images/load.gif";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Topbar from '../dashboard/Topbar';
import axios from 'axios';
import { toast } from 'react-toastify';

const SettingsPassword = () => {
  const userInfo = localStorage.getItem('userInfo');
  const user = JSON.parse(userInfo);
  const token = localStorage.getItem("authToken")

  const [formData, setFormData] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: '',
  });
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [newcPasswordVisible, setNewcPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleNewcPasswordVisibility = () => {
    setNewcPasswordVisible(!newcPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password.length < 8) {
      setErrors({ password: 'Password must be at least 8 characters long.' });
      return;
    }

    if (formData.password !== formData.passwordConfirm) {
      setErrors({ passwordConfirm: 'Passwords do not match.' });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.patch(
        "https://ican-abeokuta-backend.onrender.com/api/v1/user/updateMyPassword",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success('Password changed successfully!');
      console.log('Password changed successfully:', response.data);
      setFormData({
        passwordCurrent: '',
        password: '',
        passwordConfirm: '',
      });
      setErrors({});
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrors({ passwordCurrent: 'Incorrect password.' });
        console.log(error.response.data)
      } else if (error.response && error.response.data && error.response.data.message) {
        setErrors({ passwordCurrent: error.response.data.message });
      } else {
        toast.error('There was an error changing the password.');
        console.error('There was an error changing the password:', error.response ? error.response.data : error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Sidebar />

      <div className="b-content">
        <Topbar />
        <div className="nav-bar">
          <h3>Payment</h3>
          <div className="nav-items">
            <img src={cal} alt="" />
            <img src={search} alt="" />
            <Popover>
              <PopoverTrigger>
                <Button style={{ background: "transparent" }}>
                  <Badge badgeContent={3}>
                    <button>
                      <img src={notification} alt="" />
                    </button>
                  </Badge>
                </Button>
              </PopoverTrigger>
              <PopoverContent style={{ width: "100%" }}>
                <PopoverArrow />
                <PopoverBody>
                  <div className="not-nav">
                    <div className="top">
                      <h2>Notification</h2>
                    </div>
                    <div className="mid">
                      <div className="msg">
                        <div className="clk">
                          <img src={clock} alt="" />
                          <p>1 min ago</p>
                        </div>
                        <div className="hp-not">
                          <h2>New Bookings #308534</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit........
                          </p>
                        </div>
                        <button className="mr">
                          <img src={check} alt="" />
                          <p className="np">Mark as Read</p>
                        </button>
                      </div>
                      <div className="msg">
                        <div className="clk">
                          <img src={clock} alt="" />
                          <p>1 min ago</p>
                        </div>
                        <div className="hp-not">
                          <h2>New Bookings #308534</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit........
                          </p>
                        </div>
                        <button className="mr">
                          <img src={check} alt="" />
                          <p className="np">Mark as Read</p>
                        </button>
                      </div>
                    </div>
                    <div className="down">
                      <button className="mr">
                        <img src={check} alt="" />
                        <p>Mark All as Read</p>
                      </button>
                      <button>
                        <p>See More</p>
                        <img src={arrow} alt="" />
                      </button>
                    </div>
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <img src={env} alt="" />
            <img src={divider} alt="" />

            <div className="mem-deets">
              <img className="mem" src="" alt="" />
              <div className="name-post">
                <div>
                  <h4>
                    {user.fname} {user.lname}
                  </h4>
                  <p>Member</p>
                </div>
              </div>
            </div>
            <img src={user.photo} alt="" />
          </div>
        </div>

        <h3 className="settings-page-top">Manage Your Account Preferences</h3>

        <div className="settings">
          <div className="settings-left">
            <Link to="/settings" className="set-box">
              <img src={setuser} alt="" />
              <div>
                <h3>Account</h3>
                <p>Manage your account preferences</p>
              </div>
            </Link>
            <Link to="/settings/password" className="set-box set-active">
              <img src={lock} alt="" />
              <div>
                <h3>Password</h3>
                <p>Manage Your Account Security Here</p>
              </div>
            </Link>
            <Link to="/settings/notification" className="set-box">
              <img src={not} alt="" />
              <div>
                <h3>Push Notifications</h3>
                <p>Customize Your Notification Preferences</p>
              </div>
            </Link>
          </div>

          <Link to="/settings/option" className="back">
            <img src={back} alt="" />
            Back
          </Link>

          <form className="settings-right" onSubmit={handleSubmit}>
            <div className="password">
              <div>
                <h2>Change your password.</h2>
              </div>
              <div className="password-inputs">
                <div className="top-input">
                  <label htmlFor="passwordCurrent">Current password</label>
                  <input
                    type={oldPasswordVisible ? "text" : "password"}
                    value={formData.passwordCurrent}
                    onChange={handleChange}
                    required
                    name="passwordCurrent"
                    id="passwordCurrent"
                  />
                  <p onClick={toggleOldPasswordVisibility} className="pass-btn">
                    {oldPasswordVisible ? (
                      <FiEye className="i" />
                    ) : (
                      <FiEyeOff className="i" />
                    )}
                  </p>
                  {errors.passwordCurrent && (
                    <span className="log-err">*{errors.passwordCurrent}</span>
                  )}
                </div>
                <div className="top-input">
                  <label htmlFor="password">
                    New password (Minimum of 8 characters)
                  </label>
                  <input
                    type={newPasswordVisible ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    name="password"
                    id="password"
                  />
                  <p onClick={toggleNewPasswordVisibility} className="pass-btn">
                    {newPasswordVisible ? (
                      <FiEye className="i" />
                    ) : (
                      <FiEyeOff className="i" />
                    )}
                  </p>
                  {errors.password && (
                    <span className="log-err">*{errors.password}</span>
                  )}
                </div>
                <div className="top-input">
                  <label htmlFor="passwordConfirm">Confirm new password</label>
                  <input
                    type={newcPasswordVisible ? "text" : "password"}
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    required
                    name="passwordConfirm"
                    id="passwordConfirm"
                  />
                  <p
                    onClick={toggleNewcPasswordVisibility}
                    className="pass-btn"
                  >
                    {newcPasswordVisible ? (
                      <FiEye className="i" />
                    ) : (
                      <FiEyeOff className="i" />
                    )}
                  </p>
                  {errors.passwordConfirm && (
                    <span className="log-err">*{errors.passwordConfirm}</span>
                  )}
                </div>
                <div className="password-btn">
                  <button
                    type="submit"
                    disabled={loading}
                    className="password-button"
                  >
                    {loading ? (
                      <img className="subload" src={load} alt="Loading..." />
                    ) : (
                      "Save changes"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPassword;
