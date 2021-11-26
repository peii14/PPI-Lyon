import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import k from "../images/keberangkatan/keberangkatanHero.png";

const TibadiLyon = () =>{
    return(
        <>
        <Navbar />
        <Hero img={k} />
        <section className='max-w-4xl text-primary mx-auto'>
            <h1 className='text-center max-w-md'>Membuat Rekening Bank Prancis</h1>
        </section>
        </>
    )
}

export default TibadiLyon