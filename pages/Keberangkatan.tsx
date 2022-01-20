import Hero from "../components/Hero";
import k from "../images/keberangkatan/keberangkatanHero.png";
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
// GANTI PHOTO JADI RAME2
const Keberangkatan = () => {
  return (
    <>
      <Hero img={k} title={"Keberangkatan"} />
      <div className="layout">
        <section className="text-primary p-20 mx-auto">
          <h2 className="text-center max-w-xl mx-auto">
            Mengajukan visa VLS-TS
          </h2>
          <div className="flex flex-row justify-around py-10">
            <Image src={ifi} alt="" layout="fixed" />
            <p className="max-w-xl">
              Hal pertama yang harus dilakukan settelah mendapat pengumuna
              penerimaan di Lyon adalah{" "}
              <span className="font-bold">
                menghubungi Campus France terdekat di kotamu.
              </span>{" "}
              Mereka akan mendampingi kamu agar mendapat izin tinggal di Prancis
              bernama{" "}
              <span className="font-bold">
                Via TLS-TS atau Visa long sejour.
              </span>
              <br />
              <br />
              Proses dari awal pemberian dan paspor ke Campus France sampai
              kembali ke tanganmu bisa memakan waktu{" "}
              <span className="font-bold">sampai dua bulan</span>, tergantung
              situasi dan kondisi. Jadi pastikan langkah pertama ini di
              prioritaskan karena tanpa visa, kamu tidak akan bisa berangkat ke
              Prancis.
            </p>
          </div>
        </section>
        <section className="text-primary mx-auto flex flex-col gap-10 relative">
          <h2 className="text-center max-w-3xl mx-auto">
            Mencari Tempat Tinggal Dari Indonesia
          </h2>
          <div>
            <p className="max-w-4xl mx-auto text-justify">
              Di Prancis, pada umumnya para pelajar tinggal di tempat tinggal
              (logement) berupa apartemen di mana kamu membayar tagihan bulanan
              (loyer) yang terkadang bisa termasuk biaya listrik, air, gas dan
              internet. Di dalam apartemen, kamu disebut locataire, dan kamu
              bisa tinggal sendiri atau bersama penghuni lain (colocataire).
            </p>
          </div>
          <div className="flex flex-col gap-10 relative  ">
            <h3 className="text-center">Tipe-tipe tempat tinggal</h3>
            <div className="z-10 grid grid-cols-2 gap-10 w-7/12 justify-items-center mx-auto justify-center ">
              <div className="col-span-2 min-w-full ">
                <RoomType type="Studio" />
              </div>
              <RoomType type="T1" />
              <RoomType type="T2" />
              <RoomType type="T3" />
              <RoomType type="T4" />
              <RoomType type="T5" />
              <RoomType type="BIS" />
              <div className="col-span-2 min-w-full self-stretch">
                <RoomType type="Chamber" />
              </div>
            </div>
            <div className="absolute z-0 left-2/4 w-2/4"> 
              <Image src={blur1} layout="intrinsic"/>
            </div>
            <div className="w-3/4 -left-2/4 bottom-0 absolute align-bottom ">
            <Image src={blur1} layout="intrinsic"/>
            </div>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col gap-5 py-10">
            <h3 className="text-center">Kontrak</h3>
            <p className="text-justify">
              Apartemen dapat disewakan dalam bentuk Properti perseorangan
              (prpriete privee) atau khusus pelajar (residences etudiantes).
              Appartements prives berarti kamu menyewakan apartemen dari pemilik
              pribadi, di mana kontrak tempat tinggal, tagihan bulanan, laporan
              kerusakan atau perbaikan dan kebutuhan lainya adlaah antara kamu
              dan si pemilik atau kamu dengan agen yang bertanggung jawab
              mengurus apartemen tersebut. Untuk mencari apartemen tipe ini,
              kamu bisa coba di link berikut:
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
                  (KHUSUS UNTUK PILIHAN DENGAN COLOCATAIRE)
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
                Untuk pilihan résidences étudiantes berarti kamu menyewakan
                apartemen khusus pelajar yang biasanya merupakan:{" "}
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
                Milik <span className="font-bold">perusahaan swasta</span> yang
                ditujukan untuk mahasiswa (Les Estudines atau Studea) lewat{" "}
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
              Website yang disusun oleh Mairie de Lyon juga mempunyai banyak
              pilihan yang dapat kamu pilih:
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
            Poin Penting Pada Saat Memilih Tempat Tinggal
          </h2>
          <div className="absolute w-11/12 -top-1/2 -right-2/4 ">
            <Image src={blur1} />
          </div>
          <div className="grid grid-cols-3 gap-10 mx-auto max-w-4xl py-10 ">
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
          <div className="max-w-4xl mx-auto">
            <Glassmorphism>
              <h3 className="text-center text-third ">PENTING !</h3>
              <p className="mt-5 text-justify">
                Pastikan selalu minta rendez-vous atau janji bertemu untuk
                melihat apartemen sebelum menandatangani kontrak, atau minta
                telfon video seperti lewat Skype. Jangan pernah mengirim uang
                sebelum menandatangani kontrak untuk mencegah penipuan. Mengenai
                bantuan pengeluaran apartemen CAF, verifikasi dengan penyewa
                apabila apartemen tersebut berhak mendapatkan CAF
              </p>
            </Glassmorphism>
          </div>
          <div className="absolute w-10/12 -left-2/4 z-0">
            <Image src={blur1} />
          </div>
        </section>
        <section className="text-primary mx-auto py-5 relative z-10">
          <h2 className="text-center max-w-3xl mx-auto">
            Istilah-Istilah Penting Saat Proses Administrasi Menyewa Apartemen
          </h2>
          
          <div className="py-10 flex flex-col gap-10 max-w-4xl mx-auto ">
            <Glassmorphism>
              <h3 className="text-third text-center">
                CONTRAT DE LOCATION/BAIL
              </h3>
              <p className="mt-5 text-justify">
                Kontrak antara kamu (locataire) dan pemilik (propriétaire).
                Kontrak ini akan mencantumkan total loyer yang harus dibayar.
                Baca baik-baik setiap poin, khususnya mengenai loyer dan
                identitasmu. Tanyakan apapun yang kurang jelas ke
                propriétairemu.
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h3 className="text-third text-center">
                DÉPÔTDE GARANTIE/CAUTION
              </h3>
              <p className="mt-5 text-justify">
                Deposit dalam bentuk uang yang akan dikembalikan ketika kontrak
                selesai dan kamu meninggalkan apartemen. Deposit ini digunakan
                untuk membayar kerusakan selama kamu di apartemen apabila ada.
                Biasanya disetujui di kontrak berupa 1 bulan loyer.
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h3 className="text-third text-center">ÉTATS DES LIEUX</h3>
              <p className="mt-5 text-justify">
                Tahap ketika kamu dan pemilik memverifikasi kondisi fisik
                apartemen untuk pertama kali kamu masuk apartemen dan tahap
                ketika kamu keluar dari apartemen. Ini dilakukan untuk
                memastikankerusakan yang sudah ada sebelum kamu masuk bukan
                tanggung jawab kamu dan keadaan apartemen ketika kamu datang
                sama ketika kamu pergi.
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h3 className="text-third text-center">
                ATTESTATION D’HÉBERGEMENT/JUSTIFICATIF DE DOMICILE
              </h3>
              <p className="mt-5 text-justify">
                Surat sebagai bukti bahwa kamu benar-benar tinggal di
                apartemenmu, berdasarkan dan dilindungi oleh pemerintah Prancis
                di bawah bail yang sudah ditandatangani oleh pemilik dan kamu.
                Dokumen ini penting untuk semua proses administrasi prancis
                seperti OFII, membuka akun bank dan mengurus asuransi kesehatan.
                Apabila kamu tinggal bersama colocataire namun namamu tidak
                tercantum di bail, kamu bisa meminta colocmu untuk membuatkan
                justificatif de domicile yang menyatakan bahwa kamu benar
                tinggal bersama dia, dan setiap kali dibutuhkan bawa
                justificatif ini bersama dengan bail yang mencantumkan nama
                coloc-mu.
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h3 className="text-third text-center">ASSURANCE D’HABITATION</h3>
              <p className="mt-5 text-justify">
                Setiap penduduk di Prancis harus memiliki asuransi tempat
                tinggal untuk menjamin tempat tinggalmu ketika terjadi
                kebakaran, perampokan atau bencana alam lainnya. Asuransi ini
                harus dipersiapkan ketika menandatangani kontrak dan ditawarkan
                agen-agen asuransi dan bank dengan biaya 20- 60€ per tahun.
              </p>
            </Glassmorphism>
            <Glassmorphism>
              <h3 className="text-third text-center">
                AGARANT/CAUTION SOLIDAIRE
              </h3>
              <p className="mt-5 text-justify">
                Individu yang akan bertanggung jawab menjamin pembayaran loyer
                kalau kamu tidak bisa bayar, di mana individu tersebut akan
                menandatangani surat perjanjian sebagai buktinya. Seorang garant
                harus memiliki pekerjaan tetap di Prancis, atau bisa diperluas
                di Uni Eropa di mana dia harus mempunyai penghasilan minimal
                tiga kali harga loyer per bulan. Garant ini biasanya diminta
                ketika membuat permohonan apartemen baru, dan menjadi kendala
                untuk mahasiswa internasional karena tidak adanya garant di
                Prancis. Sebagai solusi, kamu bisa:
              </p>
              <ul className={s.listed}>
                <li>
                  Mengajukan permohonan garant untuk mahasiswa dari pemerintah
                  Prancis melalui website visale.fr, tanpa dipungut biaya dan
                  biasanya dokumen garantor dalam bentuk PDF bisa keluar dalam
                  satu minggu. Kekurangan Visale adalah loyer di atas 800€ per
                  bulan tidak bisa dijamin dengan Visale.
                </li>
                <li>
                  Mengajukan permohonan garant dari bank dengan membayar biaya
                  bulanan atau tahunan yang dikalkulasikan berdasarkan loyermu.
                  Garant dari bank bisa diajukan untuk apartemen di atas 800€
                  per bulan
                </li>
                <li>
                  Mencari apartemen di situs seperti leboncoin.fr yang tidak
                  meminta garant. Walaupun jarang, ada beberapa propriétaire
                  yang tidak mementingkan garant dan memberimu pilihan untuk
                  membayar caution yang lebih besar misal 3-6 bulan pertama.
                  Pilihan ini tidak terlalu direkomendasikan karena walau
                  mempermudah proses administrasi apartemen, garant adalah
                  persyaratan wajib yang ditentukan oleh pemerintah Prancis
                </li>
              </ul>
            </Glassmorphism>
          </div>
          <div className="absolute bottom-0 left-3/4 w-3/4">
            <Image src={blur1}/>
          </div>
        </section>
        <section className="mx-auto text-primary py-5">
          <h2 className="text-center">
            Mempersiapkan Dana Untuk Bulan Pertama
          </h2>
          <p className="mt-5 text-justify">
            Setiba di Prancis, kamu akan langsung mengeluarkan sejumlah biaya
            untuk kebutuhanmu. Apabila kamu ingin melakukan transfer uang
            bulananmu dari Indonesia ke Prancis, proses ini dapat memakan waktu
            sampai be berapa bulan karena membuka akun bank di Prancis cukup
            lama. Oleh karena itu, PPI Lyon menyarankan agar kamu menyiapkan
            dana pengeluaran untuk beberapa bulan pertama setelah tiba,
            contohnya 3 bulan pertama.
          </p>
          <div className="py-16 grid grid-cols-3 gap-10 text-center">
            <div>
              <Image src={cc1} layout="fixed" />
              <div className="flex flex-col gap-5 mt-2 ">
                <h4>Kartu Debit atau Kredit</h4>
                <p className="text-justify">
                  dari salah satu bank di Indonesia dengan logo Visa, Mastercard
                  dan sebagainya yang dapat melakukan penarikan tunai dalam
                  bentuk Euro (€) di mesin ATM Prancis dan bisa juga digunakan
                  untuk pembayaran langsung di mesin kartu kredit di Prancis.
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
                  seperti Jenius yang bisa menyimpan dana dalam Rupiah dan dapat
                  dikonversi ke Euro lewat aplikasinya. Kartu ini dapat
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
                  membagi dana untuk bulan pertama dalam bentuk cash, sedangkan
                  untuk dua bulan berikutnya dalam kartu kredit atau debit untuk
                  mencegah kemungkinan adanya kehilangan atau pencurian di
                  Prancis! Untuk dana yang kamu siapkan perbulannya, lihat
                  bagian 4 untuk contoh budgeting bulanan di Lyon
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h2 className="text-center">
              Mempersiapkan Data Internet Di Prancis
            </h2>
            <p className="text-left">
              PPI Lyon menyarankan kamu untuk membeli paket internet
              internasional dari Indonesia agar dapat roaming (setidaknya untuk
              1 minggu), sampai kamu dapat membeli kartu SIM Prancis. Roaming
              ini biasanya bertahan selama satu bulan dan digunakan untuk
              kebutuhan penting seperti: komunikasi darurat, komunikasi dengan
              keluarga, navigasi dengan Google Maps, mengakses dokumen online
              dsb.
            </p>
          </div>
        </section>
        <section className="text-primary mx-auto">
          <h2 className="text-center">Memilih Moda Transportasi ke Lyon</h2>
          <div className="py-5">
            <h3 className="italic">Langsung Ke Lyon</h3>
            <p className="mt-3">
              Terbang langsung ke Lyon melalui Bandara Lyon-Saint Exupéry (LYS)
              cenderung lebih <span className="font-bold">mahal</span> namun
              lebih <span className="font-bold">efisien dan cepat</span>. Contoh
              seperti maskapai Turkish Airlines CGK-IST-LYS dalam 18 jam 45
              menit seharga Rp 9.700.000. Pilihan lain seperti maskapai Emirates
              CGK-DXB-LYS ditempuh dalam 23 jam 50 menit seharga Rp 8.400.000.
            </p>
          </div>
          <div className="pb-5">
            <h3 className="italic">
              Terbang ke Paris diikuti dengan kereta atau bus ke Lyon
            </h3>
            <p className="mt-3">
              Cara ini cenderung lebih <span className="font-bold">murah</span>{" "}
              namun{" "}
              <span className="font-bold">memakan waktu dan melelahkan</span>,
              khususnya ketika pertama kali tiba di Prancis. Kereta cepat
              Prancis TGV dari CDG – Lyon memakan waktu sekitar dua jam, namun
              lebih mahal daripada menggunakan bus yang mana memakan waktu
              sekitar 6 jam.
              <br />
              <span className="font-bold">Contoh</span> : Turkish Airlines
              CGK-IST-CDG dalam 17 jam 35 menit seharga Rp.7.000.000 dengan TGV
              CDG – Lyon Rp.750.000 atau dengan bus Flixbus CDG – Lyon
              Rp.150.000. TGV dapat dibooking di oui.sncf, bus seperti Flixbus
              di flixbus.fr atau ouibus di fr.ouibus.com.
            </p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto py-10">
          <Glassmorphism>
            <h2 className="text-center text-third">PENTING!</h2>
            <p className="mt-10">
              PPI Lyon tidak menyarankan kamu terbang ke negara sekitar Prancis
              seperti Swiss (Geneva), Italia (Milan) atau Belanda (Amsterdam),
              Visa VLS-TS termasuk Visa Schengen, Visa VLS-TS Prancis hanya
              berlaku untuk tiba di Prancis, sampai kamu mengurus OFII yang lalu
              bisa memberikan kamu kebebasan untuk pergi di zona Schengen.
            </p>
          </Glassmorphism>
        </section>
        <section className="pb-20">
          <h2 className="text-center">Memilih Barang yang Akan di Bawa</h2>
          <p className="font-bold text-center p-5">
            Selain kebutuhan utama seperti pakaian, dokumen penting dan
            kebutuhan pribadi lainnya, kamu bisa ikuti tips di bawah ini:
          </p>
          <div className="flex flex-col gap-10 p-5">
            <div className="flex flex-row gap-5 mx-auto">
              <Image src={hangat} width={100} height={100} alt="" />
              <div className="max-w-3xl">
                <h4>Pakaian Musim Dingin</h4>
                <p>
                  kami menyarankan lebih baik agar tidak membawa terlalu banyak
                  dan tidak terlalu tebal karena berat sehingga memakan banyak
                  bagasi. Kamu bisa mendapatkan jaket tebal di Prancis dengan
                  harga terjangkau
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mx-auto">
              <Image src={baju} width={100} height={100} alt="" />
              <div className="max-w-3xl">
                <h4>Pakaian Sehari-hari</h4>
                <p>
                  Lebih baik membawa banyak pakaian dalam, termasuk kaus kaki
                  untuk digunakan sehari-hari karena kemungkinan besar kamu akan
                  membeli beberapa pakaian di Prancis, jadi lebih baik tidak
                  memenuhi koper dengan terlalu banyak pakaian.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mx-auto">
              <Image src={cooker} width={85} height={100} alt="" />
              <div className="max-w-3xl">
                <h4>Pemasak Nasi</h4>
                <p>
                  Alat pemasak nasi memakan banyak tempat di bagasi dan
                  sebenarnya ada banyak pilihan pemasak nasi dengan harga murah
                  di toko elektronik Prancis. Pilihan yang lebih hemat adalah
                  kamu bisa belajar memasak nasi di panci, jadi tidak perlu beli
                  pemasak nasi.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mx-auto">
              <Image src={photo} width={85} height={100} alt="" />
              <div className="max-w-3xl">
                <h4>Pas Photo</h4>
                <p>
                  Tidak perlu bawa banyak kopi dan tipe pas foto untuk dibawa ke
                  Prancis (secukupnya saja), karena proses administrasi seperti
                  OFII pun mengharuskan kamu untuk membuat pas foto di Prancis
                  dengan mesin photomaton yang sudah distandardisasi pemerintah.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mx-auto">
              <Image src={mi} width={85} height={100} alt="" />
              <div className="max-w-3xl">
                <h4>Mie Instan</h4>
                <p>
                  Tidak perlu bawa banyak mie instan karena beberapa tempat di
                  Lyon menjualnya, seperti toko-toko Asia dengan harga sekitar
                  50 sen per bungkus. Lebih baik membawa bumbu-bumbu instan
                  untuk masak seperti bumbu Bamboe, bumbu instan Royco, dsb.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mx-auto">
              <Image src={batik} width={85} height={100} alt="" />
              <div className="max-w-3xl">
                <h4>Batik</h4>
                <p>
                  Jangan lupa untuk bawa pakaian daerah seperti Batik untuk
                  dipakai di acara-acara kultural yang melibatkan PPI Lyon.
                  Pakaian yang mudah digunakan dan simpel seperti kemeja Batik
                  bisa menjadi contoh budaya Indonesia di depan masyarakat
                  Prancis!
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mx-auto">
              <Image src={obat} width={100} height={100} alt="" />
              <div className="max-w-3xl">
                <h4>Obat- Obatan</h4>
                <p>
                  Jangan lupa untuk mencatat dan mempersiapkan semua kebutuhan
                  medis pribadi kamu dari Indonesia seperti obat penyakit
                  spesifik, pereda alergi, paracetamol, lensa kontak dsb.
                  terkadang harga obat di Prancis jauh lebih mahal, jadi lebih
                  baik dipersiapkan dari Indonesia.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 mx-auto">
              <Image src={books} width={100} height={100} alt="" />
              <div className="max-w-3xl">
                <h4>Buku</h4>
                <p>
                  Kalau memungkinkan, tidak perlu membawa banyak buku berat
                  seperti kamus atau buku kelas Prancis karena versi
                  elektroniknya dapat didownload dan disimpan di handphone atau
                  laptop. Untuk catatan pribadi, bisa difoto di handphone.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Keberangkatan;
