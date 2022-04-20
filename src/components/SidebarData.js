import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';

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
  }
]
