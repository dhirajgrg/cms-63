
import Navbar from "../../components/navbar/Navbar.tsx";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer.tsx";

function MainLayout() {
  return (
    <div>
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
