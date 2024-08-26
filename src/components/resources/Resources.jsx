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
import { useEffect, useState } from "react";

const Resources = () => {
  const [resources, setResources] = useState([]);

  const userInfo = localStorage.getItem("userInfo");
  const user = JSON.parse(userInfo);

  const fetchFiles = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await fetch(
        "https://ican-abeokuta-backend.onrender.com/api/v1/file/getUpload",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch files");
      }

      const data = await response.json();
      return data.files; // Accessing the 'files' array
    } catch (error) {
      console.error("Error fetching files:", error.message);
    }
  };

  useEffect(() => {
    const loadFiles = async () => {
      const fetchedFiles = await fetchFiles();
      setResources(fetchedFiles || []);
    };
    loadFiles();
  }, []);

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
                  <PopoverBody>{/* Notification content */}</PopoverBody>
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
            <div className="resource-page-top">
              <h3>ICAN Abeokuta & District Society Resources</h3>
              <p>Please see the attached file for the Reports.</p>
            </div>

            <div className="resources">
              {resources.map((resource) => (
                <div className="resource-box" key={resource._id}>
                  <h3>{resource.fileName}</h3>
                  <p>{resource.description}</p>
                  <a
                    href={resource.image.src}
                    download={resource.fileName + ".pdf"}
                  >
                    Download <img src={download} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
