import FilterVintage from '@mui/icons-material/FilterVintage';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import LoginStatusDisplay from './components/LoginStatusDisplay';
import classes from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div>
      <div className={classes.Home}>
        <FilterVintage />
        <h1>Base Project</h1>
        <LoginStatusDisplay />
      </div>
      <Grid container justifyContent="center" spacing={2} padding="20px">
        <Grid item xs={3}>
          <Button component={Link} to="/search" variant="contained" fullWidth>
            Search
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            component={Link}
            to="/favorites"
            variant="contained"
            fullWidth
          >
            Favorites
          </Button>
        </Grid>
      </Grid>
      <MovieList />
    </div>
  );
};

export default Home;
