import React, { useState } from 'react'
import search from '../images/search.svg'
import notification from '../images/notification.svg'
import clock from '../images/clock.svg'
import check from '../images/check-nav.svg'
import arrow from '../images/arrow-nav.svg'
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
  import Badge from '@mui/material/Badge';
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
  
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import logout from '../images/logout.svg'
import stroke from '../images/stroke.svg'
import menu from '../images/menu.svg'

const Topbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isModal, setIsModal] = useState(false);


  return (
    <>
        <div className="topbar">
            <div className="nav-bar topbar">
            <img ref={btnRef} onClick={onOpen} src={menu} alt="" />
            <div className="nav-items">
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
          <img className='user' src='' alt="" />
            </div>
              </div>
        </div>






<Drawer
isOpen={isOpen}
placement='left'
onClose={onClose}
finalFocusRef={btnRef}
>
<DrawerOverlay />
<DrawerContent>
  <DrawerCloseButton />

  <DrawerBody>
    
  <div className="side-nav-menu">
    <div className="logo">
      <Link to='/' className='logo'>
          <img src={logo} alt="" />
          <p>ABEOKUTA & DISTRICT SOCIETY</p>
      </Link>
      <img src={stroke} alt="" />
    </div>
    <p className='m-menu'>MAIN MENU</p>
    <div className='page-div'>
      <div className="pages">
        <NavLink to='/dashboard' className="links" >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="smart-home">
            <path id="Path" d="M17.4167 7.98418L12.5281 4.18185C11.6455 3.49524 10.4095 3.49524 9.52695 4.18185L4.63745 7.98418C4.04198 8.44725 3.69384 9.15944 3.6942 9.91376V16.5138C3.6942 17.5263 4.51501 18.3471 5.52753 18.3471H16.5275C17.5401 18.3471 18.3609 17.5263 18.3609 16.5138V9.91376C18.3609 9.15935 18.0125 8.4471 17.4167 7.98418" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            <path id="Path_2" d="M14.6667 13.7499C12.6408 14.9718 9.35733 14.9718 7.33333 13.7499" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
          </svg>
          <p>Dashboard</p>
        </NavLink>
        <NavLink to='/payment' className="links">
          <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.207 0.015625L18.7227 2.9375H17.3047L17.0898 1.60547L9.3125 2.9375H1.14844L18.207 0.015625ZM0.375 3.625H1.0625H2.09375H18.9375H19.625V4.3125V13.9375V14.625H18.9375H1.0625H0.375V13.9375V5.34375V4.3125V3.625ZM3.76953 5C3.79818 5.14323 3.8125 5.25781 3.8125 5.34375C3.8125 5.83073 3.64062 6.24609 3.29688 6.58984C2.98177 6.90495 2.58073 7.0625 2.09375 7.0625C2.00781 7.0625 1.89323 7.04818 1.75 7.01953V11.2305C1.89323 11.2018 2.00781 11.1875 2.09375 11.1875C2.58073 11.1875 2.98177 11.3594 3.29688 11.7031C3.64062 12.0182 3.8125 12.4193 3.8125 12.9062C3.8125 12.9922 3.79818 13.1068 3.76953 13.25H16.2305C16.2018 13.1068 16.1875 12.9922 16.1875 12.9062C16.1875 12.4193 16.3451 12.0182 16.6602 11.7031C17.0039 11.3594 17.4193 11.1875 17.9062 11.1875C17.9922 11.1875 18.1068 11.2018 18.25 11.2305V7.01953C18.1068 7.04818 17.9922 7.0625 17.9062 7.0625C17.4193 7.0625 17.0039 6.90495 16.6602 6.58984C16.3451 6.24609 16.1875 5.83073 16.1875 5.34375C16.1875 5.25781 16.2018 5.14323 16.2305 5H3.76953ZM7.55078 6.71875C8.23828 6.03125 9.05469 5.6875 10 5.6875C10.9453 5.6875 11.7474 6.03125 12.4062 6.71875C13.0938 7.3776 13.4375 8.17969 13.4375 9.125C13.4375 10.0703 13.0938 10.8867 12.4062 11.5742C11.7474 12.2331 10.9453 12.5625 10 12.5625C9.05469 12.5625 8.23828 12.2331 7.55078 11.5742C6.89193 10.8867 6.5625 10.0703 6.5625 9.125C6.5625 8.17969 6.89193 7.3776 7.55078 6.71875ZM11.4609 7.66406C11.0599 7.26302 10.5729 7.0625 10 7.0625C9.42708 7.0625 8.9401 7.26302 8.53906 7.66406C8.13802 8.0651 7.9375 8.55208 7.9375 9.125C7.9375 9.69792 8.13802 10.1849 8.53906 10.5859C8.9401 10.987 9.42708 11.1875 10 11.1875C10.5729 11.1875 11.0599 10.987 11.4609 10.5859C11.862 10.1849 12.0625 9.69792 12.0625 9.125C12.0625 8.55208 11.862 8.0651 11.4609 7.66406Z" fill="#3D4999"/>
          </svg>
          <p>Payment History</p>
        </NavLink> 
        <NavLink to='/message' className="links">
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0550003 0.1875H0.7425H13.1175H13.805V0.875V10.5V11.1875H13.1175H7.18781L3.92219 13.7656L2.805 14.7109V13.25V11.1875H0.7425H0.0550003V10.5V0.875V0.1875ZM1.43 1.5625V9.8125H3.4925H4.18V10.5V11.7891L6.50031 9.98438L6.67219 9.8125H6.93H12.43V1.5625H1.43ZM15.18 2.9375H19.305V13.9375H16.555V17.4609L12.1722 13.9375H5.81281L7.53156 12.5625H12.6878L15.18 14.5391V12.5625H17.93V4.3125H15.18V2.9375Z" fill="#ECEDF5"/>
          </svg>
          <p>Messages</p>
        </NavLink> 
        <NavLink to='/resources' className="links">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11.9167 1.83333H5.50002C5.01379 1.83333 4.54747 2.02648 4.20366 2.3703C3.85984 2.71412 3.66669 3.18043 3.66669 3.66666V18.3333C3.66669 18.8196 3.85984 19.2859 4.20366 19.6297C4.54747 19.9735 5.01379 20.1667 5.50002 20.1667H16.5C16.9863 20.1667 17.4526 19.9735 17.7964 19.6297C18.1402 19.2859 18.3334 18.8196 18.3334 18.3333V8.25L11.9167 1.83333Z" stroke="#ECEDF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.9167 1.83333V8.24999H18.3334" stroke="#ECEDF5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Resources</p>
        </NavLink>           
        <NavLink to='/settings/option' className="links">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_1344_3504)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.19047C10 5.85428 10.072 5.23809 10.184 5.23809H0V7.14285H10.184C10.072 7.14285 10 6.52666 10 6.19047ZM17.816 5.23809C17.403 4.28571 16.304 3.33333 15 3.33333C13.343 3.33333 12 4.61238 12 6.19047C12 7.76857 13.343 9.04761 15 9.04761C16.304 9.04761 17.403 8.09523 17.816 7.14285H20V5.23809H17.816ZM10 13.8095C10 14.1457 9.928 14.4629 9.816 14.7619H20V12.8571H9.816C9.928 12.8571 10 13.4733 10 13.8095ZM8 13.8095C8 15.3876 6.657 16.6667 5 16.6667C3.696 16.6667 2.597 15.7143 2.184 14.7619H0V12.8571H2.184C2.597 11.9048 3.696 10.9524 5 10.9524C6.657 10.9524 8 12.2314 8 13.8095Z" fill="#3D4999"/>
            </g>
            <defs>
              <clipPath id="clip0_1344_3504">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <p>Settings</p>
        </NavLink>
      </div>

      <div className="log-div">
        <Button style={{background: 'transparent'}} className="log-out" onClick={()=>setIsModal(true)}>
            <p>Logout</p>
            <img src={logout} alt="" />                              
        </Button>

        <AlertDialog
          motionPreset='slideInBottom'
          isOpen={isModal}
          onClose={() => setIsModal(false)}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogCloseButton />
            <AlertDialogFooter>
              
              <div className="logout-modal">
                <h2 className='logh'>Are you sure you want to log out?</h2>
                <div className="log-btns">
                  <Button className='stay-btn' onClick={() => setIsModal(false)}>Stay Logged In</Button>
                  <Link to='/'><Button colorScheme='red' onClick={() => setIsModal(false)}>Log out</Button></Link>
                </div>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
</div>


  </DrawerBody>

</DrawerContent>
</Drawer>

</>


  )
}

export default Topbar