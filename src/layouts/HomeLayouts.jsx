import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatesNews from "../components/LatesNews";
import LeftNavbar from "../components/LayoutComponent/LeftNavbar";
import RightNavbar from "../components/LayoutComponent/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="font-Poppins">
      <header>
        <Header></Header>
      </header>
      <section className="w-11/12 mx-auto">
        <LatesNews></LatesNews>
      </section>
      <nav className="w-11/12 py-2 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5  grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
