import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
  return (
    <div>
      <h4 className="space-y-5">
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
      </h4>
    </div>
  );
};

export default RightNavbar;
