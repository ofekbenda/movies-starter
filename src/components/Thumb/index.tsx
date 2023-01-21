import { useNavigate } from "react-router-dom";
import styles from "./Thumb.module.scss";

// Types
type Props = {
  image: string;
  movieId?: number;
  clickable?: boolean;
};

const Thumb = ({ image, movieId, clickable }: Props) => {
  const navigate = useNavigate();
  const navigateToMoviePage = () => {
    if (clickable) navigate(`/movie/${movieId}`);
  };

  return (
    <div onClick={navigateToMoviePage}>
      <img className={`${styles.image} ${clickable && styles.clickable}`} src={image} alt="movie-thumb" />
    </div>
  );
};

export default Thumb;
