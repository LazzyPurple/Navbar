import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MaterialDesign from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
      },
      {
        title: 'Bureaux',
        path: '/places',
        icon: <MaterialDesign.MdWhereToVote />,
        cName: 'nav-text'
      },
      {
        title: 'Results',
        path: '/results',
        icon: <MaterialDesign.MdOutlinePoll />,
        cName: 'nav-text'
      },
]