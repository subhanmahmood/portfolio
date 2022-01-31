import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-display">
      <Navbar />
      <main className="pt-24 md:pt-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
