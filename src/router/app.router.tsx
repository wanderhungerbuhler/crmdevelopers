import { Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'

import { DefaultLayout } from '../layout/defaulLayout'
import { Dashboard } from '../pages/Dashboard'
import { Pipeline } from '../pages/Pipeline'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<DefaultLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/pipeline" element={<Pipeline />} />
      </Route>
    </Routes>
  )
}
