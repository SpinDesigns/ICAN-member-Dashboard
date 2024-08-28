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
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import Topbar from "../dashboard/Topbar";
import { UserContext } from "./../../UserContext";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const userInfo = localStorage.getItem("userInfo");
  const user = JSON.parse(userInfo);

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
            <></>
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
            <form className="account-setting">
              <div className="account-set-top">
                <h2>Account Setting</h2>
                <p>View and update your account details, profile, and more.</p>
              </div>
              <div className="account-image">
                <img
                  src="" // Replace with your default image path
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
                  />
                </div>
                <div className="input-div">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lname"
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
                  />
                </div>
                <div className="input-div">
                  <label>Phone number (Optional)</label>
                  <input
                    type="text"
                    name="phoneNumber"
                  />
                </div>
                <div className="input-div">
                  <div className="email-label">
                    <label>DOB</label>
                  </div>
                  <input
                    type="text"
                    name="birthDay"
                  />
                </div>
                <div className="input-div">
                  <label>Secondary Phone number (Optional)</label>
                  <input
                    type="text"
                    name="secondaryPhoneNumber"
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
  
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="save-btn">
                <button type="submit" className="save-changes-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
