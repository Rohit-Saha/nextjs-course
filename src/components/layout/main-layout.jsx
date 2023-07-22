import Footer from "../footer/footer";
import Header from "../header/header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header title="Sed ut perspiciatis unde omnis" />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
