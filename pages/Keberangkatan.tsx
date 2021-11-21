import Hero from "../components/Hero";
import k from "../images/keberangkatan/keberangkatanHero.png";
import Image from "next/image";
import ifi from "../images/keberangkatan/IFI.png";
import Footer from "../components/Footer";
import RoomType from "../components/RoomType";
import uang from "../images/icon/uang.png";
import school from "../images/icon/school.png";
import apartment from "../images/icon/apartment.png";
import Glassmorphism from "../components/Glassmorphism";

const Keberangkatan = () => {
  return (
    <>
      <Hero img={k} />
      <section className="text-primary p-20 max-w-6xl mx-auto">
        <h1 className="text-center max-w-xl mx-auto">Mengajukan visa VLS-TS</h1>
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
            <span className="font-bold">Via TLS-TS atau Visa long sejour.</span>
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
      <section className="text-primary max-w-6xl mx-auto flex flex-col gap-10">
        <h1 className="text-center max-w-2xl mx-auto">
          Mencari Tempat Tinggal Dari Indonesia
        </h1>
        <div>
          <p className="max-w-3xl mx-auto text-justify">
            Di Prancis, pada umumnya para pelajar tinggal di tempat tinggal
            (logement) berupa apartemen di mana kamu membayar tagihan bulanan
            (loyer) yang terkadang bisa termasuk biaya listrik, air, gas dan
            internet. Di dalam apartemen, kamu disebut locataire, dan kamu bisa
            tinggal sendiri atau bersama penghuni lain (colocataire).
          </p>
        </div>
        <div className="flex flex-col gap-10  ">
          <h3 className="text-center">Tipe-tipe tempat tinggal</h3>
          <div className="grid grid-cols-2 gap-10 w-7/12 justify-items-center mx-auto justify-center ">
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
        </div>
        <div className="max-w-3xl mx-auto flex flex-col gap-5 py-10">
          <h3 className="text-center">Kontrak</h3>
          <p className="text-justify">
            Apartemen dapat disewakan dalam bentuk Properti perseorangan
            (prpriete privee) atau khusus pelajar (residences etudiantes).
            Appartements prives berarti kamu menyewakan apartemen dari pemilik
            pribadi, di mana kontrak tempat tinggal, tagihan bulanan, laporan
            kerusakan atau perbaikan dan kebutuhan lainya adlaah antara kamu dan
            si pemilik atau kamu dengan agen yang bertanggung jawab mengurus
            apartemen tersebut. Untuk mencari apartemen tipe ini, kamu bisa coba
            di link berikut:
          </p>
          <ul className="grid grid-cols-2 list-disc list-inside gap-3">
            <li>
              <a
                href="https://www.pap.fr/"
                target="_blank"
                className="no-underline hover:underline"
              >
                pap.fr
              </a>
            </li>
            <li>
              <a
                href="https://www.leboncoin.fr/"
                target="_blank"
                className="no-underline hover:underline"
              >
                leboncoin.fr
              </a>
            </li>
            <li>
              <a
                href="https://www.appartager.com/"
                target="_blank"
                className="no-underline hover:underline"
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
                className="no-underline hover:underline"
              >
                seloger.com
              </a>
            </li>
            <li>
              <a
                href="https://www.lokaviz.fr/"
                target="_blank"
                className="no-underline hover:underline"
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
          <ul className="list-disc list-inside gap-3">
            <li>
              Milik <span className="font-bold">suatu institusi</span>{" "}
              pendidikan untuk mahasiswa/i universitas tersebut (seperti di INSA
              Lyon atau École Centrale de Lyon) dimana kamu dapat bertanya
              langsung ke bagian administrasi mengenai reservasi kamar di
              apartemen mereka
            </li>
            <li>
              Milik <span className="font-bold">pemerintah Prancis</span> khusus
              untuk mahasiswa di kota tersebut (CROUS) yang diakses lewat{" "}
              <a
                href="https://www.messervices.etudiant.gouv.fr/envole/"
                target="_blank"
                className="no-underline hover:underline italic font-bold"
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
                className="no-underline hover:underline italic font-bold"
              >
                nexity-studea.com
              </a>
              ,{" "}
              <a
                href="https://www.studapart.com/en"
                target="_blank"
                className="no-underline hover:underline italic font-bold"
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
              className="no-underline hover:underline italic font-bold"
            >
              lyoncampus.com
            </a>
          </div>
        </div>
      </section>
      <section className="p-10 text-primary max-w-3xl mx-auto ">
        <h2 className="text-center  mx-auto">
          Keuntungan, Kekurangan dan Poin Penting Pada Saat Memilih Tempat
          Tinggal
        </h2>
        <div className="grid grid-cols-3 gap-10 mx-auto max-w-4xl py-10 ">
          <div className="flex flex-col items-center">
            <Image src={uang} layout="fixed" />
            <h4>Harga Murah</h4>
            <p className="text-center ">
              CROUS biasanya opsi paling populer untuk mahasiswa karena harganya
              cenderung paling murah (bisa 160€ di Lyon bersama colocataire),
              namun permintaan bisa sangat tinggi dan kompetitif, jadi lebih
              baik dilakukan secepat mungkin.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={school} layout="fixed" />
            <h4>Harga Murah</h4>
            <p className="text-center">
              Kalau universitas kamu menawarkan apartemen mereka, kamu bisa
              tinggal di kampus sehingga kamu bisa dekat dengan kelas,
              perpustakaan, administrasi.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={apartment} layout="fixed" />
            <h4>Harga Murah</h4>
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
              Pastikan selalu minta rendez-vous atau janji bertemu untuk melihat
              apartemen sebelum menandatangani kontrak, atau minta telfon video
              seperti lewat Skype. Jangan pernah mengirim uang sebelum
              menandatangani kontrak untuk mencegah penipuan. Mengenai bantuan
              pengeluaran apartemen CAF, verifikasi dengan penyewa apabila
              apartemen tersebut berhak mendapatkan CAF
            </p>
          </Glassmorphism>
        </div>
      </section>
      <section className="text-primary max-w-3xl mx-auto py-5">
        <h2 className="text-center">
          Istilah-Istilah Penting Saat Proses Administrasi Menyewa Apartemen
        </h2>
        <div className="py-10 flex flex-col gap-10">
          <Glassmorphism>
            <h3 className="text-third text-center">CONTRAT DE LOCATION/BAIL</h3>
            <p className="mt-5 text-justify">
              Kontrak antara kamu (locataire) dan pemilik (propriétaire).
              Kontrak ini akan mencantumkan total loyer yang harus dibayar. Baca
              baik-baik setiap poin, khususnya mengenai loyer dan identitasmu.
              Tanyakan apapun yang kurang jelas ke propriétairemu.
            </p>
          </Glassmorphism>
          <Glassmorphism>
            <h3 className="text-third text-center">DÉPÔTDE GARANTIE/CAUTION</h3>
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
              apartemen untuk pertama kali kamu masuk apartemen dan tahap ketika
              kamu keluar dari apartemen. Ini dilakukan untuk
              memastikankerusakan yang sudah ada sebelum kamu masuk bukan
              tanggung jawab kamu dan keadaan apartemen ketika kamu datang sama
              ketika kamu pergi.
            </p>
          </Glassmorphism>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Keberangkatan;
