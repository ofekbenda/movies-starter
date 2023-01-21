// Components
import Thumb from "../Thumb";
// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
// Styles
import styles from "./MovieInfo.module.scss";

// Types
import { MovieState } from "../../hooks/useMovieFetch";

type Props = {
  movie: MovieState;
};

const bgPath = (backdrop_path: string) =>
  backdrop_path ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}` : "#000";

const MovieInfo = ({ movie }: Props) => (
  <div
    className={styles.wrapper}
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(${bgPath(movie.backdrop_path)})`,
      padding: "40px 20px",
      animation: "animateMovieInfo 1s",
    }}
  >
    <div className={styles.content}>
      <Thumb image={bgPath(movie.backdrop_path)} clickable={false} />
      <div className={styles.text}>
        <h1>{movie.title}</h1>
        <div>PLOT</div>
        <div>{movie.overview}</div>
        <div>RATING</div>
        <div className={styles.scoreContainer}>
          <div className={styles.score}>{movie.vote_average.toFixed(2)}</div>
          <span className={styles.votes}>Based on {movie.vote_count} votes</span>
        </div>
        <div>DIRECTORS</div>

        <div className="diractors-container">
          {movie.directors.map((director) => (
            <div className={styles.director}>
              <p>
                {director.name} ({director.job})
              </p>
            </div>
          ))}
        </div>

        {/* 
          Task: Complete information section
        */}
      </div>
    </div>
  </div>
);

export default MovieInfo;
