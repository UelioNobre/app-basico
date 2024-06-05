import { Link, Outlet } from "react-router-dom"
import Navbar from "../ui/components/Navbar"

function Dashboard() {
  return (
    <div>
      <Navbar />
      <h2>Dashboard</h2>
      <Outlet />
    </div>
  )
}

export default Dashboard