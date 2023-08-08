import { Rating } from "@smastrom/react-rating";
// React rating css
import "@smastrom/react-rating/style.css";

const RoomRating = ({ ratings }) => {
  return (
    <div className="flex space-x-1">
      <Rating value={ratings} style={{ maxWidth: 120 }} readOnly />{" "}
      <span>{ratings}</span>
    </div>
  );
};

export default RoomRating;
