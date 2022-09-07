import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/Favorites-context";

function MeetupItem(props) {

  const favoriteCtx = useContext(FavoritesContext);
  const isFavorite = favoriteCtx.isFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (isFavorite) {
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address
      });
    }
  }
  return (
    
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
        <img src={props.image} alt="" />
      </div>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
