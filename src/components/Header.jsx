import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-500 text-xl">
        Journalism Without Fear or Favour
      </h2>
      <p className="text-xl text-gray-500 ">{moment().format("MMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
