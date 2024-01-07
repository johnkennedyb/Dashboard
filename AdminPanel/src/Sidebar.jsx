import React from "react";
import { BsCart3 } from "react-icons/bs";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <BsCart3 className="icon_header" /> SHOP
          </div>
          <span className="icon close_icon" onClick={OpenSidebar}>
            X
          </span>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="#">
              <BsCart3 className="icon" />DASHBOARD
            </a>
          </li>
  
          <li className="sidebar-list-item">
            <a href="#" onClick={() => OpenSidebar(intensityRef)}>
              <BsFillBellFill className="icon" /> INTENSITY
            </a>
          </li>
  
          <li className="sidebar-list-item">
            <a href="#" onClick={() => OpenSidebar(likelyhoodRef)}>
              <BsFillEnvelopeFill className="icon" /> LIKELYHOOD
            </a>
          </li>
  
          <li className="sidebar-list-item">
            <a href="#" onClick={() => OpenSidebar(relevanceRef)}>
              <BsPersonCircle className="icon" /> RELIVANCE
            </a>
          </li>
  
          <li className="sidebar-list-item">
            <a href="#" onClick={() => OpenSidebar(yearRef)}>
              <BsSearch className="icon" /> YEAR
            </a>
          </li>
  
          <li className="sidebar-list-item">
            <a href="#">
              <BsJustify className="icon" /> INSIGHTS
            </a>
          </li>
  
          <li className="sidebar-list-item">
            <a href="#">
              <BsJustify className="icon" /> SETTINGS
            </a>
          </li>
        </ul>
      </aside>
    );
  }
export default Sidebar;
