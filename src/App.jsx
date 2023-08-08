import Banner from "./components/Banner";
import Copyright from "./components/Copyright";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plan from "./components/Plan";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Explore />
      <Plan />
      <Banner />
      <Pricing />
      <Reviews />
      <Subscribe />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;
