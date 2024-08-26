import React, { useEffect, useState } from "react";
import "../dashboard/dashboard.css";
import Sidebar from "./../sidebar/Sidebar";
import search from "../images/search.svg";
import notification from "../images/notification.svg";
import divider from "../images/divider.svg";
import admin from "../images/user.png";
import user from "../images/user.svg";
import cal from "../images/calendar.svg";
import env from "../images/envelope.svg";
import user2 from "../images/user2.svg";
import clock from "../images/clock.svg";
import drop from "../images/drop-down.svg";
import check from "../images/check-nav.svg";
import arrow from "../images/arrow-nav.svg";
import user3 from "../images/user3.svg";
import naira from "../images/naira.svg";
import active from "../images/active-img.svg";
import left from "../images/chevron-left.svg";
import right from "../images/chevron-right.svg";
import TableRow from "../payment/TableRow";
import Badge from "@mui/material/Badge";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import PaymentTop from "../dashboard/PaymentTop";
import Topbar from "../dashboard/Topbar";
import PaymentCard from "./PaymentCard";
import axios from "axios";

const Payment = () => {
  const userInfo = localStorage.getItem("userInfo");
  const user = JSON.parse(userInfo);
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
                <img className="mem" src={user.photo || ""} alt="" />
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
            <div className="pp-top">
              <h2>Payment History</h2>
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
                  <label>Showing</label>
                  <select name="" id="">
                    <option value="" selected disabled>
                      10
                    </option>
                    <option value="">20</option>
                    <option value="">30</option>
                    <option value="">40</option>
                    <option value="">50</option>
                  </select>
                  <label>of 50</label>
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

export default Payment;
