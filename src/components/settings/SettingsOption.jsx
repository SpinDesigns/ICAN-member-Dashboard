import React from "react";
import { Link } from "react-router-dom";
import not from "../images/set-not.svg";
import lock from "../images/set-lock.svg";
import setuser from "../images/set-user.svg";
import Topbar from "../dashboard/Topbar";
import admin from "../images/user.png";

const SettingsOption = () => {
  return (
    <>
      <Topbar />
      <h3 className="settings-page-top">Manage Your Account Preferences</h3>
      <div className="set-options-wrap">
        <div className="settings-left set-options">
          <Link to="/settings" className="set-box">
            <img src={setuser} alt="" />
            <div>
              <h3>Account</h3>
              <p>Manage your account preferences</p>
            </div>
          </Link>
          <Link to="/settings/password" className="set-box">
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
        <div className="settings-right set-right">
          <form className="account-setting">
            <div className="account-set-top">
              <h2>Account Setting</h2>
              <p>View and update your account details, profile, and more.</p>
            </div>
            <div className="account-image">
              <img src={admin} alt="" />
              <div className="img-div">
                <p>We only support .JPG, .JPEG, or .PNG file.</p>
                <div className="account-set-btn">
                  <button className="upload-btn">Upload your picture</button>
                  <button className="delete-btn">Delete Image</button>
                </div>
              </div>
            </div>
            <div className="user-inputs">
              <div className="input-div">
                <label for="">First Name</label>
                <input type="text" />
              </div>
              <div className="input-div">
                <label for="">Last Name</label>
                <input type="text" />
              </div>
              <div className="input-div">
                <div className="email-label">
                  <label for="">Email</label>
                  <p>Change</p>
                </div>
                <input type="text" />
              </div>
              <div className="input-div">
                <label for="">Phone number (Optional)</label>
                <input type="text" />
              </div>
            </div>
            <div className="address-inputs">
              <h1>Personal Address</h1>
              <div>
                <div className="user-inputs">
                  <div className="input-div">
                    <label for="">Country or Region</label>
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <label for="">City</label>
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <label for="">Address</label>
                    <input type="text" />
                  </div>
                  <div className="input-div">
                    <label for="">Postal Code</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="save-btn">
              <button className="save-changes-btn">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettingsOption;
