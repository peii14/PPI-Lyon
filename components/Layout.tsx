import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="relative">
      <Navbar data-scroll-sticky />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
