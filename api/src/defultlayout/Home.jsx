import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Menubar from "./Menubar";

const Home = () => {
  return (
    <section>
      <Menubar />
      <div className="container text-center">
        <h1 className="text-black mt-3">This is country-api website</h1>
      </div>
      <Outlet />
      <Footer />
    </section>
  );
};

export default Home;
