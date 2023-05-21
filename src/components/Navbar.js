import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const history = useNavigate("");
  
  const Logout = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      history("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">

      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma-logo"/>
          </Link>

          <a href="#/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="true">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-menu" id="navbarBasicExample">
          <div className="navbar-start">
            <a href="#/" className="navbar-item">
              Home
            </a>
            
            <a href="#/" className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={Logout} className="button is-light">
                    Log out
                  </button>
                </div>
              </div>
            </a>

            
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar