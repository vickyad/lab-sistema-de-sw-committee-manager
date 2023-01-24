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
import { CommitteeProvider } from '../context/CommitteeContext'

const Main: React.FC = () => {
  const navIcon: NavItem[] = [
    { icon: 'comittee', href: '/' },
    { icon: 'members', href: '/members' },
    { icon: 'configurations', href: '/configurations' },
  ]
  return (
    <div>
      <NavBar data={navIcon} />
      <CommitteeProvider>
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
      </CommitteeProvider>
    </div>
  )
}

export default Main
