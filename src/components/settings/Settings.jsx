import Sidebar from "../sidebar/Sidebar";
import "./settings.css";
import search from "../images/search.svg";
import not from "../images/set-not.svg";
import lock from "../images/set-lock.svg";
import setuser from "../images/set-user.svg";
import clock from "../images/clock.svg";
import back from "../images/back.svg";
import check from "../images/check-nav.svg";
import arrow from "../images/arrow-nav.svg";
import cal from "../images/calendar.svg";
import env from "../images/envelope.svg";
import drop from "../images/drop-down.svg";
import notification from "../images/notification.svg";
import divider from "../images/divider.svg";
import admin from "../images/user.png";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import load from "../images/load.gif";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import Topbar from "../dashboard/Topbar";
// import { UserContext } from "./../../UserContext";
import { useState } from "react";
// import { ToastContainer } from "react-toastify";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Settings = () => {
  const userInfo = localStorage.getItem("userInfo");
  const user = JSON.parse(userInfo);
  // const token = localStorage.getItem("token"); // Retrieve token from localStorage

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    photo: null,
    fname: "",
    lname: "",
    email: "",
    birthDay: "",
    phoneNumber: "",
    secondaryPhoneNumber: "",
    address: "", // Added missing address field
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
      const token = localStorage.getItem("authToken"); 
      // console.log("Token:", token);
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.patch(
        "https://ican-abeokuta-backend.onrender.com/api/v1/user/updateMe",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedUserInfo = {
        ...user, // Spread the existing user info
        ...response.data.data.user, // Merge it with the updated data from the response
      };

      // Save the updated user information back to localStorage
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));


      toast.success("Profile updated successfully!");
      console.log("Profile updated successfully!:", response.data);
      setFormData({
        photo: null,
        fname: "",
        lname: "",
        email: "",
        birthDay: "",
        phoneNumber: "",
        secondaryPhoneNumber: "",
        address: "",
      });
      setErrors({});
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrors({ profile: "Error updating profile" });
        console.log(error.response);
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrors({ profile: error.response.data.message });
        console.log(error.response)
      } else {
        toast.error("There was an error updating the profile.");
        console.error(
          "There was an error updating the profile:",
          error.response ? error.response.data : error.message
        );
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
                    <button onClick={() => console.log("clicked")}>
                      <img src={notification} alt="" />
                    </button>
                  </Badge>
                </Button>
              </PopoverTrigger>
              <PopoverContent style={{ width: "100%" }}>
                <PopoverArrow />
                <PopoverBody>
                  <div className="not-nav">
                    {/* Notification content here */}
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <img src={env} alt="" />
            <img src={divider} alt="" />

            <div className="mem-deets">
              <img className="mem" src={user.photo || admin} alt="" />
              <div className="name-post">
                <div>
                  <h4>
                    {user.fname} {user.lname}
                  </h4>
                  <p>Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="settings-page-top">Manage Your Account Preferences</h3>

        <div className="settings">
          <div className="settings-left">
            <Link to="/settings" className="set-box set-active">
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

          <Link to="/settings/option" className="back">
            <img src={back} alt="" />
            Back
          </Link>
          <div className="settings-right">
            <form className="account-setting" onSubmit={handleSubmit}>
              <div className="account-set-top">
                <h2>Account Setting</h2>
                <p>View and update your account details, profile, and more.</p>
              </div>
              <div className="account-image">
                <img
                  src={user.photo || admin} // Use the user's photo or a default image
                  alt=""
                />
                <div className="img-div">
                  <p>We only support .JPG, .JPEG, or .PNG file.</p>
                  <div className="account-set-btn">
                    <label htmlFor="pic-upload" className="delete-btn">
                      Upload Picture
                    </label>
                    <input
                      id="pic-upload"
                      type="file"
                      name="photo"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="user-inputs">
                <div className="input-div">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="fname"
                    onChange={handleChange}
                    value={formData.fname}
                  />
                </div>
                <div className="input-div">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    onChange={handleChange}
                    value={formData.lname}
                  />
                </div>
                <div className="input-div">
                  <div className="email-label">
                    <label>Email</label>
                    <p>Change</p>
                  </div>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div className="input-div">
                  <label>Phone number (Optional)</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                  />
                </div>
                <div className="input-div">
                  <div className="email-label">
                    <label>DOB(mm-dd-yyyy)</label>
                  </div>
                  <input
                    type="text"
                    name="birthDay"
                    onChange={handleChange}
                    value={formData.birthDay}
                  />
                </div>
                <div className="input-div">
                  <label>Secondary Phone number (Optional)</label>
                  <input
                    type="text"
                    name="secondaryPhoneNumber"
                    onChange={handleChange}
                    value={formData.secondaryPhoneNumber}
                  />
                </div>
              </div>
              <div className="address-inputs">
                <h1>Personal Address</h1>
                <div>
                  <div className="user-inputs">
                    <div className="input-div" style={{ width: "100%" }}>
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        onChange={handleChange}
                        value={formData.address}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {errors.profile && (
                <span className="log-err">*{errors.profile}</span>
              )}
              <div className="save-btn">
                <button
                  type="submit"
                  className="save-changes-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <img className="subload" src={load} alt="Loading..." />
                  ) : (
                    "Save changes"
                  )}
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
