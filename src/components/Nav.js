import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Meny</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Hem</Link>
              </li>
              <li>
                <Link to="/SignUp">Anmälan</Link>
              </li>
              <li>
                <Link to="/Register">Registrera resultat</Link>
              </li>
              <li>
                <Link to="/Results">Resultatlista</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
