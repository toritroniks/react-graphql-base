import { useQuery, gql } from '@apollo/client';
import MovieItem from './MovieItem';

const ALL_FILMS_QUERY = gql`
  query {
    allFilms {
      films {
        title
        director
      }
    }
  }
`;

const MovieList: React.FC = () => {
  const { loading, error, data } = useQuery<AllFilms>(ALL_FILMS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data!.allFilms.films.map((film) => (
        <div key={film.title}>
          <MovieItem film={film} />
        </div>
      ))}
    </>
  );
};

export default MovieList;

interface Film {
  title: string;
  director: string;
}

interface AllFilms {
  allFilms: {
    films: Film[];
  };
}
