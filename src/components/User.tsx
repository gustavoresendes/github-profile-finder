import { UserProps } from "../types/user";
import { Flag } from "phosphor-react";
import { Link } from "react-router-dom";
import classes from "./User.module.css"

const User = ({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <Flag />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <a href={`https://github.com/${login}?tab=repositories`} target="_blank">Projetos principais</a>
    </div>
  );
};

export default User;
