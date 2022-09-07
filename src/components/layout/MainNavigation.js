import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/Favorites-context";
import classes from "./MainNavigation.module.css";
function MainNavigation() {

  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite Meetups
            <span className={classes.badge}>
              {favoriteCtx.totalFavorites}
              </span>
              </Link>
          </li>
          <li>
            <Link to="/new-meetup">Add new Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
