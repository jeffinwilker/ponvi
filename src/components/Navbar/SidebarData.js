import React from 'react'

import * as FaIcons from 'react-icons/fa'

import * as IoIcons from 'react-icons/io'

import * as RiIcons from 'react-icons/ri'

export const sidebarData = [
    {
        title: 'Inicio',
        icon:  <FaIcons.FaHome />,
        path: '/',
        cName: 'nav-text'
    },

    {
        title: 'Histórico',
        icon:   <IoIcons.IoMdPie />,
        path: '/acompanhamento',
        cName: 'nav-text'
    },

    {
        title: 'Sair',
        icon:   <RiIcons.RiLogoutCircleFill />,
        path: '/',
        cName: 'nav-text'
    },
]
