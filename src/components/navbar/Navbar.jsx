import { Link, NavLink } from "react-router-dom";
import '../../styles/navbar.css'
import logo from '../../assets/exchangeLogo1.jpg'


const Navbar = () => {
  return (
    <nav className="container nav_tag">
      <ul className="navbar nav_ul">
        <li>
            <img src={logo} alt="" />
        </li>
        <li className="nav-item p-2">
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li className="nav-item p-2">
          <NavLink to='/exchange' >EXCHANGE</NavLink>
        </li>
        <li className="nav-item p-2">
          <NavLink to='/help' >HELP</NavLink>
        </li>

        <li className="nav-item p-2">
          <NavLink to= '/login' >LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
