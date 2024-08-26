import "../dashboard/dashboard.css";
import Sidebar from "./../sidebar/Sidebar";
import search from "../images/search.svg";
import notification from "../images/notification.svg";
import divider from "../images/divider.svg";
import cal from "../images/calendar.svg";
import env from "../images/envelope.svg";
import clock from "../images/clock.svg";
import drop from "../images/drop-down.svg";
import check from "../images/check-nav.svg";
import arrow from "../images/arrow-nav.svg";
import download from "../images/download.svg";
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
import "./resources.css";
import Topbar from "../dashboard/Topbar";

const Resources = () => {
  return (
    <>
      <div className="dash-board">
        <Sidebar />
        <div className="d-content">
          <Topbar />

          <div className="nav-bar">
            <h3>Resources</h3>
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
            <div class="resource-page-top">
              <h3>ICAN Abeokuta & District Society Resources</h3>
              <p>Please see the attached file for the Reports.</p>
            </div>

            <div class="resources">
              <div class="resource-box">
                <h3>2019 Annual Report</h3>
                <p>ICAN Abeokuta & District Society Report (pdf)</p>
                <button>
                  Download <img src={download} alt="" />
                </button>
              </div>
              <div class="resource-box">
                <h3>2019 Annual Report</h3>
                <p>ICAN Abeokuta & District Society Report (pdf)</p>
                <button>
                  Download <img src={download} alt="" />
                </button>
              </div>
              <div class="resource-box">
                <h3>2019 Annual Report</h3>
                <p>ICAN Abeokuta & District Society Report (pdf)</p>
                <button>
                  Download <img src={download} alt="" />
                </button>
              </div>
              <div class="resource-box">
                <h3>2019 Annual Report</h3>
                <p>ICAN Abeokuta & District Society Report (pdf)</p>
                <button>
                  Download <img src={download} alt="" />
                </button>
              </div>
              <div class="resource-box">
                <h3>2019 Annual Report</h3>
                <p>ICAN Abeokuta & District Society Report (pdf)</p>
                <button>
                  Download <img src={download} alt="" />
                </button>
              </div>
              <div class="resource-box">
                <h3>2019 Annual Report</h3>
                <p>ICAN Abeokuta & District Society Report (pdf)</p>
                <button>
                  Download <img src={download} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
