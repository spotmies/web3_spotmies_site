import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import ContactUs from "../sections/ContactUs";
import Team from "../sections/Team";
import Technologies from "../sections/Technologies";
import Testimonials from "../sections/Testimonials";
import Work from "../sections/Work/Work";

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>

    <div className="relative">
      {/* <Insights /> */}
      <Feedback />
      {/* <Feedback /> */}
      <div className="gradient-04 z-0" />
      <World />
    </div>
    <div className="relative">
      <ContactUs />
      <div className="gradient-04 z-0" />
      <Testimonials />
    </div>
    <div className="relative">
      <Team />
      <div className="gradient-04 z-0" />
      <Work />
    </div>
    <div className="relative">
      <Technologies />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Home;
