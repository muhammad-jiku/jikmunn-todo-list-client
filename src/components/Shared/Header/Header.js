import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const signingOut = () => {
    signOut(auth);
    //  localStorage?.removeItem('accessToken');
  };

  const menuItems = (
    <>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <Link to="/todo">To-Do</Link>
      </li>
      <li>
        <Link to="/completed-tasks">Completed Tasks</Link>
      </li>

      {user ? (
        <>
          <li className="mr-2 font-bold">
            <div class="avatar ">
              <div class="w-12  rounded-full">
                <img src={user?.photoURL} alt={user?.displayName} />
              </div>
            </div>
          </li>
          <li>
            <button
              className="btn btn-primary text-white my-4"
              onClick={signingOut}
            >
              Sign out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          To-Do Lists
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
