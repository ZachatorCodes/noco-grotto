import { Link } from "react-router";
import iconImage from "/favicon.ico";

function Navbar() {
  return (
    <div className="navbar bg-base-300 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/membership">Membership</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <details>
                <summary>Gear</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Basic</a>
                  </li>
                  <li>
                    <a>Vertical</a>
                  </li>
                  <li>
                    <a>Survey</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="h-8 mr-1" src={iconImage} />
          NOCO Grotto
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/membership">Membership</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <details>
              <summary>Gear</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Basic</a>
                </li>
                <li>
                  <a>Vertical</a>
                </li>
                <li>
                  <a>Survey</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
