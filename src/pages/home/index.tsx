import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={classes.Home}>
      <h2>React Base</h2>
      <Link to="/search">Search</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Home;
