import Footer from "./components/footer";
import Header from "./components/header";

function Wrapper({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Wrapper;
