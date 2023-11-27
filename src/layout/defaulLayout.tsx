import { Outlet } from 'react-router-dom'
import { Menu } from '../components/Menu'

export function DefaultLayout() {
  return (
    <div className="flex flex-1 h-screen">
      <div className="w-60 justify-center flex bg-white">
        <Menu />
      </div>

      <div className="flex-1 min-h-[500px] overflow-scroll p-16 bg-dashboard">
        <Outlet />
      </div>
    </div>
  )
}
