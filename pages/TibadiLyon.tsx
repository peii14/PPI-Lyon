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
import free from "../images/tiba/free.png";
import tcl from "../images/tiba/tcl.png";
import jempol from "../images/icon/jempol.png";
import tcl2 from "../images/tiba/tcl2.png";
import s from "../styles/Home.module.css";
// GANTI PHOTO
const TibadiLyon = () => {
  return (
    <>
      <Navbar />
      <Hero img={k} />
      <div className="layout">
        <section className="text-primary pt-20 ">
          <h2 className="text-center">Membuat Rekening Bank Prancis</h2>
          <div className="flex flex-row justify-around gap-10 py-10 max-w-4xl mx-auto">
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
        <section className="max-w-4xl mx-auto">
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
          <div className="flex flex-row gap-20 py-10 ">
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
                <div className="w-max mx-auto py-2">
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
                  <Image src={byou} layout="fixed" width={150} height={50} />
                </div>
                <Image src={red} layout="fixed" width={150} height={130} />
              </div>
            </Glassmorphism>
          </div>
          <div className="w-2/5 mx-auto">
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
          <div className="flex flex-row py-5 gap-16 max-w-4xl mx-auto">
            <div>
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
          <div className="mx-auto w-max p-10">
            <Image src={tcl2} layout="fixed" />
          </div>
        </section>
        <section className="max-w-4xl mx-auto">
          <h2 className="text-center">Saran Dari PPI</h2>
          <div className="p-10">
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
                  <span className="font-bold underline cursor-pointer">
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
              <span className="underline font-bold">
                <a href="https://izly.fr/" target={"_blank"}>
                  izly.fr
                </a>
              </span>
              .
            </p>
          </div>
          <div className="p-10 text-center">
            <p>
              Jangan lupa hal-hal lain yang kamu bisa tanyakan dengan lebih
              jelas di administrasi seperti:
            </p>
            <ul
              className={`grid grid-cols-2 grid-flow-row p-5 text-left mx-auto max-w-3xl justify-around ${s.listed}`}
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
              <span className="font-bold"> gratis</span> diperbaharui validasinya
              setiap tahun ajaran{" "}
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
              adalah asuransi yang kamu <span className="font-bold">harus </span>
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
              <span className="font-bold underline cursor-pointer">
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
          <h2 className="max-w-3xl mx-auto text-center">Untuk Memulai Pengurusan Ameli Pertama Kali Tiba di Prancis:</h2>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TibadiLyon;
