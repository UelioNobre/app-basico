import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../data/context/AuthContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isAuthenticated, logout, } = useContext(AuthContext);
  const loginButton = (isAuthenticated) ? <Link onClick={logout} className={styles.item}>Logout</Link> : <Link to='/login'>Login</Link>;
  const dashboardButton = (isAuthenticated) ? <Link to="/dashboard" className={styles.item}>Dashboard</Link> : ''

  return (
    <div>
      <Link to='/' className={styles.item}>Home</Link>
      {dashboardButton}
      <Link to='/dashboard/posts' className={styles.item}>Posts</Link>
      {loginButton}
    </div>
  )
}

export default Navbar