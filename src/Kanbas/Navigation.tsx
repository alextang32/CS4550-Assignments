import React, { useState } from 'react';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function KanbasNavigation() {
  const [selectedLink, setSelectedLink] = useState<string>("/Kanbas/Dashboard"); // Set initial selected link with type string

  // Function to determine link class based on whether it is selected or not
  const getLinkClass = (link: string): string => (
    link === selectedLink 
      ? "list-group-item text-center border-0 bg-white text-danger" // Selected: White background, Red text
      : "list-group-item text-white bg-black text-center border-0" // Not Selected: Black background, White text
  );

  // Function to determine icon class based on whether it is selected or not, and if it's the Account icon
  const getIconClass = (link: string): string => {
    if (link === "/Kanbas/Account") {
      return link === selectedLink ? "fs-1 text-white" : "fs-1 text-white"; // Account Icon is always white
    }
    return "fs-1 text-danger"; // All other icons are red
  };

  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }} 
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a href="https://www.northeastern.edu/" className="list-group-item bg-black border-0 text-center"
         id="wd-neu-link" target="_blank" rel="noopener noreferrer">
        <img src="/images/NEU.png" width="75px" alt="NEU Logo" />
      </a>
      
      <Link to="/Kanbas/Account" 
            id="wd-account-link" 
            className={getLinkClass("/Kanbas/Account")}
            onClick={() => setSelectedLink("/Kanbas/Account")}>
        <FaRegCircleUser className={getIconClass("/Kanbas/Account")} /><br />Account
      </Link>

      <Link to="/Kanbas/Dashboard" 
            id="wd-dashboard-link" 
            className={getLinkClass("/Kanbas/Dashboard")}
            onClick={() => setSelectedLink("/Kanbas/Dashboard")}>
        <AiOutlineDashboard className={getIconClass("/Kanbas/Dashboard")} /><br />Dashboard
      </Link>

      <Link to="/Kanbas/Courses" 
            id="wd-course-link" 
            className={getLinkClass("/Kanbas/Courses")}
            onClick={() => setSelectedLink("/Kanbas/Courses")}>
        <LiaBookSolid className={getIconClass("/Kanbas/Courses")} /><br />Courses
      </Link>

      <Link to="/Kanbas/Calendar" 
            id="wd-calendar-link" 
            className={getLinkClass("/Kanbas/Calendar")}
            onClick={() => setSelectedLink("/Kanbas/Calendar")}>
        <IoCalendarOutline className={getIconClass("/Kanbas/Calendar")} /><br />Calendar
      </Link>

      <Link to="/Kanbas/Inbox" 
            id="wd-inbox-link" 
            className={getLinkClass("/Kanbas/Inbox")}
            onClick={() => setSelectedLink("/Kanbas/Inbox")}>
        <FaInbox className={getIconClass("/Kanbas/Inbox")} /><br />Inbox
      </Link><br/>

      <Link to="/Labs" 
            id="wd-labs-link"
            className={getLinkClass("/Labs")}
            onClick={() => setSelectedLink("/Labs")}>
        <LiaCogSolid className={getIconClass("/Labs")} /><br />Labs
      </Link><br/>
    </div>
  );
}
