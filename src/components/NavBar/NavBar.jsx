import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = (props) => {
  return (
  <div className="menu-navbar">
  <a href="#" className="logo">
    <img src="/images/logo.png" alt="" />
  </a>
  <div className="list-container">
    <nav className="navbar">
      <ul className="menu-list">
        <div className="menu-items">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Ubicación</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </div>
      </ul>
    </nav>
  </div>
  <CartWidget />
</div>
  )
}

export default Navbar;