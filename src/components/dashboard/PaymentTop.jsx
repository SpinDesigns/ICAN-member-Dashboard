import React from "react";
import cloud from "../images/export.svg";
import navarrow from "../images/nav-arrow.svg";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";

const PaymentTop = () => {
  const userInfo = localStorage.getItem("userInfo");
  const token = localStorage.getItem("authToken")
  const user = JSON.parse(userInfo);

  const handleClick = async () => {
    try {
      const response = await axios.get(
        "https://ican-abeokuta-backend.onrender.com/api/v1/payment/paymentLink/662e5ea59078fadc5e763add",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include Bearer token in headers
          },
        }
      );
      const paymentLink = response.data.data.data.link; // Adjust based on the actual API response structure
      console.log(response.data.data.data);

      if (paymentLink) {
        window.open(paymentLink, "_blank");
      } else {
        console.error("Payment link not found");
      }
    } catch (error) {
      console.error("Error fetching payment link:", error);
    }
  };

  return (
    <>
      <div className="payment-history">
        <div className="payment-top">
          <Popover>
            <PopoverTrigger>
              <button className="paybtn">Payment</button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <div className="drop-down-menu">
                  <a
                    onClick={handleClick}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Make Payment <img src={navarrow} alt="" />
                  </a>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <button>
            <img src={cloud} alt="" />
            Export
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentTop;
