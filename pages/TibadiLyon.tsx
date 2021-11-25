import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import k from "../images/keberangkatan/keberangkatanHero.png";

const TibadiLyon = () =>{
    return(
        <>
        <Navbar />
        <Hero img={k} />
        </>
    )
}

export default TibadiLyon