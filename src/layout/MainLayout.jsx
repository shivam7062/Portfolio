import { Suspense } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import BlurBlob from "../components/BlurBlob";
import Loader from "../components/Loader";
import Contact from "../components/Contact";

const MainLayout = () => {
  
  return (
    <div className="bg-[#050414] min-h-screen text-white">

      {/* Faded Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

       {/* BlurBlob component */}
      <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "30%", height: "40%" }}/>

      <div className="relative">
        <Navbar />

        <main className="pt-20">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>

        <Contact />

        <Footer />
      </div>

    </div>
  );
};

export default MainLayout;
