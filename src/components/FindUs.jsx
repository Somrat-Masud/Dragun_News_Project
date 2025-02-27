import { FaFacebook, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold "> Find Us On </h2>
      <div className="join join-vertical flex *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook>Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram></FaInstagram>Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook>Facebook
        </button>
      </div>
    </div>
  );
};

export default FindUs;
