import Hero from '../components/Hero'
import k from '../images/keberangkatan/keberangkatanHero.png'
const Keberangkatan = ()=>{
    return(
        <>
        <Hero img={k} />
        <section className='text-primary p-20'>
            <h1 className='text-center max-w-xl mx-auto'>Mengajukan visa VLS-TS</h1>
        </section>
        </>
    )
}
export default Keberangkatan