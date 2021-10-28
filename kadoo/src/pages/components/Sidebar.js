import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
//import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`

const SidebarWrap = styled.div`
  width: 100%;
`

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [sidebarData, setSidebarData] = useState([])
  const showSidebar = () => setSidebar(!sidebar)

  useEffect(() => {
    async function fetchtagsData() {
      await fetch('http://127.0.0.1:8000/api/tagList/')
        .then((response) => response.json())
        .then((data) => {
          setSidebarData(data)
          console.log(data)
        })
    }
    fetchtagsData()
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {sidebarData.map((x) => {
              return <SubMenu item={x} key={x.id} />
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar
