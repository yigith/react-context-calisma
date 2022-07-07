import './Navbar.css';
import NavbarLogin from './NavbarLogin';

function Navbar() {
  return (
    <div className="Navbar">
      <a href="#" className="Navbar-brand">Context Çalışma</a>
      <NavbarLogin />
    </div>
  )
}

export default Navbar;