import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { useMovieFetch } from "../../hooks/useMovieFetch";
import Actor from "../Actor";
import BreadCrumb from "../BreadCrumb";
import MovieInfo from "../MovieInfo";
import MovieInfoBar from "../MovieInfoBar";
import NoImage from "../../images/no_image.jpg";
import Grid from "../Grid";
import Spinner from "../Spinner";
import NotFound from "./NotFound";

const Movie = () => {
  const params = useParams();
  const { state, loading, error } = useMovieFetch(params.id || "");

  const renderMovieInfo = (
    <>
      {state && <MovieInfo movie={state} />}
      <MovieInfoBar time={state?.runtime || 0} budget={state?.budget || 0} revenue={state?.revenue || 0} />
      <Grid header="Actors">
        {state?.actors.map((actor) => (
          <Actor
            key={actor.name}
            name={actor.name}
            character={actor.character}
            imageUrl={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : NoImage}
          />
        ))}
      </Grid>
    </>
  );

  if (error) return <NotFound />;

  return (
    <>
      <BreadCrumb movieTitle={state?.title || "No Movie"} />
      {loading ? <Spinner /> : renderMovieInfo}
    </>
  );
};

export default Movie;
