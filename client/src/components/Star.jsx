import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
const Star = ({ rating }) => {
  const numStars = Math.floor(rating);

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= numStars) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} color="yellow" />);
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={farStar} />);
    }
  }

  return <div style={{ paddingLeft: "8px" }}>{stars}</div>;
};

Star.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Star;
