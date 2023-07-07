import React from 'react';
import {Link,NavLink} from 'react-router-dom';
function Menu() {
  return (
    <nav className="nav navbar-expand-lg navbar-dark bg-light">
        <Link className="nav-link" to="/Docs">Docs</Link>
        <Link className="nav-link" to="/Tutorial">Tutorial</Link>
        <Link className="nav-link" to="/">Deconnect</Link>
    </nav>
  )
}
export default Menu;
