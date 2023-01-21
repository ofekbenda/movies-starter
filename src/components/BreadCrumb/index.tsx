import { useNavigate } from "react-router-dom";
import styles from "./BreadCrumb.module.scss";

type Props = {
  movieTitle: string;
};

const BreadCrumb = ({ movieTitle }: Props) => {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.clickable} onClick={navigateToHomePage}>Home</span>
        <div>|</div>
        <span>{movieTitle}</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
