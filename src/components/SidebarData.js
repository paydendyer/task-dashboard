import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import * as IofiveIcons from "react-icons/io5";

export const SidebarData = [
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
    title: 'Calendar',
    path: '/Calendar',
    icon: <IofiveIcons.IoCalendarNumberOutline />,
    cName: 'nav-text'
  }
]
