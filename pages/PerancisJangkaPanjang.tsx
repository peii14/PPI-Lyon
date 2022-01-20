import Image from "next/image";
import Glassmorphism from "../components/Glassmorphism";
import Hero from "../components/Hero";
import k from "../images/home/hero1.png";
import td from "../images/icon/TD.png";
import tp from "../images/icon/TP.png";
import cm from "../images/icon/CM.png";
import tip from "../images/icon/bulb.png";
import loc from "../images/icon/location_outline.png";

const PerancisJangkaPanjang = () => {
  return (
    <>
      <Hero img={k} title={"Perancis Jangka Panjang"} />
      <div className="layout text-justify">
        <section className="text-primary pt-20 mx-auto">
          <h2 className="text-center max-w-xl mx-auto">
            Kehidupan Mahasiswa Perancis
          </h2>
          <p className="text-center max-w-xl mx-auto py-10">
            Di Prancis, pendidikan setelah SMA diberikan gelar baccalaureat
            (bac) +1, +2, dan seterusnya berdasarkan tahun studi setelah lulus
            SMA. Untuk sebagian besar sistem pendidikan tinggi di Prancis,
            aktivitas kelas dibagi menjadi 3 kategori.
          </p>
          <div className="grid gap-12 items-start justify-center max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl flex flex-row gap-5 p-5">
              <div className="basis-1/4 m-auto">
                <Image src={td} layout="fixed" />
              </div>
              <div>
                <h4>Travaux Diriges</h4>
                <p>
                  Kelas yang biasanya dibagi menjadi grup kecil, sekitar 20
                  orang per kelas, di mana kamu akan diberikan waktu untuk
                  mengerjakan soal latihan yang diberikan dosen.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl flex flex-row gap-5 p-5">
              <div className="basis-1/4 m-auto">
                <Image src={tp} layout="fixed" />
              </div>
              <div className="basis-1/4">
                <h4>Travaux Pratiques</h4>
                <p>
                  Kelas praktek yang dibagi menjadi grup kecil seperti kelas TD,
                  namun biasanya lebih mengarah ke praktek langsung ilmu yang
                  sudah diajarkan di kelas TD maupun CM. Tipe kelas TP lebih
                  umum di jurusan ilmu sains natural seperti teknik dan
                  contohnya adalah eksperimen di laboratorium.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-2xl  flex flex-row gap-5 p-5">
              <div className="basis-1/4 m-auto">
                <Image src={cm} layout="fixed" />
              </div>
              <div className="basis-1/4">
                <h4>Cours Magistral</h4>
                <p>
                  Kelas besar, bisa sampai 200 mahasiswa, di dalam afiteater di
                  mana dosen akan menjelaskan teori suatu topik selama beberapa
                  jam. Berbeda dengan kelas TD, di kelas CM biasanya mahasiswa
                  hanya mendengarkan penjelasan dosen namun kamu tetap bisa
                  bertanya apabila ada yang kurang jelas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-primary pt-20 mx-auto ">
          <h2 className="text-center max-w-xl mx-auto">
            Sistem Pembagian Kredit
          </h2>
          <div className="grid gap-8 items-start justify-center max-w-3xl mx-auto py-10">
            <p>
              &emsp;Dari tingkat bac +1 sampai bac +5 (master), setiap
              <b>
                {" "}
                semester yang lulus ekuivalen dengan 30 kredit ECTS (Europian
                Kredit Transfer and Accumulation System).{" "}
              </b>
              Jadi, untuk satu tahun ajaran dengan dua semester, total kredit
              yang didapatkan adalah 60 ECTS.
            </p>
            <p>
              &emsp;Contoh: BTS/UT ekuivalen dengan bac +2 berarti memberikan
              total 120 ECTS di akhir tahun kedua, License ekuivalen dengan bac
              +3 memberikan total 180 ECTS dan Master exuivalen dengan bac +5
              memberikan total 300 ECTS.
            </p>
            <p>
              &emsp;Setiap kuliah dalam satu semester memiliki
              <b> bobot kreditnya </b>
              masing-masing, atau biasa disebut juga
              <b> coefficient mata kuliah tersebut.</b> Beberapa mata kuliah
              lebih besar bisa sampai 10 kredit atau 1/3 dari total kredit
              semester tersebut, jadi hati-hati dengan setiap mata kuliah mu!
            </p>
          </div>
        </section>
        <section className="text-primary p-10 max-w-4xl mx-auto">
          <div className="flex flex-row gap-10">
            <div>
              <h2>Sistem Nilai</h2>
              <p className="my-3">
                Sistem nilai di Prancis dibagi menjadi per 20. Artinya nilai mu
                bisa jatuh dari 0 sampai 20, dimana 20/20 sama dengan 100%.
              </p>
              <h2 className="mt-5">Batas Nilai</h2>
              <p className="mt-3">
                Batas nilai untuk lulus ujian, validasi kredit atau mata kuliah
                berada di 10/20 atau 50%.
              </p>
            </div>
            <div className="bg-tip_box text-center text-gray-800 rounded-xl outline-black max-w-xs">
              <div className="mt-3">
                <Image src={tip} layout="fixed" />
              </div>
              <h4 className="mb-2">Tips</h4>
              <p>
                PPI Lyon menyarankan kamu untuk mencari setidaknya satu teman
                dari kelas yang bisa membantu kamu apabila ada kesulitan dalam
                mengerjakan tugas
              </p>
            </div>
          </div>
        </section>
        <section className="text-primary p-10 max-w-4xl mx-auto">
          <h2 className="text-center max-w-xl mx-auto">Kesehatan</h2>
          <div className="py-10">
            <Glassmorphism>
              <p>
                &emsp;Setelah kamu memiliki nomor sécurité sociale Prancis, kamu
                sudah dapat pergi ke dokter apabila butuh dan mendapatkan
                reimbursement untuk pengeluaran-pengeluaran yang berhubungan
                dengan kebutuhan medismu.
                <br />
                <br />
                &emsp;Namun sebelum pergi ke dokter manapun, kamu harus{" "}
                <b>memilih satu dokter umum </b>
                sebagai{" "}
                <b>médecin traitant atau dokter perawat pilihan pertamamu</b>,
                artinya dia yang akan menyimpan rekam medis dan yang akan
                mengarahkan alur pemeriksaan dari dokter umum, ke dokter
                spesialis, sampai operasi dsb. Untuk semua konsultasi dokter
                umum kedepannya, kamu dianjurkan selalu pergi ke{" "}
                <b>dokter yang sama</b> ini agar lebih mudah mengikuti
                perkembangan kesehatanmu. Setelah memilih dokter tersebut, kamu
                bisa datang untuk berkonsultasi, sekaligus membawa dokumen{" "}
                <b>déclaration de choix du médecin traitant</b> di mana dia akan
                mengisi formulir tersebut. Formulir deklarasi ini dapat diakses
                di situs:
              </p>
              <div className="text-center my-10">
                <a
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  target={"_blank"}
                  href="https://www.ameli.fr/sites/default/files/formualires/132/s3704_0.pdf"
                >
                  Formulir Deklarasi
                </a>
              </div>
              <p className="mb-5">
                &emsp;Ketika sudah selesai berkonsultasi, kamu harus kirim
                déclaration de choix du médecin traitant ke CPAM Rhône. Untuk
                ini kamu bisa datang langsung ke kantor CPAM Rhône terdekat,
                contohnya seperti di:
              </p>
              <div className="grid grid-cols-2 grid-rows-1">
                <div className="flex flex-row">
                  <Image src={loc} layout="fixed" />
                  <p className="mt-1">5 bis Place Jean Macé, 69007 Lyon</p>
                </div>
                <div className="flex flex-row">
                  <Image src={loc} layout="fixed" />
                  <p className="mt-1">276 Cours Émile Zola, 69100 Villeaurbanne</p>
                </div>
              </div>
            </Glassmorphism>
          </div>
        </section>
      </div>
    </>
  );
};
export default PerancisJangkaPanjang;
