import Hero from "../components/Hero";
import k from "../images/hero/hero6.png";
import Image from "next/image";
import ifi from "../images/keberangkatan/IFI.png";
import RoomType from "../components/RoomType";
import uang from "../images/icon/uang.png";
import school from "../images/icon/school.png";
import apartment from "../images/icon/apartment.png";
import Glassmorphism from "../components/Glassmorphism";
import s from "../styles/Home.module.css";
import cc1 from "../images/icon/cc1.png";
import cc2 from "../images/icon/cc2.png";
import hangat from "../images/icon/baju.png";
import baju from "../images/icon/pakaian.png";
import cooker from "../images/icon/pemasaknasi.png";
import photo from "../images/icon/photo.png";
import mi from "../images/icon/emi.png";
import batik from "../images/icon/shirt.png";
import obat from "../images/icon/fontisto_pills.png";
import books from "../images/icon/books.png";
import blur1 from "../images/blur1.png";
import Disclose from "../components/Disclosure";
import Link from "next/link";
const studio = `1 kamar tidur dan dapur dalam satu
ruangan. Kamar mandi dan toilet
terpisah`;
const t1 = `1 kamar tidur. Dapur, kamar mandi
dan toilet terpisah`;
const t2 = `1 kamar tidur & 1 ruang tengah.
Dapur, kamar mandi dan toilet
terpisah`;
const t3 = `2 kamar tidur & 1 ruang tengah.
Dapur, kamar mandi dan toilet
terpisah`;
const t4 = `3 kamar tidur & 1 ruang tengah.
Dapur, kamar mandi dan toilet
terpisah`;
const t5 = `T4 dan seterusnya ditambah kamar
tidur yang lebih banyak`;
const bis = `T1Bis, T2Bis, T3Bis artinya ada
ruangan yang cukup besar sehingga
bisa dibagi dua. Contoh seperti T1Bis mempunyai satu ruangan terpisah
yang bisa menjadi kamar tidur kedua`;
const chamber = `Biasanya untuk CROUS, artinya
hanya ada kamar tidur. Dapur, kamar
mandi dan toilet di luar kamar tidur
dan berbagi dengan penghuni lain`;

const Keberangkatan = () => {
  return (
    <>
      <main data-scroll-container>
        <div className="w-screen overflow-y-hidden">
          <Hero img={k} title={"Keberangkatan"} />
        </div>
        <div className="layout md:p-0 p-10">
          <section className="text-primary md:px-20 px-0 md:mt-5 mt-0 mx-auto">
            <h2 className="text-center max-w-xl mx-auto">
              Mengajukan visa VLS-TS
            </h2>
            <div className="flex md:flex-row flex-col justify-around py-10 md:gap-0 gap-5 text-justify ">
              <div className="mx-auto md:w-full w-2/3">
                <Image src={ifi} alt="" />
              </div>
              <p className="max-w-xl m-auto">
                Hal pertama yang harus dilakukan setelah mendapat pengumuman
                penerimaan di Lyon adalah{" "}
                <span className="font-bold">
                  menghubungi Campus France terdekat di kotamu.
                </span>{" "}
                Mereka akan mendampingi kamu agar mendapat izin tinggal di
                Prancis bernama{" "}
                <span className="font-bold">
                  Via TLS-TS atau{" "}
                  <span className="font-bold italic">Visa long sejour</span>.
                </span>
                <br />
                <br />
                Proses dari awal pemberian dan paspor ke Campus France sampai
                kembali ke tanganmu bisa memakan waktu{" "}
                <span className="font-bold">sampai dua bulan</span>, tergantung
                situasi dan kondisi. Jadi pastikan langkah pertama ini di
                prioritaskan karena tanpa visa, kamu tidak akan bisa berangkat
                ke Prancis.
              </p>
            </div>
          </section>
          <section className="text-primary mx-auto flex flex-col gap-10 relative">
            <h2 className="text-center max-w-3xl mx-auto">Tempat Tinggal</h2>
            <div>
              <p className="max-w-4xl mx-auto text-justify">
                Di Prancis, pada umumnya para pelajar tinggal di tempat tinggal
                <span className="italic">(logement)</span> berupa apartemen di
                mana kamu membayar tagihan bulanan
                <span className="italic">(loyer)</span> yang terkadang bisa
                termasuk biaya listrik, air, gas dan internet. Di dalam
                apartemen, kamu disebut locataire, dan kamu bisa tinggal sendiri
                atau bersama penghuni lain{" "}
                <span className="italic">(colocataire)</span>.
              </p>
            </div>
            <div className="flex flex-col gap-10 relative  ">
              <h3 className="text-center">Tipe-tipe tempat tinggal</h3>
              <div className="z-10 grid md:grid-cols-2 grid-cols-1 gap-10 md:w-7/12 w-full mx-auto grow-0">
                <div className="md:col-span-2 min-w-full max-w-xl ">
                  <RoomType type="Studio" content={studio} />
                </div>
                <RoomType type="T1" content={t1} />
                <RoomType type="T2" content={t2} />
                <RoomType type="T3" content={t3} />
                <RoomType type="T4" content={t4} />
                <RoomType type="T5" content={t5} />
                <RoomType type="BIS" content={bis} status={true} />
                <div className="md:col-span-2  min-w-full self-stretch">
                  <RoomType type="Chambre" content={chamber} />
                </div>
              </div>
              <div className="absolute z-0 left-2/4 w-2/4">
                <Image src={blur1} layout="intrinsic" />
              </div>
              <div className="w-3/4 -left-2/4 bottom-0 absolute align-bottom ">
                <Image src={blur1} layout="intrinsic" />
              </div>
            </div>
            <div className="max-w-4xl mx-auto flex flex-col gap-5 py-10">
              <h2 className="text-center">Kontrak</h2>
              <p className="text-justify">
                Apartemen dapat disewakan dalam bentuk Properti perseorangan (
                <span className="italic">propriete privee</span>) atau khusus
                pelajar (<span className="italic">résidences étudiantes</span>
                ).
                <span className="italic">Appartements prives</span> berarti kamu
                menyewa apartemen dari pemilik pribadi, di mana kontrak tempat
                tinggal, tagihan bulanan, laporan kerusakan atau perbaikan dan
                kebutuhan lainnya adalah antara kamu dan pemilik pribadi. Kamu
                bisa coba di link berikut:
              </p>
              <ul className="grid grid-cols-2 list-disc list-inside gap-3 ">
                <li>
                  <a
                    href="https://www.pap.fr/"
                    target="_blank"
                    className="underline text-blue-700"
                  >
                    pap.fr
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.leboncoin.fr/"
                    target="_blank"
                    className="underline text-blue-700"
                  >
                    leboncoin.fr
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.appartager.com/"
                    target="_blank"
                    className="underline text-blue-700"
                  >
                    appartager.com
                  </a>
                  <p className="text-sm">
                    (KHUSUS UNTUK PILIHAN DENGAN{" "}
                    <span className="italic">COLOCATAIRE</span>)
                  </p>
                </li>
                <li>
                  <a
                    href="https://www.seloger.com/"
                    target="_blank"
                    className="text-blue-700 underline"
                  >
                    seloger.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lokaviz.fr/"
                    target="_blank"
                    className="text-blue-700 underline"
                  >
                    lokaviz.fr
                  </a>
                </li>
                {/* <li>
              <p>Di group-group facebook</p>
            </li> */}
              </ul>
              <div>
                <p>
                  Untuk pilihan{" "}
                  <span className="italic">résidences étudiantes</span> berarti
                  kamu menyewa apartemen khusus pelajar yang biasanya merupakan:{" "}
                </p>
              </div>
              <ul className={s.listed}>
                <li>
                  Milik <span className="font-bold">suatu institusi</span>{" "}
                  pendidikan untuk mahasiswa/i universitas tersebut (seperti di
                  INSA Lyon atau École Centrale de Lyon) dimana kamu dapat
                  bertanya langsung ke bagian administrasi mengenai reservasi
                  kamar di apartemen mereka
                </li>
                <li>
                  Milik <span className="font-bold">pemerintah Prancis</span>{" "}
                  khusus untuk mahasiswa di kota tersebut (CROUS) yang diakses
                  lewat{" "}
                  <a
                    href="https://www.messervices.etudiant.gouv.fr/envole/"
                    target="_blank"
                    className="text-blue-700 underline italic font-bold"
                  >
                    messervices.etudiant.gouv.fr
                  </a>
                </li>
                <li>
                  Milik <span className="font-bold">perusahaan swasta</span>{" "}
                  yang ditujukan untuk mahasiswa (Les Estudines atau Studea)
                  lewat{" "}
                  <a
                    href="https://www.nexity-studea.com/"
                    target="_blank"
                    className="text-blue-700 underline italic font-bold"
                  >
                    nexity-studea.com
                  </a>
                  ,{" "}
                  <a
                    href="https://www.studapart.com/en"
                    target="_blank"
                    className="text-blue-700 underline italic font-bold"
                  >
                    studapart.com
                  </a>
                </li>
              </ul>
              <p>
                Website yang disusun oleh{" "}
                <span className="italic">Mairie de Lyon</span> juga mempunyai
                banyak pilihan yang dapat kamu pilih:
              </p>
              <div className="text-center">
                <a
                  href="https://www.lyoncampus.com/vivre/liste-des-residences-etudiantes"
                  target="_blank"
                  className="text-blue-700 underline italic font-bold"
                >
                  lyoncampus.com
                </a>
              </div>
            </div>
          </section>
          <section className="py-10 text-primary mx-auto relative ">
            <h2 className="text-center max-w-3xl mx-auto ">
              Poin Penting Memilih Tempat Tinggal
            </h2>
            <div className="absolute w-11/12 -top-1/2 -right-2/4 ">
              <Image src={blur1} />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mx-auto max-w-4xl py-10 ">
              <div className="flex flex-col items-center gap-3">
                <Image src={uang} layout="fixed" />
                <h4>Harga Murah</h4>
                <p className="text-center ">
                  CROUS biasanya opsi paling populer untuk mahasiswa karena
                  harganya cenderung paling murah (bisa 160€ di Lyon bersama
                  colocataire), namun permintaan bisa sangat tinggi dan
                  kompetitif, jadi lebih baik dilakukan secepat mungkin.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src={school} layout="fixed" />
                <h4>Dekat Sekolah</h4>
                <p className="text-center">
                  Kalau universitas kamu menawarkan apartemen mereka, kamu bisa
                  tinggal di kampus sehingga kamu bisa dekat dengan kelas,
                  perpustakaan, administrasi.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Image src={apartment} layout="fixed" />
                <h4>Apartemen Nyaman</h4>
                <p className="text-center">
                  Walaupun cenderung lebih mahal, apartemen pribadi bisa lebih
                  nyaman karena dapurnya luas, ada ruang tengah terpisah, tidak
                  seberisik apartemen pelajar, dapat gudang bawah tanah, dsb.
                </p>
              </div>
            </div>
            <div
              className="max-w-4xl mx-auto"
              data-scroll
              data-scroll-speed="1"
            >
              <Glassmorphism>
                <h3 className="text-center text-third ">PENTING !</h3>
                <p className="mt-5 text-justify">
                  Pastikan selalu minta rendez-vous atau janji bertemu untuk
                  melihat apartemen sebelum menandatangani kontrak, atau minta
                  telfon video seperti lewat Skype. Jangan pernah mengirim uang
                  sebelum menandatangani kontrak untuk mencegah penipuan.
                  Mengenai bantuan pengeluaran apartemen CAF, verifikasi dengan
                  penyewa apabila apartemen tersebut berhak mendapatkan CAF.
                </p>
              </Glassmorphism>
            </div>
            <div className="absolute w-10/12 -left-2/4 z-0">
              <Image src={blur1} />
            </div>
          </section>
          <section className="text-primary mx-auto py-5 relative z-10">
            <h2 className="text-center max-w-3xl mx-auto">
              Istilah Penting Administrasi Apartemen
            </h2>
            <div className="">
              <Disclose />
            </div>
          </section>
          <section className="mx-auto text-primary py-5">
            <h2 className="text-center">Dana Untuk Bulan Pertama</h2>
            <p className="mt-5 text-justify">
              Setiba di Prancis, kamu akan langsung mengeluarkan sejumlah biaya
              untuk kebutuhanmu. Apabila kamu ingin melakukan transfer uang
              bulananmu dari Indonesia ke Prancis, proses ini dapat memakan
              waktu sampai beberapa bulan karena membuka akun bank di Prancis
              cukup lama. Oleh karena itu, PPI Lyon menyarankan agar kamu
              menyiapkan dana pengeluaran untuk beberapa bulan pertama setelah
              tiba, contohnya 3 bulan pertama.
            </p>
            <div className="py-16 grid md:grid-cols-3 gap-10 text-center">
              <div>
                <Image src={cc1} layout="fixed" />
                <div className="flex flex-col gap-5 mt-2 ">
                  <h4>Kartu Debit atau Kredit</h4>
                  <p className="text-justify">
                    dari salah satu bank di Indonesia dengan logo Visa,
                    Mastercard dan sebagainya yang dapat melakukan penarikan
                    tunai dalam bentuk Euro (€) di mesin ATM Prancis dan bisa
                    juga digunakan untuk pembayaran langsung di mesin kartu
                    kredit di Prancis.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center -mt-5 ">
                <div className="ml-10">
                  <Image src={cc2} layout="fixed" />
                </div>
                <div className="flex flex-col my-5 gap-5">
                  <h4>Kartu Multivalas / Kartu Tabungan Mata Uang Asing</h4>
                  <p className="text-justify">
                    seperti Jenius yang bisa menyimpan dana dalam Rupiah dan
                    dapat dikonversi ke Euro lewat aplikasinya. Kartu ini dapat
                    digunakan untuk menarik cash Euro dan membayar Euro dengan
                    sistem contactless pada mesin kartu, fitur yang sangat
                    digunakan di Prancis.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src={uang} layout="fixed" />
                <div className="flex flex-col gap-5 mt-2">
                  <h4>Cash Euro</h4>
                  <p className="text-justify">
                    hati-hati dengan cash. Tips dari PPI Lyon adalah kamu bisa
                    membagi dana untuk bulan pertama dalam bentuk cash,
                    sedangkan untuk dua bulan berikutnya dalam kartu kredit atau
                    debit untuk mencegah kemungkinan adanya kehilangan atau
                    pencurian di Prancis! Untuk dana yang kamu siapkan
                    perbulannya, lihat{" "}
                    <Link href={"Budgeting"}>
                      <a className="underline text-blue-500">budgeting</a>
                    </Link>{" "}
                    bulanan di Lyon
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <h2 className="text-center">Data Internet Di Prancis</h2>
              <p className="text-left">
                PPI Lyon menyarankan kamu untuk membeli paket internet
                internasional dari Indonesia agar dapat roaming (setidaknya
                untuk 1 minggu), sampai kamu dapat membeli kartu SIM Prancis.
                Roaming ini biasanya bertahan selama satu bulan dan digunakan
                untuk kebutuhan penting seperti: komunikasi darurat, komunikasi
                dengan keluarga, navigasi dengan Google Maps, mengakses dokumen
                online dsb.
              </p>
            </div>
          </section>
          <section className="text-primary mx-auto">
            <h2 className="text-center">Transportasi ke Lyon</h2>
            <div className="py-5">
              <h3 className="italic">Langsung Ke Lyon</h3>
              <p className="mt-3">
                Terbang langsung ke Lyon melalui Bandara Lyon-Saint Exupéry
                (LYS) cenderung lebih <span className="font-bold">mahal</span>{" "}
                namun lebih <span className="font-bold">efisien dan cepat</span>
                . Contoh seperti maskapai Turkish Airlines CGK-IST-LYS dalam 18
                jam 45 menit seharga Rp 9.700.000. Pilihan lain seperti maskapai
                Emirates CGK-DXB-LYS ditempuh dalam 23 jam 50 menit seharga Rp
                8.400.000.
              </p>
            </div>
            <div className="pb-5">
              <h3 className="italic">
                Terbang ke Paris diikuti dengan kereta atau bus ke Lyon
              </h3>
              <p className="mt-3">
                Cara ini cenderung lebih{" "}
                <span className="font-bold">murah</span> namun{" "}
                <span className="font-bold">memakan waktu dan melelahkan</span>,
                khususnya ketika pertama kali tiba di Prancis. Kereta cepat
                Prancis TGV dari CDG – Lyon memakan waktu sekitar dua jam, namun
                lebih mahal daripada menggunakan bus yang mana memakan waktu
                sekitar 6 jam.
                <br />
                <span className="font-bold">Contoh</span> : Turkish Airlines
                CGK-IST-CDG dalam 17 jam 35 menit seharga Rp.7.000.000 dengan
                TGV CDG – Lyon Rp.750.000 atau dengan bus Flixbus CDG – Lyon
                Rp.150.000. TGV dapat dibooking di oui.sncf, bus seperti Flixbus
                di flixbus.fr atau ouibus di fr.ouibus.com.
              </p>
            </div>
          </section>
          <section
            className="max-w-4xl mx-auto py-10"
            data-scroll
            data-scroll-speed="1"
          >
            <Glassmorphism>
              <h2 className="text-center text-third">PENTING!</h2>
              <p className="mt-10">
                PPI Lyon tidak menyarankan kamu terbang ke negara sekitar
                Prancis seperti Swiss (Geneva), Italia (Milan) atau Belanda
                (Amsterdam), Visa VLS-TS termasuk Visa Schengen, Visa VLS-TS
                Prancis hanya berlaku untuk tiba di Prancis, sampai kamu
                mengurus OFII yang lalu bisa memberikan kamu kebebasan untuk
                pergi di zona Schengen.
              </p>
            </Glassmorphism>
          </section>
          <section className="pb-20">
            <h2 className="text-center">Memilih Barang yang Akan di Bawa</h2>
            <p className="font-bold text-center p-5">
              Selain kebutuhan utama seperti pakaian, dokumen penting dan
              kebutuhan pribadi lainnya, kamu bisa ikuti tips di bawah ini:
            </p>
            <div className="flex flex-col gap-10 md:p-5 p-0">
              <div className="flex md:flex-row flex-col gap-5 mx-auto">
                <div className="mx-auto">
                  <Image src={hangat} width={100} height={100} alt="" />
                </div>
                <div className="max-w-3xl">
                  <h4>Pakaian Musim Dingin</h4>
                  <p className="text-justify">
                    kami menyarankan lebih baik agar tidak membawa terlalu
                    banyak dan tidak terlalu tebal karena berat sehingga memakan
                    banyak bagasi. Kamu bisa mendapatkan jaket tebal di Prancis
                    dengan harga terjangkau
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-5 mx-auto">
                <div className="mx-auto">
                  <Image src={baju} width={100} height={100} alt="" />
                </div>
                <div className="max-w-3xl">
                  <h4>Pakaian Sehari-hari</h4>
                  <p className="text-justify">
                    Lebih baik membawa banyak pakaian dalam, termasuk kaus kaki
                    untuk digunakan sehari-hari karena kemungkinan besar kamu
                    akan membeli beberapa pakaian di Prancis, jadi lebih baik
                    tidak memenuhi koper dengan terlalu banyak pakaian.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-5 mx-auto">
                <div className="mx-auto">
                  <Image src={cooker} width={85} height={100} alt="" />
                </div>
                <div className="max-w-3xl">
                  <h4>Pemasak Nasi</h4>
                  <p className="text-justify">
                    Alat pemasak nasi memakan banyak tempat di bagasi dan
                    sebenarnya ada banyak pilihan pemasak nasi dengan harga
                    murah di toko elektronik Prancis. Pilihan yang lebih hemat
                    adalah kamu bisa belajar memasak nasi di panci, jadi tidak
                    perlu beli pemasak nasi.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-5 mx-auto">
                <div className="mx-auto">
                  <Image src={photo} width={85} height={100} alt="" />
                </div>
                <div className="max-w-3xl">
                  <h4>Pas Photo</h4>
                  <p className="text-justify">
                    Tidak perlu bawa banyak kopi dan tipe pas foto untuk dibawa
                    ke Prancis (secukupnya saja), karena proses administrasi
                    seperti OFII pun mengharuskan kamu untuk membuat pas foto di
                    Prancis dengan mesin photomaton yang sudah distandardisasi
                    pemerintah.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-5 mx-auto">
                <div className="mx-auto">
                  <Image src={mi} width={85} height={100} alt="" />
                </div>
                <div className="max-w-3xl">
                  <h4>Mie Instan</h4>
                  <p className="text-justify">
                    Tidak perlu bawa banyak mie instan karena beberapa tempat di
                    Lyon menjualnya, seperti toko-toko Asia dengan harga sekitar
                    50 sen per bungkus. Lebih baik membawa bumbu-bumbu instan
                    untuk masak seperti bumbu Bamboe, bumbu instan Royco, dsb.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-5 mx-auto">
                <div className="mx-auto">
                  <Image src={batik} width={85} height={100} alt="" />
                </div>
                <div className="max-w-3xl">
                  <h4>Batik</h4>
                  <p className="text-justify">
                    Jangan lupa untuk bawa pakaian daerah seperti Batik untuk
                    dipakai di acara-acara kultural yang melibatkan PPI Lyon.
                    Pakaian yang mudah digunakan dan simpel seperti kemeja Batik
                    bisa menjadi contoh budaya Indonesia di depan masyarakat
                    Prancis!
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-5 mx-auto">
                <div className="mx-auto">
                  <Image src={obat} width={100} height={100} alt="" />
                </div>
                <div className="max-w-3xl">
                  <h4>Obat- Obatan</h4>
                  <p className="text-justify">
                    Jangan lupa untuk mencatat dan mempersiapkan semua kebutuhan
                    medis pribadi kamu dari Indonesia seperti obat penyakit
                    spesifik, pereda alergi, paracetamol, lensa kontak dsb.
                    terkadang harga obat di Prancis jauh lebih mahal, jadi lebih
                    baik dipersiapkan dari Indonesia.
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-5 mx-auto">
                <div className="mx-auto">
                  <Image src={books} width={100} height={100} alt="" />
                </div>
                <div className="max-w-3xl">
                  <h4>Buku</h4>
                  <p>
                    Kalau memungkinkan, tidak perlu membawa banyak buku berat
                    seperti kamus atau buku kelas Prancis karena versi
                    elektroniknya dapat didownload dan disimpan di handphone
                    atau laptop. Untuk catatan pribadi, bisa difoto di
                    handphone.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default Keberangkatan;
