import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold "> Login With</h2>
      <div className="mb-3 space-y-2">
        <button className="btn">
          <FaGoogle /> Login With Google
        </button>
        <button className="btn">
          <FaGithub /> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
