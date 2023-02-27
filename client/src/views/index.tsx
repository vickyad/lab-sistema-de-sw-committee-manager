import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Paths from '../constants/Paths'
import ComitteesView from './Committees'
import NotFoundView from './NotFound'
import MembersView from './Members'
import ConfigurationsView from './Configurations'
import NavBar from '../components/NavBar'
import { Content } from './styles'
import { EntityProvider } from '../context/CommitteeContext'
import { navIcon } from '../data/navInfo'

const Main: React.FC = () => {
  return (
    <div>
      <NavBar data={navIcon} />
      <EntityProvider>
        <Content>
          <Router>
            <Routes>
              <Route path={Paths.COMMITTEE} element={<ComitteesView />} />
              <Route path={Paths.MEMBERS} element={<MembersView />} />
              <Route
                path={Paths.CONFIGURATIONS}
                element={<ConfigurationsView />}
              />
              <Route path={'*'} element={<NotFoundView />} />
            </Routes>
          </Router>
        </Content>
      </EntityProvider>
    </div>
  )
}

export default Main
