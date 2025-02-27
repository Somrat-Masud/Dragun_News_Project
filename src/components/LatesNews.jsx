/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

const LatesNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050]  px-3 py-1">Latest</p>
      <marquee pauseOnHover={true} speed={100} behavior="" direction="">
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          nesciunt.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          nesciunt.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          nesciunt.
        </Link>
      </marquee>
    </div>
  );
};

export default LatesNews;
