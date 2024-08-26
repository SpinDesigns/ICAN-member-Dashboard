import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar'
import './settings.css'
import search from '../images/search.svg'
import clock from '../images/clock.svg'
import check from '../images/check-nav.svg'
import arrow from '../images/arrow-nav.svg'
import notification from '../images/notification.svg'
import divider from '../images/divider.svg'
import back from '../images/back.svg'
import not from '../images/set-not.svg'
import cal from '../images/calendar.svg'
import env from '../images/envelope.svg'
import drop from '../images/drop-down.svg'
import lock from '../images/set-lock.svg'
import setuser from '../images/set-user.svg'
import Badge from '@mui/material/Badge';
import eye from '../images/eye-off.svg'
import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom'
import Topbar from '../dashboard/Topbar'
import { FiEye, FiEyeOff } from 'react-icons/fi';

const SettingsPassword = () => {

    
  // State for old password
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState('');

  // State for new password
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  // Toggle functions
  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
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
              <img src={search} alt=""/>
              <Popover>
            <PopoverTrigger>
              <Button style={{background: 'transparent'}}>
                <Badge badgeContent={3}>
                  <button onClick={()=>console.log("clicked")} ><img src={notification} alt=""/></button>
                </Badge>       
                 
              </Button>
            </PopoverTrigger>
            <PopoverContent  style={{width: '100%'}}>
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
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit........</p>
                        </div>
                        <button className="mr">
                          <img src={check} alt="" />
                          <p className='np'>Mark as Read</p>
                        </button>
                      </div>
                      <div className="msg">
                        <div className="clk">
                          <img src={clock} alt="" />
                          <p>1 min ago</p>
                        </div>
                        <div className="hp-not">
                          <h2>New Bookings #308534</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit........</p>
                        </div>
                        <button className="mr">
                          <img src={check} alt="" />
                          <p className='np'>Mark as Read</p>
                        </button>
                      </div>
                      <div className="msg">
                        <div className="clk">
                          <img src={clock} alt="" />
                          <p>1 min ago</p>
                        </div>
                        <div className="hp-not">
                          <h2>New Bookings #308534</h2>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit........</p>
                        </div>
                        <button className="mr">
                          <img src={check} alt="" />
                          <p className='np'>Mark as Read</p>
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
                <img src={env} alt=""/>
              <img src={divider} alt=""/>

              <div className="mem-deets">
                  <img className="mem" src="" alt=""/>
                  <div className="name-post">
                      <div>
                          <h4>Seun Ogunme</h4>
                          <p>Chairman</p>
                      </div>
                  </div>
              </div>
              <img src={drop} alt=""/>
            </div>
        </div>

        <h3 className="settings-page-top">Manage Your Account Preferences</h3>

          <div className="settings">
              <div className="settings-left">
                <></>
                  <Link to='/settings'  className="set-box">
                      <img src={setuser} alt=""/>
                      <div>
                          <h3>Account</h3>
                          <p>Manage your account preferences</p>
                      </div>
                  </Link>
                  <Link to='/settings/password'  className="set-box set-active">
                      <img src={lock} alt=""/>
                      <div>
                          <h3>Password</h3>
                          <p>Manage Your Account Security Here</p>
                      </div>
                  </Link>
                  <Link to='/settings/notification' className="set-box">
                      <img src={not} alt=""/>
                      <div>
                          <h3>Push Notifications</h3>
                          <p>Customize Your Notification Preferences</p>
                      </div>
                  </Link>
              </div>

              <Link to='/settings/option' className="back">
                  <img src={back} alt="" />
                  Back
                </Link>

              <form className="settings-right">
                  <div className="password">
                      <div>
                          <h2>Password</h2>
                          <p>Change or view your password.</p>
                      </div>
                      <div className="password-inputs">
                          <div className="top-input">
                              <label for="">Old password</label>
                              <input type={oldPasswordVisible ? 'text' : 'password'}
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)} required name="" id=""/>
                              <button onClick={toggleOldPasswordVisibility} className='pass-btn'>
                                {oldPasswordVisible ? <FiEye className='i' /> : <FiEyeOff className='i' />}
                              </button>
                              
                          </div>
                          <div className="bottom-input">
                              <label for="">Input password</label>
                              <input type={newPasswordVisible ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)} required name="" id=""/>
                              <button onClick={toggleNewPasswordVisibility} className='pass-btn'>
                                {newPasswordVisible ? <FiEye className='i' /> : <FiEyeOff className='i' />}
                              </button>
                              <p>Minimum 6 characters</p>
                          </div>
                          
                      </div>
                      
                  </div>
                  <div className="password-btn">
                      <button type='submit' className="password-button">Edit Password</button>
                  </div>
                </form>
            </div>
          </div>

    </div>
  )
}

export default SettingsPassword