import React from "react";

export default function Navbar(props) {

  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a href="https://satyam-52.github.io" className="navbar-brand col-sm-3 col-md-2 mr-0" target="_blank" rel="noopener noreferrer">
        Satyam Dua's Blockchain Marketplace
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <small className="text-white">
            <span id="account">{props.account}</span>
          </small>
        </li>
      </ul>
    </nav>
  );
}
