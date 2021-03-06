import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from "react-icons/fa";
export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon: <GrIcons.GrHome />,
    cName: 'nav-text'
  },
  {
    title: 'Notes',
    path: '/Notes',
    icon: <GrIcons.GrNotes />,
    cName: 'nav-text'
  },

  {
    title: 'To Do',
    path: '/ToDo',
    icon: <IoIcons.IoMdCheckmarkCircleOutline />,
    cName: 'nav-text'
  },

  {
    title: 'Weather',
    path: '/Weather',
    icon: <IoIcons.IoMdCloudOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Budget',
    path: '/Budget',
    icon: <FaIcons.FaRegMoneyBillAlt />,
    cName: 'nav-text'
  }
]
