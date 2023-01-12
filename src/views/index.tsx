import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Paths from '../constants/Paths'
import ComitteesView from './Comittees'
import NotFoundView from './NotFound'
import MembersView from './Members'
import ConfigurationsView from './Configurations'
import NavBar from '../components/NavBar'
import { Content } from './styles'
import { NavItem } from '../components/NavBar/types'

const Main: React.FC = () => {
  const navIcon: NavItem[] = [
    { icon: 'comittee', href: '/' },
    { icon: 'members', href: '/members' },
    { icon: 'configuration', href: '/configurations' },
  ]
  return (
    <div>
      <NavBar data={navIcon} />
      <Content>
        <Router>
          <Routes>
            <Route path={Paths.COMITTEE} element={<ComitteesView />} />
            <Route path={Paths.MEMBERS} element={<MembersView />} />
            <Route
              path={Paths.CONFIGURATIONS}
              element={<ConfigurationsView />}
            />
            <Route path={'*'} element={<NotFoundView />} />
          </Routes>
        </Router>
      </Content>
    </div>
  )
}

export default Main
