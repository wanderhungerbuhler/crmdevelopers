import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import {
  ChartLine,
  Columns,
  GearSix,
  HouseSimple,
  Phone,
  Question,
  User,
  UsersThree,
} from '@phosphor-icons/react'
export function Menu() {
  return (
    <div className="flex flex-col p-10">
      <img src={Logo} alt="Logo" />

      <nav className="flex flex-col gap-8 mt-20">
        <NavLink
          to="/dashboard"
          title="Dashboard"
          className="text-gray-200 active:text-gray-300 font-medium text-base flex justify-start items-center gap-2 hover:text-gray-300"
        >
          <HouseSimple /> Dashboard
        </NavLink>

        <NavLink
          to="#"
          title="Accounts"
          className="text-gray-200 font-medium text-base flex justify-start items-center gap-2 hover:text-gray-300"
        >
          <User /> Accounts
        </NavLink>

        <NavLink
          to="/dashboard/pipeline"
          title="Pipeline"
          className="text-gray-200 font-medium text-base flex justify-start items-center gap-2 hover:text-gray-300"
        >
          <Columns /> Pipeline
        </NavLink>

        <NavLink
          to="#"
          title="Contacts"
          className="text-gray-200 font-medium text-base flex justify-start items-center gap-2 hover:text-gray-300"
        >
          <Phone /> Contacts
        </NavLink>

        <NavLink
          to="#"
          title="Customers"
          className="text-gray-200 font-medium text-base flex justify-start items-center gap-2 hover:text-gray-300"
        >
          <UsersThree /> Customers
        </NavLink>

        <NavLink
          to="#"
          title="Metrics"
          className="text-gray-200 font-medium text-base flex justify-start items-center gap-2 hover:text-gray-300"
        >
          <ChartLine /> Metrics
        </NavLink>
      </nav>

      <nav className="flex flex-col gap-8 mt-20">
        <NavLink
          to="#"
          title="Settings"
          className="text-gray-200 font-medium text-base flex justify-start items-center gap-2 hover:text-gray-300"
        >
          <GearSix /> Settings
        </NavLink>

        <NavLink
          to="#"
          title="Question"
          className="text-gray-200 font-medium text-base flex justify-start items-center gap-2 hover:text-gray-300"
        >
          <Question /> Question
        </NavLink>
      </nav>
    </div>
  )
}
