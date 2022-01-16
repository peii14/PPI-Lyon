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
import id from "../images/icon/ID.png";
import passport from "../images/icon/passport.png";
import sosh from "../images/tiba/sosh.png";
import red from "../images/tiba/red.png";
import byou from "../images/tiba/byou.png";
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
                Username dan password akun internet juga{" "}
                <span className="font-bold">tidak</span> langsung jadi melainkan
                akan dikirim melalui pos tapi jauh lebih cepat dari proses
                diatas, kira-kira bisa sampai dalam{" "}
                <span className="font-bold">1 minggu.</span>
              </p>
            </div>
          </Glassmorphism>
          <div className="p-10">
            <p className="text-center">
              Dokumen yang dibutuhkan tergantung bank, namun biasanya{" "}
              <span className="font-bold">setidaknya</span>:
            </p>
            <div className="flex flex-col gap-10 p-10">
              <div className="flex flex-row gap-10">
                <Image src={passport} layout="fixed" />
                <p className="font-bold my-auto text-2xl">
                  Paspor dan Fotokopi Paspor
                </p>
              </div>
              <div className="flex flex-row gap-10">
                <Image src={id} layout="fixed" />
                <div>
                  <p className="font-bold my-auto text-2xl">
                    Kartu Pelajar dan Fotokopi Kartu Pelajar{" "}
                  </p>
                  <p>
                    (Bisa diganti dengan lettre d’admission/d’acceptation dari
                    universitas)
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center p-5">
              <p>
                Karena proses dari pembuatan akun sampai dapat kartu memakan
                waktu lama, kami menyarankan membawa kartu kredit/debit
                Indonesia dan tunai Euro secukupnya dari Indonesia sebagai
                pengganti.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-center">Memilih Kartu SIM Prancis</h2>
          <div className="p-5">
            <Glassmorphism>
              <h3 className="text-center">Prépayée</h3>
              <div className="flex flex-col gap-5 text-center pt-7">
                <p>Sistem mengisi Pulsa (recharge) ketika butuh</p>
                <p>
                  Kartu SIM dapat dibeli di{" "}
                  <span className="italic">tabac</span> atau kasir supermarket
                  seperti Carrefour.
                </p>
                <p>
                  Kalau pulsa sudah <span className="font-bold">habis</span>,
                  kamu tidak bisa telpon, sms atau menggunakan internet
                </p>
                <p>
                  Kurang populer karena cenderung jatuh lebih{" "}
                  <span className="font-bold">mahal</span> dan{" "}
                  <span className="font-bold">merepotkan</span> karena harus
                  mengisi recharge terus-menerus
                </p>
                <p>
                  Contohnya adalah <span className="font-bold">Lebara</span>{" "}
                  atau <span className="font-bold">LycaMobile</span>
                </p>
              </div>
            </Glassmorphism>
          </div>
          <div className="p-5">
            <Glassmorphism>
              <h3 className="text-center">Abonnement</h3>
              <div className="flex flex-col gap-5 text-center p-7">
                <p>
                  Sistem{" "}
                  <span className="font-bold">
                    membayar tagihan tetap setiap bulannya
                  </span>{" "}
                  dengan mendapatkan paket internet, telfon, dan sms.
                </p>
                <p>
                  <span className="font-bold">Lebih populer</span> karena paket
                  cenderung mendapat banyak data internet dengan pilihan{" "}
                  <span className="italic font-bold">sans engagement</span> di
                  mana kita bisa berhenti langganan kapanpun kita mau
                </p>
                <p>
                  Paket atau forfait yang ditawarkan dibagi menjadi paket dengan
                  harga reguler dan abonnement low-cost.
                </p>
                <p>
                  Forfait low-cost adalah pilihan{" "}
                  <span className="font-bold">murah</span> di Prancis yang dapat
                  kita pesan <span className="font-bold">online</span> lewat
                  situs masing-masing. Forfait low-cost biasanya tidak{" "}
                  <span className="font-bold">melayani permintaan di toko</span>{" "}
                  (semua online atau bisa telfon).
                </p>
                <p>
                  Bisa dibandingkan pilihan yang ada lewat website provider
                  populer seperti red-by-sfr.fr, mobile.free.fr, sosh.fr atau
                  bouyguestelecom.fr dan kamu pesan pilihan kamu online lewat
                  website tersebut.
                </p>
                <p>
                  kekurangannya adalah kamu harus{" "}
                  <span className="font-bold">
                    sudah punya akun bank Prancis atau setidaknya nomor IBAN
                    dari akun tersebut
                  </span>{" "}
                  karena tagihannya akan ditarik secara otomatis dari rekening
                  tersebut
                </p>
                <p>
                  Contoh abonnement low-cost adalah{" "}
                  <span className="font-bold">RED by SFR</span> seharga 12€ per
                  bulan untuk 60GB internet dengan telfon dan SMS gratis di
                  Prancis <span className="font-bold">SOS dari Orange</span>{" "}
                  dengan 12€ per bulan untuk 40GB internet.
                </p>
              </div>
            </Glassmorphism>
          </div>
        </section>
        <section className="max-w-4xl mx-auto p-10">
          <h2 className="text-center">Saran Dari PPI</h2>
          <p className="mt-5 text-justify">
            Beberapa minggu <span className="font-bold">pertama</span> kamu
            menggunakan data internet roaming dari Indonesia, lalu kamu bisa
            langsung memesan kartu SIM dengan abonnement setelah kamu punya akun
            bank Prancis, atau sambil menunggu akun bank menggunakan kartu SIM
            prépayée. <br />
            <span className="font-bold">
              Hati-hati dengan pilihan abonnement avec engagement
            </span>{" "}
            karena artinya kamu diikat kontrak untuk pilihan tersebut sampai
            durasinya habis, biasanya satu tahun.
          </p>
        </section>
        <section className="py-5">
          <h2 className="text-center max-w-3xl mx-auto ">
            Penilaian SIM Berdasarkan Pengalaman Mahasiswa di Prancis
          </h2>
          <div className="flex flex-row gap-20 py-10">
            <div className="basis-1/2">
              <Glassmorphism>
                <h3 className="text-center">Sosh</h3>
                <div className="p-5">
                  <p>
                    Milik Orange France menawarkan sinyal{" "}
                    <span className="font-bold">bagus</span> dan internet{" "}
                    <span className="font-bold">cepat </span>
                    bahkan sampai di pelosok desa-desa Prancis atau di{" "}
                    <span className="font-bold">terowongan</span> bawah tanah
                    métro, sehingga misalkan kamu sedang bepergian dengan bus,
                    kamu tidak akan ada masalah koneksi.
                    <br />
                    <br />
                    Kekurangannya lebih mahal dengan kuota internet lebih
                    sedikit yaitu 12€/bulan 40GB
                  </p>
                </div>
                <div className="w-max mx-auto">
                  <Image src={sosh} layout="fixed" />
                </div>
              </Glassmorphism>
            </div>
            <Glassmorphism>
              <h3 className="text-center">Red by SFR</h3>
              <div className="p-5">
                <p>
                  Milik SFR dan B&You, milik Bouygues Telecom menawarkan sinyal
                  dan kecepatan internet yang{" "}
                  <span className="font-bold">cukup</span> bagus untuk kebutuhan
                  sehari-hari di <span className="font-bold">kota besar</span>{" "}
                  seperti Lyon dan di desa-desa yang cukup terkenal.
                  <br />
                  <span className="font-bold">Kekurangan</span>: kadang ada{" "}
                  <span className="font-bold">penurunan</span> internet dari 4G
                  ke 3G di tengah perjalanan bus atau ketika di dalam
                  terowongan.
                  <br />
                  <span className="font-bold">Kelebihan</span>: paket lebih{" "}
                  <span className="font-bold">murah</span> dari Sosh dengan
                  kuota internet lebih banyak: 12€/bulan 60GB
                </p>
              </div>
              <div className="flex flex-row justify-around">
                <div className="my-auto">
                  <Image src={byou} layout="fixed" width={150} height={50}/>
                </div>
                <Image src={red} layout="fixed" width={150} height={130} />
              </div>
            </Glassmorphism>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TibadiLyon;
