import Hero from "../components/Hero";
import k from "../images/keberangkatan/keberangkatanHero.png";
import Image from "next/image";
import ifi from "../images/keberangkatan/IFI.png";
import Footer from "../components/Footer";
import RoomType from "../components/RoomType";
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
          <div className='col-span-2 min-w-full '>
              <RoomType type="Studio" />
            </div>
            <RoomType type="T1" />
            <RoomType type="T2" />
            <RoomType type="T3" />
            <RoomType type="T4" />
            <RoomType type="T5" />
            <RoomType type="BIS" />
            <div className='col-span-2 min-w-full self-stretch'>
              <RoomType type="Chamber" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-10"></section>
      <Footer />
    </>
  );
};
export default Keberangkatan;
