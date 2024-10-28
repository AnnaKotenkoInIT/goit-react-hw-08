import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectIsLoggedIn } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import s from './AppBar.module.css';

const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.header}>
      {isLoggedIn && <p className={s.user}>Welcome, {user.name}</p>}

      <div className={s.links}>
        <div className={s.linkHome}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </div>
        {isLoggedIn && (
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
        {!isLoggedIn && (
          <div className={s.link}>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
          </div>
        )}

        {isLoggedIn && (
          <button
            onClick={() => dispatch(logout())}
            className={s.btn}
            type="button"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default AppBar;
