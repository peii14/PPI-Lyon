import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import k from "../images/keberangkatan/keberangkatanHero.png";
import Image from "next/image";
import bank from "../images/tiba/gambar.png";
import Footer from "../components/Footer";
import check from "../images/icon/check.png";
import Glassmorphism from "../components/Glassmorphism";
import arrow from "../images/icon/arrow.png";
import arrow2 from "../images/icon/arrow2.png";
import id from "../images/icon/ID.png"
import passport from "../images/icon/passport.png"
// GANTI PHOTO
const TibadiLyon = () => {
  return (
    <>
      <Navbar />
      <Hero img={k} />
      <div className="layout">
        <section className="layout text-primary pt-20 ">
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
              meminta <span className="font-bold">aktivasi akun online</span>{" "}
              lewat conseiller kamu.{" "}
            </p>
          </div>
        </section>
        <section className="max-w-5xl mx-auto">
          <Glassmorphism>
            <div className="grid  grid-cols-3 text-center items-center align-middle">
              <p className="">Membuka akun</p>
              <div className=" row-span-16 col-start-2 ">
                <div className="py-5">
                  <Image src={arrow2} />
                </div>
              </div>
              <p className="row-span-16 col-start-3 -mt-10 ">
                Memakan waktu sampai{" "}
                <span className="font-bold">satu bulan</span>
              </p>
              <div className="">
                <Image src={arrow} width={20} />
              </div>
              <p>
                kartu tabungan akan dikirim melalui pos ke alamat tempat
                tinggalmu
              </p>
              <div className="">
                <Image src={arrow} width={20} />
              </div>
              <p>
                PIN kartu juga akan dikirim di surat terpisah untuk menjaga
                keamanan{" "}
              </p>
              <div className="">
                <Image src={arrow} width={20} />
              </div>
              <p>Akun kamu sudah aktif dan dapat digunakan</p>
            </div>
            <div className="text-center mt-10">
              <p>
                Username dan password akun internet juga <span className="font-bold">tidak</span> langsung jadi
                melainkan akan dikirim melalui pos tapi jauh lebih cepat dari
                proses diatas, kira-kira bisa sampai dalam <span className="font-bold">1 minggu.</span>
              </p>
            </div>
          </Glassmorphism>
          <div className="text-center p-10">
            <p>Dokumen yang dibutuhkan tergantung bank, namun biasanya <span className="font-bold">setidaknya</span>:</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TibadiLyon;
