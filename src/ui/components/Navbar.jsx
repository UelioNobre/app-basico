import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../data/context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, } = useContext(AuthContext);
  const loginButton = (isAuthenticated) ? <Link onClick={logout}>Logout</Link> : <Link to='/login'>Login</Link>;
  const dashboardButton = (isAuthenticated) ? <Link to="/dashboard">Dashboard</Link> : ''

  return (
    <div>
      <Link to='/'>Home</Link>
      {dashboardButton}
      {loginButton}
    </div>
  )
}

export default Navbar