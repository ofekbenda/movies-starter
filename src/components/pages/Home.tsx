// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
// Components
import HeroImage from "../HeroImage";
import Grid from "../Grid";
import Thumb from "../Thumb";
import SearchBar from "../SearchBar";

// Hook
import { useHomeFetch } from "../../hooks/useHomeFetch";
// Image
import NoImage from "../../images/no_image.jpg";
import Button from "../Button";
import Spinner from "../Spinner";
import NotFound from "./NotFound";

const Home = () => {
  const { state, error, searchTerm, isLoadingMore, loading, setSearchTerm, setIsLoadingMore } = useHomeFetch();

  const loadMoreHandler = () => {
    setIsLoadingMore(true);
  };

  if (error) return <div>Something went wrong ...</div>;
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      {loading ? (
        <Spinner />
      ) : (
        <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
          {!state.total_results ? (
            <NotFound />
          ) : (
            state.results.map((movie) => (
              <Thumb
                key={movie.id}
                image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
                clickable
                movieId={movie.id}
              />
            ))
          )}
        </Grid>
      )}
      {isLoadingMore ? (
        <Spinner />
      ) : (
        <Button disabled={state.total_pages === state.page} text="load more" callback={loadMoreHandler}></Button>
      )}
    </>
  );
};

export default Home;
