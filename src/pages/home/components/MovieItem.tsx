interface MovieItemProps {
  film: {
    title: string;
    director: string;
  };
}

const MovieItem: React.FC<MovieItemProps> = ({ film }) => {
  return <div>{film.title}</div>;
};

export default MovieItem;
