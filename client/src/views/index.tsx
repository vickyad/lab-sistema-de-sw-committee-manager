import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Paths from '../constants/Paths'
import ComitteesView from './Comittees'
import NotFoundView from './NotFound'
import MembersView from './Members'
import ConfigurationsView from './Configurations'

const Main: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<ComitteesView />} />
        <Route path={Paths.MEMBERS} element={<MembersView />} />
        <Route path={Paths.CONFIGURATIONS} element={<ConfigurationsView />} />
        <Route path={'*'} element={<NotFoundView />} />
      </Routes>
    </Router>
  )
}

export default Main
