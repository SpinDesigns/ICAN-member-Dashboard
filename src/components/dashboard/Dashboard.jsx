import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Sidebar from "./../sidebar/Sidebar";
import search from "../images/search.svg";
import notification from "../images/notification.svg";
import divider from "../images/divider.svg";
import star from "../images/star.svg";
import admin from "../images/user.png";
import envel from "../images/env.svg";
import pho from "../images/pho.svg";
import lo from "../images/lo.svg";
import clo from "../images/clo.svg";
import rad from "../images/rad.svg";
import userr from "../images/user.svg";
import cal from "../images/calendar.svg";
import env from "../images/envelope.svg";
import user2 from "../images/user2.svg";
import clock from "../images/clock.svg";
import drop from "../images/drop-down.svg";
import check from "../images/check-nav.svg";
import arrow from "../images/arrow-nav.svg";
import loader from "../images/gif.gif";
import naira from "../images/naira.svg";
import active from "../images/active-img.svg";
import cloud from "../images/export.svg";
import left from "../images/chevron-left.svg";
import right from "../images/chevron-right.svg";
import TableRow from "../payment/TableRow";
import Badge from "@mui/material/Badge";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import PaymentTop from "./PaymentTop";
import Topbar from "./Topbar";
import PaymentCard from "../payment/PaymentCard";
import axios from "axios";


const Dashboard = () => {
  const [dateString, setDateString] = useState("");
  const userInfo = localStorage.getItem("userInfo")
  const user = JSON.parse(userInfo)
  console.log(user)

  useEffect(() => {
    const timerID = setInterval(() => {
      const currentDate = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDate = currentDate.toLocaleDateString("en-US", options);
      setDateString(formattedDate);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Replace with your actual token
        const response = await axios.get(
          "https://ican-abeokuta-backend.onrender.com/api/v1/payment/userPayment",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const transformedData = response.data.data.map((payment) => ({
          id: payment._id,
          invoice: payment.paymentId,
          date: new Date(payment.datePayed).toLocaleDateString(),
          amount: `N${payment.amount}`,
          method: "Bank Transfer", // Replace this with actual method if available
          dueYear: new Date(payment.expiresIn).getFullYear().toString(),
          status:
            payment.status.charAt(0).toUpperCase() + payment.status.slice(1),
        }));

        setTableData(transformedData);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };

    fetchPaymentData();
  }, []);

  return (
    <div>
      <div className="dash-board">
        <Sidebar />
        <div className="d-content">
          <Topbar />

          <div className="nav-bar">
            <h3>Dashboard</h3>
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

          <div className="dash">
            <div className="dash-header">
              <h2>Hello, {user.fname}</h2>
              <p>{dateString}</p>
            </div>

            <div className="box-wrapper">
              <div className="box-wrapleft">
                <div className="box-overview">
                  <h1>Overview</h1>
                  <div className="box-con">
                    <div className="box">
                      <div className="box-top">
                        <h3>Member ID</h3>
                        <div className="user-img">
                          <img src={userr} alt="" />
                        </div>
                      </div>
                      <div className="naira">
                        <p>{user.memberId}</p>
                      </div>
                      <div className="lovep">
                        <img src={active} alt="" />
                        <p>ICAN Abeokuta & District Society </p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="box-top">
                        <h3>E-mail</h3>
                        <div className="user-img2">
                          <img src={envel} alt="" />
                        </div>
                      </div>
                      <div className="naira">
                        <p>{user.email}</p>
                      </div>
                      <div className="lovep">
                        <img src={active} alt="" />
                        <p>ICAN Abeokuta & District Society </p>
                      </div>
                    </div>
                    <div className="box">
                      <div className="box-top">
                        <h3>Phone Number</h3>
                        <div className="user-img2">
                          <img src={pho} alt="" />
                        </div>
                      </div>
                      <div className="naira">
                        <p>{user.phoneNumber}</p>
                      </div>
                      <div className="lovep">
                        <img src={active} alt="" />
                        <p>ICAN Abeokuta & District Society </p>
                      </div>
                    </div>

                    <div className="box box-two">
                      <div className="box-top">
                        <h3>Address</h3>
                        <div className="user-img2">
                          <img src={lo} alt="" />
                        </div>
                      </div>
                      <div className="bdown">
                        <div className="naira">
                          <p>
                            1833 Bel Meadow Drive, Fontana, California 92335,
                            USA
                          </p>
                        </div>
                        <div className="lovep">
                          <img src={active} alt="" />
                          <p>ICAN Abeokuta & District Society </p>
                        </div>
                      </div>
                    </div>
                    <div className="box box-two">
                      <div className="box-top">
                        <h3>Status</h3>
                        <div className="user-img2">
                          <img src={rad} alt="" />
                        </div>
                      </div>
                      <div className="bdown">
                        <div className="naira">
                          <p>FCA</p>
                        </div>
                        <div className="lovep">
                          <img src={active} alt="" />
                          <p>ICAN Abeokuta & District Society </p>
                        </div>
                      </div>
                    </div>
                    <div className="box box-two">
                      <div className="box-top">
                        <h3>Last Payment</h3>
                        <div className="user-img2">
                          <img src={clo} alt="" />
                        </div>
                      </div>
                      <div className="bdown">
                        <div className="naira">
                          <p>12 December 2023</p>
                        </div>
                        <div className="lovep">
                          <img src={active} alt="" />
                          <p>ICAN Abeokuta & District Society </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-wrapright">
                <img src={user.phote} alt="" />
                <h2>
                  {user.fname} {user.mname} {user.lname}
                </h2>
                <p>ICAN Member</p>
                <div className="stars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            </div>

            <PaymentTop />

            {tableData.map((table) => (
              <PaymentCard
                key={table.id}
                id={table.id}
                invoice={table.invoice}
                date={table.date}
                amount={table.amount}
                method={table.method}
                dueYear={table.dueYear}
                status={table.status}
              />
            ))}

            <div className="payment-table">
              <table className="payt">
                <thead>
                  <tr>
                    <th>Payment ID</th>
                    <th>Invoice Number</th>
                    <th>Date Paid</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Due Year</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((table) => (
                    <TableRow
                      key={table.id}
                      id={table.id}
                      invoice={table.invoice}
                      date={table.date}
                      amount={table.amount}
                      method={table.method}
                      dueYear={table.dueYear}
                      status={table.status}
                    />
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <div>
                  <label for="">Showing</label>
                  <select name="" id="">
                    <option value="" selected disabled>
                      10
                    </option>
                    <option value="">20</option>
                    <option value="">30</option>
                    <option value="">40</option>
                    <option value="">50</option>
                  </select>
                  <label for="">of 50</label>
                </div>
                <div className="buttons">
                  <button className="btn">
                    <img src={left} alt="" />
                  </button>
                  <button className="btn active-btn">1</button>
                  <button className="btn">2</button>
                  <button className="btn">3</button>
                  <button className="btn">4</button>
                  <button className="btn">5</button>
                  <button className="btn">
                    <img src={right} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
