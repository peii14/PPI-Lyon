import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import k from "../images/keberangkatan/keberangkatanHero.png";
import Image from "next/image";
import bank from "../images/tiba/gambar.png";
import Footer from "../components/Footer";
import check from "../images/icon/check.png";
import Glassmorphism from "../components/Glassmorphism";
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
          <h2 className="text-center">
            Dokumen RIB <br />
            (Relevé d'Identité Bancaire)
          </h2>
          <p className="text-center p-5">
            Pada saat membuka akun, Conseillermu akan langsung memberikan
            dokumen RIB yang berisikan:
          </p>
          <div className="flex flex-col gap-5 max-w-xl mx-auto">
            <div className="flex flex-row gap-5">
              <div className="my-auto">
                <Image src={check} width={55} height={55} />
              </div>
              <p>
                <span className="font-bold">Nomor IBAN</span>
                <br />
                (International Bank Account Number)
                <br />
                Penting untuk semua tagihan, pembayaran online
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <div className="my-auto">
                <Image src={check} width={55} height={55} />
              </div>
              <p>
                <span className="font-bold">Nomor BIC </span>
                <br />
                (Bank Identifier Code)
                <br />
                Penting untuk kebutuhan transfer dana dari bank Indonesia ke
                bank Prancis
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <div className="my-auto">
                <Image src={check} width={55} height={55} />
              </div>
              <p className="my-auto">
                <span className="font-bold">Nama dan Alamat Pemilik Akun </span>
              </p>
            </div>
          </div>
          <div className="p-10 ">
            <p className="text-center mx-auto max-w-3xl">
              Agar dapat melakukan transaksi secara online, jangan lupa untuk
              meminta <span className="font-bold">aktivasi akun online</span> lewat conseiller kamu.{" "}
            </p>
          </div>
        </section>
        <section>
            <Glassmorphism > 
              <div className="grid grid-rows-8 grid-cols-3 grid-flow-col" >
                <p>Membuka akun</p>
              </div>
            </Glassmorphism>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TibadiLyon;
