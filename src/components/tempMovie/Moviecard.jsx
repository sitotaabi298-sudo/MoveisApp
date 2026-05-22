import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  let genres = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path || movie?.backdrop_path}`}
        alt={movie?.title || movie?.name || "poster image"}
      />

      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* img */}
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title || movie?.name || "hover image"}
        />

        <div>badge</div>

        
        {/* badge */}
        <div className={styles.badge}>Recently added</div>

        {/* button row */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={20}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={32}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={32}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={32}
          />
        </div>

        {/* metadata row */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* genres */}
        <div className={styles.genres}>
          {genres.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index !== genres.length - 1 && (
                  <span className={styles.dot}> • </span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

