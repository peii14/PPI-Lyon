import Hero from "../components/Hero";
import k from "../images/keberangkatan/keberangkatanHero.png";
import Image from "next/image";
import bank from "../images/tiba/gambar.png";
import check from "../images/icon/check.png";
import Glassmorphism from "../components/Glassmorphism";
import arrow from "../images/icon/arrow.png";
import arrow2 from "../images/icon/arrow2.png";
import id from "../images/icon/ID.png";
import passport from "../images/icon/passport.png";
import sosh from "../images/tiba/sosh.png";
import red from "../images/tiba/red.png";
import byou from "../images/tiba/byou.png";
import free from "../images/tiba/free.png";
import tcl from "../images/tiba/tcl.png";
import jempol from "../images/icon/jempol.png";
import tcl2 from "../images/tiba/tcl2.png";
import s from "../styles/Home.module.css";
import cv from "../images/tiba/cartevitale.png";
import caem from "../images/tiba/caem.png";
import reimbursment from "../images/tiba/reimbursment.png";
import visa from "../images/icon/visa.png";
import timbre from "../images/icon/timbre.png";
import identitas from "../images/icon/identitas.png";
import bukti from "../images/icon/bukti.png";
// GANTI PHOTO
const TibadiLyon = () => {
  return (
    <>
    <div className="w-screen overflow-y-hidden">
      <Hero img={k} title={"Tiba di Lyon"} />
    </div>
      <div className="layout md:p-0 p-10">
        <section className="text-primary md:pt-20 pt-0 ">
          <h2 className="text-center">Membuat Rekening Bank Prancis</h2>
          <div className="flex md:flex-row flex-col justify-around gap-10 py-10 max-w-4xl mx-auto">
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
              <p className="w-full">
                <span className="font-bold">Nomor IBAN</span>
                <br />
                (International Bank Account Number)
                <br />
                Penting untuk semua tagihan, pembayaran online
              </p>
            </div>
            <div className="flex flex-row gap-5">
              <div className="my-auto w-14">
                <Image src={check} width={55} height={55} />
              </div>
              <p className="w-full">
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
              <p className="my-auto w-full">
                <span className="font-bold">Nama dan Alamat Pemilik Akun </span>
              </p>
            </div>
          </div>
          <div className="md:p-10 py-10 ">
            <p className="text-center mx-auto max-w-3xl">
              Agar dapat melakukan transaksi secara online, jangan lupa untuk
              meminta <span className="font-bold">aktivasi akun online</span>{" "}
              lewat conseiller kamu.{" "}
            </p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto">
          <Glassmorphism>
            <div className="grid  grid-cols-3 text-center items-center align-middle">
              <p className="">Membuka akun</p>
              <div className=" row-span-16 col-start-2 ">
                <div className="py-5">
                  <Image src={arrow2}/>
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
          <div className="md:p-10 py-5">
            <p className="text-center">
              Dokumen yang dibutuhkan tergantung bank, namun biasanya{" "}
              <span className="font-bold">setidaknya</span>:
            </p>
            <div className="flex flex-col gap-10 md:p-10 py-5">
              <div className="flex md:flex-row flex-col md:gap-10 gap-3">
                <div className="mx-auto">
                  <Image src={passport} layout="fixed" />
                </div>
                <p className="font-bold md:text-left text-center my-auto text-2xl">
                  Paspor dan Fotokopi Paspor
                </p>
              </div>
              <div className="flex md:flex-row flex-col md:gap-10 gap-3">
                <div className="mx-auto">
                  <Image src={id} layout="fixed" />
                </div>
                <div className="md:text-left text-center">
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
            <div className="text-center md:p-5 py-5">
              <p>
                Karena proses dari pembuatan akun sampai dapat kartu memakan
                waktu lama, kami menyarankan membawa kartu kredit/debit
                Indonesia dan tunai Euro secukupnya dari Indonesia sebagai
                pengganti.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-4xl mx-auto">
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
          <div className="flex md:flex-row flex-col md:gap-20 gap-10 py-10 ">
            <div className="">
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
                <div className="md:w-max w-11/12 mx-auto py-2">
                  <Image src={sosh} />
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
              <div className="flex flex-row justify-around md:w-full w-11/12 mx-auto">
                <div className="m-auto md:w-full w-7/12">
                  <Image src={byou} width={150} height={50} />
                </div>
                <div className="md:w-full w-7/12">
                  <Image src={red} width={150} height={130} />
                </div>
              </div>
            </Glassmorphism>
          </div>
          <div className="md:w-2/5 mx-auto">
            <Glassmorphism>
              <h3 className="text-center">Free</h3>
              <div className="p-5">
                <p>
                  Free menawarkan paket internet yang{" "}
                  <span className="font-bold">paling murah</span> di antara
                  pilihan yang ada tapi seringkali kualitas sinyal sangat buruk
                  di perjalanan dan di dalam bangunan.
                  <br />
                  <br />
                  Pilihan yang ada seperti 11€/bulan 70GB
                </p>
              </div>
              <div className="w-max mx-auto">
                <Image src={free} layout="fixed" width={200} height={100} />
              </div>
            </Glassmorphism>
          </div>
        </section>
        <section className="py-10">
          <h2 className="mx-auto text-center max-w-xl">
            Membuat Kartu Transportasi Di Lyon:TCL
          </h2>
          <div className="flex md:flex-row flex-col py-5 md:gap-16 gap-5 max-w-4xl mx-auto">
            <div className="md:w-full w-7/12 mx-auto">
              <Image src={tcl} width={500} height={400} />
            </div>
            <p className="m-auto text-justify">
              Transportasi publik di Lyon dipegang oleh satu perusahaan: TCL
              (Transport en Commun LyonnaisI), termasuk métro, tram, dan bus.
              TCL menawarkan banyak pilihan tarif untuk transportasi, namun
              secara umum dibagi menjadi dua kategori utama: abonnement dan
              ticket à l'unité.
            </p>
          </div>
          <div className="max-w-4xl mx-auto py-5">
            <h3>Ticket à l'Unité</h3>
            <div className="mt-5">
              <p>
                ticket à l'unité atau tiket{" "}
                <span className="font-bold">sekali</span> pakai yang berlaku{" "}
                <span className="font-bold">satu jam </span>
                di seluruh rute TCL, termasuk métro, tram, dan bus, dengan
                syarat harus divalidasi setiap kali mengganti moda transportasi
                (misalkan dari tram ke métro, atau bus ke tram dan sebaliknya).
                Tiket ini bisa dibeli di mesin tiket di stasiun tram dan métro
                atau lewat konduktor bus.
                <br />
                <br />
                Harga tiket satuan berbeda-beda per dibuatnya panduan ini, dari
                1.90€ per tiket untuk pembelian satuan di mesin tiket tram dan
                métro, atau ada pilihan{" "}
                <span className="font-bold">
                  carnet de 10 tickets moins de 26ans{" "}
                </span>
                seharga 15.10€ untuk 10 tiket sekaligus. Hati-hati pada saat
                beli tiket lewat konduktor bus, karena harganya lebih mahal:
                2.20€ per tiket.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto py-5">
            <div className="flex flex-row gap-5">
              <h3>Abonnement</h3>
              <Image src={jempol} height={20} width={27} />
            </div>
            <div className="mt-5">
              <p>
                Pilihan abonnement atau abodemen adalah tarif dengan harga
                bulanan yang sudah fix dan lebih tinggi daripada ticket à
                l'unité, namun kamu bisa menggunakan transportasi tanpa batas
                waktu sepuasnya dengan menggunakan{" "}
                <span className="font-bold">
                  kartu langganan técély yang kamu buat di kios TCL,
                </span>{" "}
                seperti di Gare Part Dieu, atau bisa dipesan online, lalu
                aktifkan langganannya dengan membayar di mesin tiker stasiun
                tram dan métro.
                <br />
                <br />
                Untuk abonnement bulanan, harganya adalah 32€ per bulan untuk
                étudiant ditambah 5€ biaya{" "}
                <span className="font-bold">pembuatan kartu pertama kali</span>.
                kamu juga punya pilihan untuk bayar 32€ per bulan atau 320€ per
                tahun, jadi bisa dapat dua bulan gratis.
              </p>
            </div>
          </div>
          <div className="mx-auto md:w-max w-full md:p-10 p-5">
            <Image src={tcl2} layout="intrinsic" />
          </div>
        </section>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-center">Saran Dari PPI</h2>
          <div className="md:p-10 p-0 md:mt-0 mt-5">
            <Glassmorphism>
              <p>
                Membuat kartu TCL dengan abonnement agar kamu bisa dengan{" "}
                <span className="font-bold">bebas </span>
                dan lebih <span className="font-bold">hemat</span> bepergian.
                Namun jika kamu merasa tidak akan sering menggunakan
                transportasi umum (kamu tinggal di kampus, kamu mau beli sepeda,
                etc.) kamu bisa memilih carnet de 10.
              </p>
            </Glassmorphism>
          </div>
        </section>
        <section className="py-7">
          <h2 className="text-center">
            Mengurus Daftar Ulang Kuliah: CVEC & Kelas
          </h2>
          <div className="py-10 max-w-4xl mx-auto ">
            <Glassmorphism>
              <div className="flex flex-col gap-10 text-justify">
                <p>
                  Sebelum daftar ulang, pastikan kamu sudah menerima semua
                  instruksi spesifik dari universitas kamu untuk proses yang
                  daftar ulang.
                </p>
                <p>
                  Setiap universitas di Lyon memiliki bagian layanan
                  administrasi khusus mahasiswa internasional seperti{" "}
                  <span className="font-bold">maison internationale</span> atau{" "}
                  <span className="font-bold">
                    servicé scolarité pour les étudiants internationaux
                  </span>
                  , atau apabila tidak ada bagian administrasi khusus bisa
                  dilakukan lewat layanan administrasi reguler. Semua proses
                  asministrasi yang bersangkutan dengan sekolah kamu dapat
                  diajukan lewat bagian ini.
                </p>
                <p>
                  Biasanya sebelum hari pertama dimulainya tahun ajaran baru,
                  kamu harus daftar ulang ke bagian maison internationale dengan
                  membawa attestation d’acceptationmu. Setelah itu kamu akan
                  dapat nomor{" "}
                  <span className="font-bold">
                    INE (Identifiant national étudiants)
                  </span>{" "}
                  atau nomor mahasiswa Prancis, beserta dengan instruksi untuk
                  membuat akun di situs{" "}
                  <span className="font-bold text-blue-700 underline cursor-pointer">
                    <a
                      href="https://www.messervices.etudiant.gouv.fr/envole/"
                      target={"_blank"}
                    >
                      messervices.etudiants.gouv.fr
                    </a>
                  </span>{" "}
                  dan di situs{" "}
                  <span className="font-bold">espace étudiante</span>{" "}
                  universitas tersebut.
                </p>
              </div>
            </Glassmorphism>
          </div>
          <div className="max-w-4xl text-justify mx-auto">
            <p>
              Situs messervices etudiants adalah situs yang didedikasikan oleh
              pemerintah Prancis untuk melakukan semua proses administrasi
              mahasiswa seperti pembayaran{" "}
              <span className="font-bold">CVEC</span>, permintaan tempat tinggal
              di
              <span className="font-bold"> CROUS</span> atau permintaan dana
              dalam bentuk beasiswa.
              <br />
              <br />
              <span className="font-bold">Pembayaran CVEC</span> ini adalah
              langkah penting yang harus dilakukan
              <span className="font-bold">sekali setiap tahun</span>. Ini adalah
              pembayaran sebesar <span className="font-bold">90€</span> yang
              termasuk asuransi kesehatan Prancis untuk pelajar, kesehatan di
              klinik universitas dan kontribusi untuk kegiatan asosiasi
              universitas. Pembayaran dilakukan lewat akunmu menggunakan{" "}
              <span className="font-bold ">kartu kredit atau debit</span> dan
              setelah itu kamu akan mendapatkan
              <span className="font-bold"> de paiement de CVEC</span> yang kamu
              harus tunjukkan ke administrasi.
              <br />
              <br />
              <span className="font-bold">Carte d'etudiant</span> atau kartu
              mahasiswa bisa dimintakan ke administrasi dan biasanya dikirim
              lewat pos ke alamat rumah atau diambil di administrasi satu bulan
              setelah daftar ulang. Untuk semua kartu pelajar dari universitas
              manapun di Lyon tipenya sama: kartu berwarna{" "}
              <span className="font-bold">biru</span> dengan{" "}
              <span className="font-bold">foto</span>,{" "}
              <span className="font-bold">nama universitas</span>, nomor{" "}
              <span className="font-bold">INE</span>,
              <span className="font-bold">tanggal lahir</span> dan{" "}
              <span className="font-bold">stiker tahun ajaran</span> yang kamu
              harus ganti di administrasi setiap tahunnya.
              <br />
              <br />
              Kartu pelajar Lyon mempunyai akses{" "}
              <span className="font-bold">Izly</span>, dimana kartu tersebut
              dapat diisi dengan <span className="font-bold">saldo</span> untuk
              membeli makanan di{" "}
              <span className="font-bold">
                restoran universitas atau restoran milik CROUS
              </span>
              . Detailnya bisa dilihat di situs{" "}
              <span className="underline font-bold text-blue-700">
                <a href="https://izly.fr/" target={"_blank"}>
                  izly.fr
                </a>
              </span>
              .
            </p>
          </div>
          <div className="md:p-10 p-0 md:mt-0 mt-5 text-center">
            <p>
              Jangan lupa hal-hal lain yang kamu bisa tanyakan dengan lebih
              jelas di administrasi seperti:
            </p>
            <ul
              className={`grid md:grid-cols-2 grid-cols-1  grid-flow-row p-5 text-left mx-auto max-w-3xl justify-around md:gap-0 gap-3 ${s.listed}`}
            >
              <li>Orientasi mahasiswa internasional baru</li>
              <li>Daftar kelas dan jadwalnya masing-masing</li>
              <li>
                Fasilitas kampus lainnya yang bisa kamu gunakan: kafetaria, gym,
                perpustakaan, layanan printing/fotokopi, dsb.
              </li>
              <li>Grup untuk tugas proyek</li>
              <li>Peta kampus</li>
            </ul>
          </div>
        </section>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-center">
            Mengurus Asuransi Kesehatan: Ameli, CPAM, Mutuelle
          </h2>
          <div className="text-justify py-5">
            <p>
              Semua penduduk di Prancis, termasuk mahasiswa, berhak mendapatkan
              asuransi pemerintah standar{" "}
              <span className="font-bold">gratis</span> yang disebut{" "}
              <span className="font-bold">sécurité sociale </span>
              yang akan menutup <span className="font-bold">70%</span>{" "}
              pengeluaran kesehatan yang bersifat{" "}
              <span className="font-bold">dasar </span>
              seperti{" "}
              <span className="font-bold">
                konsultasi dokter umum, konsultasi dokter spesialis (terkecuali
                yang opsional), menebus obat dengan resep dokter, x-ray dan
                dirawat di rumah sakit
              </span>
              .
              <br />
              <br />
              Pengeluaran kesehatan yang bersifat{" "}
              <span className="font-bold">opsional</span> tidak tertutup oleh
              70% ini, seperti{" "}
              <span className="font-bold">
                konsultasi dokter gigi, dokter mata dan dokter kulit
              </span>
              . Pemerintah Prancis
              <span className="font-bold"> tidak</span> memungut biaya sécurité
              sociale untuk mahasiswa dan secara
              <span className="font-bold"> gratis</span> diperbaharui
              validasinya setiap tahun ajaran{" "}
              <span className="font-bold">selama tetap status mahasiswa.</span>
              <br />
              <br />
              Oleh karena itu, <span className="font-bold">sisa</span> 30% dari
              pengeluaran medis umum yang tidak tertutup oleh sécurité sociale
              atau semua pengeluaran medis opsional hanya akan ditutup oleh{" "}
              <span className="italic font-bold">mutuelle</span> yang merupakan{" "}
              <span className="font-bold">asuransi tambahan berbayar</span>{" "}
              untuk sécurité sociale dan{" "}
              <span className="font-bold">
                ditawarkan oleh perusahaan swasta dengan manfaat yang
                berbeda-beda
              </span>
              . Sebagian besar mutuelle menawarkan paket{" "}
              <span className="font-bold">bulanan </span>yang akan ditagih
              langsung ke akun bank Prancismu.
              <br />
              <br />
              Contoh untuk mahasiswa adalah mutuelle seharga{" "}
              <span className="font-bold ">15€/bulan </span> dari SMERRA yang
              memberikan kamu keuntungan seperti konsultasi dokter gigi, bahkan
              membeli lensa kontak atau mengganti kacamata dua tahun sekali.
              <br />
              <br />
              Di Prancis, <span className="font-bold">
                sécurité sociale
              </span>{" "}
              adalah asuransi yang kamu{" "}
              <span className="font-bold">harus </span>
              punya, sedangkan mutuelle bersifat{" "}
              <span className="font-bold">opsional</span>. Artinya,{" "}
              <span className="font-bold">
                kalau kamu merasa cukup dengan sécurité sociale, kamu tidak
                perlu berlangganan mutuelle.
              </span>
              <br />
              <br />
              Pembayaran pengeluaran medis di Prancis sifatnya remboursement
              atau reimbursement di mana kamu akan bayar sendiri dulu, lalu akan
              <span className="font-awesome">
                dikembalikan uangnya via transfer bank
              </span>
              . Semua proses ini dapat dipantau, diubah dan dilakukan lewat
              badan kesehatan pemerintah Ameli{" "}
              <span className="font-bold">lewat website</span>
              <span className="font-bold underline text-blue-700 cursor-pointer">
                {" "}
                <a href="https://www.ameli.fr/">ameli.fr</a>
              </span>
              .
              <br />
              <br />
              Kantor dengan bangunan fisik yang{" "}
              <span className="font-bold">merepresentasikan Ameli</span> di
              seluruh Prancis adalah{" "}
              <span className="font-bold">
                CPAM (Caisse primaire d'assurance maladie)
              </span>
              . Setiap prefektur di Prancis memiliki kantor CPAM pusat yang
              bertanggung jawab atas semua layanan Ameli di prefektur tersebut.
              <span className="font-bold">
                Untuk kota Lyon, CPAM Rhône yang bertanggung jawab untuk Ameli
                kamu.
              </span>
            </p>
          </div>
        </section>
        <section className="py-10">
          <h2 className="max-w-3xl mx-auto text-center">
            Untuk Memulai Pengurusan Ameli Pertama Kali Tiba di Prancis:
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 py-10 text-justify">
            <Glassmorphism>
              <h1 className="text-center">1</h1>
              <p className="mt-5">
                Buka situs{" "}
                <a
                  href="https://etudiant-etranger.ameli.fr/#/"
                  target={"_blank"}
                  className="font-bold underline text-blue-700"
                >
                  etudiant-etranger.ameli.fr
                </a>{" "}
                dan kamu akan melakukan{" "}
                <span className="font-bold">registrasi online</span> dengan
                memasukan pilihan étudiant sans activité professionnelle,
                tanggal lahir dan kewarganegaraan
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h1 className="text-center">2</h1>
              <p className="mt-5">
                Kamu akan diberikan <span className="font-bold">instruksi</span>{" "}
                untuk mengupload <span className="font-bold">dokumen</span>{" "}
                seperti paspor, akte lahir, attestation d'inscription, RIB dsb.
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h1 className="text-center">3</h1>
              <p className="mt-5">
                Setelah semua dokumen selesai di upload, Ameli akan
                <span className="font-bold"> memverifikasi</span> berkasmu dan
                apabila sudah lengkap, kamu akan dikirimkan lewat email nomor{" "}
                <span className="font-bold italic">
                  sécurité sociale provisoire
                </span>{" "}
                yang artinya <span className="font-bold">sementara</span>,
                karena nomor ini akan diganti dengan nomor sécurité sociale
                fixe.
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h1 className="text-center">4</h1>
              <p className="mt-5">
                Dengan nomor sementara ini kamu{" "}
                <span className="font-bold">
                  sudah bisa pergi ke dokter dan meminta reimbursement
                </span>
                . Untuk cara melakukan permintaan reimbursement.
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h1 className="text-center">5</h1>
              <p className="mt-5">
                Setelah beberapa waktu yang bervariasi dari{" "}
                <span className="font-bold">satu minggu sampai enam bulan</span>
                , Ameli akan mengirimkan{" "}
                <span className="font-bold">
                  surat lewat pos ke alamat rumahmu
                </span>{" "}
                yang{" "}
                <span className="font-bold">
                  berisikan nomor sécurité sociale fixe{" "}
                </span>{" "}
                beserta{" "}
                <span className="font-bold">
                  password untuk mengakses akun Ameli permanenmu
                </span>
                . Kamu bisa login di website ameli.fr dan mengupload
                dokumen-dokumen tambahan yang diminta apabila diminta. Situs{" "}
                <a
                  href="https://etudiant-etranger.ameli.fr/#/"
                  target={"_blank"}
                  className="font-bold underline text-blue-700"
                >
                  etudiant-etranger.ameli.fr
                </a>{" "}
                sudah tidak dipakai di langkah ini
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h1 className="text-center">6</h1>
              <p className="mt-5">
                Lalu kamu harus memesan{" "}
                <span className="font-bold">carte vitale</span> dan{" "}
                <span className="font-bold">
                  CEAM (carte européenne d'assurance maladie)
                </span>{" "}
                yang bisa dilakukan di{" "}
                <a
                  href="https://www.ameli.fr/"
                  target={"_blank"}
                  className="text-blue-700 font-bold underline "
                >
                  ameli.fr
                </a>
                . Carte vitale digunakan sebagai{" "}
                <span className="font-bold">
                  kartu identitas sécurité sociale
                </span>{" "}
                untuk kebutuhan reimbursement, sedangkan CEAM digunakan untuk
                <span className="font-bold">
                  mengakses sécurité sociale Prancis ketika kamu mengalami
                  masalah medis di Uni Eropa
                </span>
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h1 className="text-center">7</h1>
              <p className="mt-5">
                Setelah dipesan, kedua kartu ini{" "}
                <span className="font-bold">
                  dikirim lewat pos ke alamat rumah yang terdaftar
                </span>
                . Proses ini bisa memakan waktu{" "}
                <span className="font-bold">sampai beberapa bulan!</span>
              </p>
            </Glassmorphism>
          </div>
          <div className="text-center">
            <h2>Tip Proses:</h2>
            <p className="mt-5 text-justify max-w-3xl mx-auto">
              Proses dari pertama kali membuat akun di situs Ameli untuk
              mahasiswa internasional sampai mendapatkan carte vitale bisa
              memakan waktu sampai 10 bulan, jadi lebih baik dilaksanakan
              <span className="font-bold"> secepat mungkin!</span>
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-center">
            Contoh Proporsi Reimbursement Kesehatan Lewat Ameli.fr
          </h2>
          <div className="md:p-10 p-0 md:mt-0 mt-5">
            <Image src={reimbursment} layout="responsive" />
          </div>
          <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-around text-center md:mt-0 mt-5">
            <div className="max-w-sm">
              <h3>Carte Vitale</h3>
              <Image src={cv} layout="intrinsic" />
            </div>
            <div className="max-w-sm">
              <h3>CEAM</h3>
              <Image src={caem} layout="intrinsic" />
            </div>
          </div>
        </section>
        <section className="py-20">
          <h2 className="text-center">Mengurus Izin Tinggal: OFII</h2>
          <p className="mt-5 max-w-4xl mx-auto text-justify">
            <span className="font-bold">
              OFII (Office Français de l'Immigration et Intégration)
            </span>{" "}
            adalah izin tinggal yang dikeluarkan pemerintah Prancis setelah
            verifikasi{" "}
            <span className="font-bold">Visa Long Séjour (VLS-TS)</span> kamu,
            yang juga memberikan kamu hak untuk bepergian di dalam zona
            Schengen.
          </p>
          <p className="mt-10 text-center">
            Proses administrasi OFII harus dilakukan dalam waktu{" "}
            <span className="font-bold">3 bulan pertama setelah tiba</span> di
            Prancis dengan :
          </p>
          <div className="py-5 max-w-4xl mx-auto">
            <Glassmorphism>
              <div className="flex flex-col gap-5 text-center">
                <p>
                  Membuat akun di website administration- etrangers-en
                  france.interieur.gouv.fr dengan memilih Je valide mon VLS-TS
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Mengikuti instruksi di website seperti memasukkan nomor visa
                  dan identitas dengan hati-hati
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Membayar pajak sebagai biaya administrasi lewat perangko
                  timbre fiscal online menggunakan kartu kredit atau debit di
                  website yang sama, untuk tipe étudiant seharga 60€
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Kamu juga bisa membeli timbre fiscal sejumlah 60€ ini di tabac
                  atau toko rokok. Kamu akan diberikan perangko dalam bentuk
                  fisik dengan kode yang kamu bisa masukkan online
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Setelah semua langkah selesai, kamu akan menerima 2 email: ID
                  pengguna yang harus disimpan untuk akses OFII online
                  kedepannya dan dokumen konfirmasi validasi visa kamu
                </p>
              </div>
              <p className="text-justify mt-14">
                Dokumen konfirmasi inilah yang{" "}
                <span className="font-bold">
                  harus kamu cetak dan selipkan di paspor kamu bersama dengan
                  visa VLS-TS
                </span>
                , karena{" "}
                <span className="font-bold">
                  {" "}
                  kedua ini harus ditunjukkan bersama sebagai bukti penduduk
                  Prancis
                </span>
                . Penting untuk diingat kalau visa{" "}
                <span className="font-bold">
                  VLS-TS tanpa OFII tidak memberikan kamu kebebasan bepergian di
                  zona Schengen!{" "}
                </span>{" "}
                Kamu{" "}
                <span className="font-bold">harus membawa kedua dokumen</span>{" "}
                ketika memasuki negara Schengen lain!
              </p>
            </Glassmorphism>
          </div>
        </section>
        <section>
          <h2 className="text-center max-w-4xl mx-auto">
            Dokumen Yang Harus Diupload Keakun OFII Onlinemu Antara Lain :
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-0 max-w-4xl mx-auto gap-5 p-5 items-center justify-center text-center ">
            <div className="flex flex-col">
              <div className="mx-auto">
                <Image src={passport} width={100} height={120} />
              </div>
              <p className="-ml-5">Passport</p>
            </div>
            <div className="flex flex-col">
              <div className="mx-auto">
                <Image src={visa} width={100} height={120} />
              </div>
              <p>Visa VLS-TS</p>
            </div>
            <div className="flex flex-col">
              <div className="mx-auto">
                <Image
                  src={identitas}
                  layout="intrinsic"
                  width={100}
                  height={120}
                />
              </div>
              <p>
                Foto identitas yang diambil di mesin foto{" "}
                <span className="italic">Photomaton</span>
              </p>
            </div>
            <div className="md:col-span-3 col-span-1 flex md:flex-row flex-col md:gap-0 gap-5 justify-around">
              <div className="flex flex-col">
                <div className="mx-auto">
                  <Image
                    src={bukti}
                    layout="intrinsic"
                    width={100}
                    height={120}
                  />
                </div>
                <p>
                  Bukti tempat tinggal di Prancis <br />
                  (Attestation d’hebergément)
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mx-auto">
                  <Image
                    src={timbre}
                    layout="intrinsic"
                    width={100}
                    height={120}
                  />
                </div>
                <p>
                  Bukti pembayaran timbre fiscal <br />
                  sejumlah 60€
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-center">Mengurus Bantuan Tempat Tinggal: CAF</h2>
          <p className="max-w-4xl text-justify mx-auto py-5">
            <span className="font-bold">
              CAF (Caisse d’allocation familiale)
            </span>{" "}
            adalah badan pemerintah Prancis yang bertanggung jawab atas{" "}
            <span className="font-bold">bantuan sosial finansial</span> untuk
            semua penduduk Prancis. CAF membantu memberikan bantuan dana seperti
            untuk keluarga muda, pensiunan dan juga dalam bentuk subsidi{" "}
            <span className="font-bold">
              biaya tempat tinggal atau loyer yang disebut APL (Aide
              personalisée au logement)
            </span>
            . APL ini dapat diminta ke CAF dan mereka akan menganalisa jumlah
            dana yang akan disubsidikan berdasarkan beberapa faktor seperti
            total loyer bulanan, kota, tipe apartemen dan situasi ekonomi yang
            meminta.
          </p>
        </section>
        <section className="max-w-4xl mx-auto text-center">
          <h2>
            Langkah-langkah Mengajukan Permohonan APL ke CAF Untuk Pertama
            Kalinya:
          </h2>
          <div className="py-7">
            <Glassmorphism>
              <div className="flex flex-col gap-3">
                <p>
                  Membuka situs{" "}
                  <a
                    href="https://caf.fr/"
                    target={"_blank"}
                    className="font-bold underline text-blue-700"
                  >
                    caf.fr
                  </a>
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Memilih{" "}
                  <span className="font-bold">faire une simulation</span>, lalu
                  di bawah kolom Vous n’êtes pas allocataire memilih le logement
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Mengikuti dan membaca dengan jelas setiap data yang mereka
                  minta seperti kodepos, luas dan tipe apartemen. Jika ada yang
                  kurang jelas mengenai apartemenmu, tanyakan langsung ke
                  propriétaire. Untuk bagian bantuan finansial dan penghasilan
                  di Prancis, pastikan kamu masukan 0 untuk semuanya apabila
                  kamu tidak berpenghasilan di Prancis. Jika ada langkah
                  spesifik yang kurang jelas bisa hubungi PPI Lyon langsung
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Ketika simulasi selesai, kamu akan mendapatkan estimasi
                  subsidi dari CAF. Standar untuk apartemen di Lyon dengan
                  kisaran 200-430€ per bulan, kamu bisa mendapatkan 85€ subsidi
                  per bulan
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Setelah semua langkah selesai, kamu akan menerima 2 email: ID
                  pengguna yang harus disimpan untuk akses OFII online
                  kedepannya dan dokumen konfirmasi validasi visa kamu
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Setelah simulasi, pilih faire une demande dan kamu akan
                  <span className="font-bold">membuat akun CAF baru</span>{" "}
                  dengan memasukan nama, email, alamat dan identitas diri
                  lainnyaÏ
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Kamu akan mendapatkan email konfirmasi pembuatan akun, dan CAF
                  akan{" "}
                  <span className="font-bold">
                    mengirim lewat pos ke alamat rumahmu
                  </span>{" "}
                  satu surat berisi
                  <span className="font-bold italic">
                    numéro allocataire
                  </span>{" "}
                  dan satu surat lainnya berisi password untuk login akunmu.
                  Seperti pembuatan akun bank, proses ini bisa memakan waktu{" "}
                  <span className="font-bold">sampai dua bulan</span>
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Setelah kedua suratnya tiba, kamu bisa login dan ikuti
                  instruksi akunmu, seperti mengisi{" "}
                  <span className="font-bold">
                    formulir perpajakan Prancis tahun sebelumnya
                  </span>
                  , di mana kamu masukkan 0 bila tidak ada penghasilan di
                  Prancis
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Langkah terakhir adalah mengajukan semua dokumen yang diminta
                  dan menunggu konfirmasi dari CAF (dossier à traiter). Proses
                  ini juga bisa memakan waktu lebih dari satu bulan
                </p>
                <div>
                  <Image src={arrow} />
                </div>
                <p>
                  Setelah diverifikasi dan tidak ada kebutuhan lainnya,{" "}
                  <span className="font-bold">
                    CAF akan memulai transfer ke propriétaire setiap bulannya
                  </span>
                </p>
              </div>
            </Glassmorphism>
          </div>
          <div>
            <p className="text-justify py-7">
              Penting diketahui bahwa subsidi loyer yang sudah kamu bayarkan
              penuh di bulan-bulan sebelumnya{" "}
              <span className="font-bold">
                akan dikembalikan (remboursement)
              </span>
              oleh CAF ke propriétaire. Kalau jumlahnya menumpuk, mungkin kamu
              tidak perlu membayar loyer sama sekali di bulan berikutnya.
              Pastikan kamu{" "}
              <span className="font-bold">
                pantau transfer oleh CAF lewat attestation di akunmu
              </span>
              . Ini bisa kamu tunjukan ke propriétaire sebagai bukti CAF sudah
              mengirimkan sejumlah dana sebagai remboursement.
              <br /> <br />
              Jangan lupa untuk{" "}
              <span className="font-bold">
                deklarasi kepergian kamu dari apartemen ketika kamu pindah
                tempat tinggal dan kontraknya sudah habis!
              </span>{" "}
              Kalau kamu lupa, CAF akan terus mengirimkan dana ke{" "}
              <span className="italic">propriétaire</span> sampai dia yang akan
              deklarasi kepergianmu, dan kamu akan ditagih oleh CAF untuk
              membayar apa yang sudah dibayarkan ke{" "}
              <span className="italic">propriétaire</span>!
            </p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto py-10">
          <h2 className="text-center">Melapor Diri: KBRI Paris</h2>
          <div className="text-justify mt-7">
            <p>
              Melapor diri ke pemerintah Indonesia adalah langkah{" "}
              <span className="font-bold">penting</span> yang
              <span className="font-bold">
                {" "}
                menjamin perlindungan kamu di bawah pemerintah Indonesia
              </span>{" "}
              ketika kamu berkedudukan di negara lain. Untuk penduduk Lyon, kamu
              harus melapor diri ke Kedutaan Besar Republik Indonesia (KBRI) di
              Paris lewat website Kemenlu:
            </p>
            <div className="p-5 text-center">
              <a
                href="https://kemlu.go.id/paris/id/pages/lapor_diri_/633/etc-menu"
                target={"_blank"}
                className="font-bold underline text-blue-700"
              >
                kemlu.go.id
              </a>
            </div>
            <p>
              Kamu bisa ikuti video instruksi di mana kamu akan memasukan
              identitas diri, nomor paspor dan nomor visa. Proses lapor diri
              online langsung selesai dan data diri kamu akan{" "}
              <span className="font-bold">tercatat</span> di KBRI Paris.
              Kedepannya, proses lapor diri ini{" "}
              <span className="font-bold">
                dibutuhkan untuk memulai semua permintaan administrasi ke KBRI
                Paris seperti perpanjangan paspor, penggantian paspor dan
                permintaan layanan lainnya.
              </span>
              <br /> <br />
              Perlu diingat juga bahwa semua perubahan informasi yang
              bersangkutan dengan <span className="font-bold">
                domisili
              </span>{" "}
              seperti pindah tempat tinggal atau pulang ke Indonesia untuk
              liburan musim panas harus dilaporkan ke KBRI lewat akun online
              kamu{" "}
              <span className="font-bold">agar data mereka tetap akurat.</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default TibadiLyon;
