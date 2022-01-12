import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import k from "../images/keberangkatan/keberangkatanHero.png";
import Image from "next/image";
import bank from "../images/tiba/gambar.png";
// GANTI PHOTO
const TibadiLyon = () => {
  return (
    <>
      <Navbar />
      <Hero img={k} />
      <div className="layout">
        <section className="layout text-primary py-10 ">
          <h2 className="text-center">Membuat Rekening Bank Prancis</h2>
          <div className="flex flex-row justify-around gap-10 py-10 max-w-3xl mx-auto">
            <Image src={bank} width={1200} height={800} />
            <p className="text-justify justify-center my-auto">
              Ketika sudah di bank, langsung menuju resepsionis untuk meminta
              ouvrir un compte dan kamu akan ditetapkan conseiller dari bank
              tersebut. D Perancis, semua kebutuhan dan pertanyaan tentang
              transaksi bank kamu kedepannya dapat diajukan melalui conseiller
              ini.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-center">Dokumen RIB <br />(Relevé d'Identité Bancaire)</h2>
          <p className="text-center p-5">Pada saat membuka akun, Conseillermu akan langsung memberikan dokumen RIB yang berisikan:</p>
        </section>
      </div>
    </>
  );
};

export default TibadiLyon;
