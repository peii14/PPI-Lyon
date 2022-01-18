import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import hero from "../images/home/hero1.png";
const Budgeting = () => {
  return (
    <>
      <Navbar />
      <Hero img={hero} />
    </>
  );
};
export default Budgeting;
