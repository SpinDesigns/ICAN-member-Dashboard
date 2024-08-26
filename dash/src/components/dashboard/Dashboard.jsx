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


const Dashboard = () => {
  const [dateString, setDateString] = useState("");

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
  

  const tableData = [
    {
      id: "ICANABDS01",
      invoice: "1234567890",
      date: "10 Dec, 2024",
      amount: "N100,000",
      method: "Bank Transfer",
      dueYear: "2024",
      status: "Completed",
    },
  ];

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
                    <h4>Seun Ogunme</h4>
                    <p>Chairman</p>
                  </div>
                </div>
              </div>
              <img src={drop} alt="" />
            </div>
          </div>

          <div className="dash">
            <div className="dash-header">
              {/* <h2>Hello, {user.fname}</h2> */}
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
                        <p>ID-011221</p>
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
                        <p>lindablair@mail.com</p>
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
                        <p>0801 414 8778</p>
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
                <img src={admin} alt="" />
                <h2>Mrs Seun Ogunme, FCA</h2>
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
                    <th className="t-head1">Payment ID</th>
                    <th className="t-head2">Invoice Number</th>
                    <th className="t-head3">Date Paid</th>
                    <th className="t-head4">Amount</th>
                    <th className="t-head5">Method</th>
                    <th className="t-head5">Due Year</th>
                    <th className="t-head6">Status</th>
                    <th className="t-head7">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((table) => (
                    <TableRow
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
