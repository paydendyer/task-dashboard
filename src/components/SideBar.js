import React from 'react';
import "../css/output.css";
import * as IoIcons from 'react-icons/io';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {NavLink} from 'react-router-dom';


const SideBar = () => {
  return (
    
    <div className="fixed top-0 left-0 h-full w-16 flex flex-col
                          bg-white dark:bg-gray-900 shadow-lg my-sidebar">

      <NavLink to='/Home'><SideBarIcon icon={
          <AiIcons.AiOutlineHome
          size="28"/>
        }/></NavLink>
      <NavLink to='Notes'><SideBarIcon icon={
          <AiIcons.AiOutlineCopy
          size="28"/>
        }/></NavLink>
      <NavLink to='/ToDo'><SideBarIcon icon={
          <IoIcons.IoMdCheckmarkCircleOutline
          size="28"/>
        }/></NavLink>
      <NavLink to='/Weather'><SideBarIcon icon={
          <IoIcons.IoMdCloudOutline
          size="28"/>
        }/></NavLink>
      <NavLink to='/Budget'><SideBarIcon icon={
          <FaIcons.FaRegMoneyBillAlt
          size="28"/>
        }/></NavLink>
    </div>
  );
};
const SideBarIcon = ({icon}) => (
  <div className="sidebar-icon">
    {icon} </div>
);


export default SideBar;
