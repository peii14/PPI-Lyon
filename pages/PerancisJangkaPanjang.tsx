import Image from "next/image";
import Glassmorphism from "../components/Glassmorphism";
import Hero from "../components/Hero";
import k from "../images/home/hero1.jpg";
import td from "../images/icon/TD.png";
import tp from "../images/icon/TP.png";
import cm from "../images/icon/CM.png";
import tip from "../images/icon/bulb.png";
import loc from "../images/icon/location_outline.png";
import map_kiri from "../images/PerancisJangkaPanjang/kiri.png";
import map_kanan from "../images/PerancisJangkaPanjang/kanan.png";
import diagram from "../images/PerancisJangkaPanjang/Group-57.webp";
import ktp_front from "../images/PerancisJangkaPanjang/image-29.webp";
import ktp_back from "../images/PerancisJangkaPanjang/image-30.webp";
import magang from "../images/PerancisJangkaPanjang/cari-kerja.webp";
import Neuromorphism from "../components/Neuromorphism";
import h from "../styles/Home.module.css"
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
            <p className="">
              Dari tingkat bac +1 sampai bac +5
              (master), setiap
              <b>
                {" "}
                semester yang lulus ekuivalen dengan 30 kredit ECTS (Europian
                Kredit Transfer and Accumulation System).{" "}
              </b>
              Jadi, untuk satu tahun ajaran dengan dua semester, total kredit
              yang didapatkan adalah 60 ECTS.
            </p>
            <p>
              &emsp;&emsp;&emsp;&emsp;Contoh: BTS/UT ekuivalen dengan bac +2
              berarti memberikan total 120 ECTS di akhir tahun kedua, License
              ekuivalen dengan bac +3 memberikan total 180 ECTS dan Master
              exuivalen dengan bac +5 memberikan total 300 ECTS.
            </p>
            <p>
              &emsp;&emsp;&emsp;&emsp;Setiap kuliah dalam satu semester memiliki
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
                &emsp;&emsp;&emsp;&emsp;Setelah kamu memiliki nomor sécurité
                sociale Prancis, kamu sudah dapat pergi ke dokter apabila butuh
                dan mendapatkan reimbursement untuk pengeluaran-pengeluaran yang
                berhubungan dengan kebutuhan medismu.
                <br />
                <br />
                &emsp;&emsp;&emsp;&emsp;Namun sebelum pergi ke dokter manapun,
                kamu harus <b>memilih satu dokter umum </b>
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
                &emsp;&emsp;&emsp;&emsp;Ketika sudah selesai berkonsultasi, kamu
                harus kirim déclaration de choix du médecin traitant ke CPAM
                Rhône. Untuk ini kamu bisa datang langsung ke kantor CPAM Rhône
                terdekat, contohnya seperti di:
              </p>
              <div className="grid grid-cols-2 gap-y-4">
                <div className="flex flex-row col-start-1">
                  <Image src={loc} layout="fixed" />
                  <p className="mt-1">5 bis Place Jean Macé, 69007 Lyon</p>
                </div>
                <div className="row-start-2">
                  <a
                    target={"_blank"}
                    href="https://www.google.com/maps/place/CPAM+du+Rh%C3%B4ne/@45.7461045,4.8431018,15z/data=!4m2!3m1!1s0x0:0x7c032c4de7c33151?sa=X&ved=2ahUKEwiPy86j4rn1AhVE6RoKHS9bBhsQ_BJ6BAgkEAU"
                  >
                    <Image
                      src={map_kiri}
                      width={300}
                      height={170}
                      className="transform transition-all hover:scale-125 rounded-lg"
                    />
                  </a>
                </div>
                <div className="flex flex-row col-start-2">
                  <Image src={loc} layout="fixed" />
                  <p className="mt-1">
                    276 Cours Émile Zola, 69100 Villeurbanne
                  </p>
                </div>
                <div className="row-start-2 text-center">
                  <a
                    target={"_blank"}
                    href="https://www.google.com/maps/place/276+Cr+Emile+Zola,+69100+Villeurbanne/@45.7669683,4.8901546,17z/data=!3m1!4b1!4m5!3m4!1s0x47f4c036663d971f:0xee03ee197088857d!8m2!3d45.7669683!4d4.8923433"
                  >
                    <Image
                      src={map_kanan}
                      width={300}
                      height={170}
                      className="transform transition-all hover:scale-125"
                    />
                  </a>
                </div>
              </div>
              <div className="mt-12 mb-5">
                <p>
                  {" "}
                  &emsp;&emsp;&emsp;&emsp;Kemudian masukan formulir ke kotak
                  surat di luar bangunan bertanda CPAM. Pilihan kedua adalah
                  melakukan scan déclaration tersebut dan diupload ke akun Ameli
                  onlinemu.
                </p>
                <br />
                <p>
                  &emsp;&emsp;&emsp;&emsp;Yang dilakukan berikutnya adalah
                  mengajukan permohonan reimbursement untuk biaya konsultasi
                  dokter dan obat apabila sudah beli dari farmasi, yang dapat
                  dilakukan dengan dua cara.
                </p>
              </div>
              <h3 className="text-center text-red_pallet">1</h3>
              <p className="my-5 text-justify">
                &emsp;&emsp;&emsp;&emsp;Meminta <b>feuille de soins</b> ketika
                membayar dokter atau membeli obat di farmasi. Surat ini berisi
                nama dan cap dokter/farmasi beserta layanan yang mereka sudah
                lakukan. Kamu harus <b>mengisi identitasmu</b> dan nomor
                sécurité sociale, lalu surat ini dapat
                <b>dikirim lewat pos ke CPAM Rhône</b> atau kamu datang ke
                kantor CPAM Rhône langsung dan{" "}
                <b>masukkan surat tersebut ke dalam kotak pos</b> di luar
                bangunan yang bertuliskan feuilles de soins/remboursements.
                Pilihan ini{" "}
                <b>berlaku untuk nomor sécurité sociale provisoire dan fixe</b>
              </p>
              <h3 className="text-center text-red_pallet">2</h3>
              <p className="my-5 text-justify">
                &emsp;&emsp;&emsp;&emsp;Menggunakan <b>carte vitale</b> yang
                jatuhnya lebih simpel karena kamu hanya perlu menunjukkan kartu
                tersebut ketika membayar, dan reimbursementnya akan{" "}
                <b>otomatis diproses</b> tanpa kamu harus melakukan apapun.
                Tentunya pilihan ini hanya bisa dilakukan kalau kamu{" "}
                <b>sudah punya</b> carte vitale dan nomor yang fiks
              </p>
              <div className="flex flex-row gap-10 my-12">
                <div className="bg-tip_box text-center text-gray-800 rounded-xl outline-black">
                  <div className="mt-3">
                    <Image src={tip} layout="fixed" />
                  </div>
                  <h4>Tips</h4>
                  <p className="mt-2 mb-4">
                    simpan{" "}
                    <b>
                      semua feuille de soinsmu beserta bon bukti pembayarannya!
                    </b>{" "}
                    Kalau misal permintaan reimbursementmu sangat lama dan
                    sepertinya ada masalah, kamu bisa bawa kedua dokumen ini ke
                    kantor CPAM Rhône untuk melihat statusnya!
                  </p>
                </div>
                <div className="bg-tip_box text-center text-gray-800 rounded-xl outline-black">
                  <div className="mt-3">
                    <Image src={tip} layout="fixed" />
                  </div>
                  <h4>Tips</h4>
                  <p className="mt-2 mb-4">
                    déclaration de choix du médecin traitant adalah langkah
                    penting yang <b>harus</b> dilakukan dan dikonfirmasi oleh
                    Ameli, karena kalau kamu melakukan permintaan reimbursement
                    sebelum mengajukan dokter pilihan, Ameli hanya akan
                    mengembalikan 30% reimbursement, bukan 70%.
                  </p>
                </div>
              </div>
              <p className="text-justify">
                {" "}
                &emsp;&emsp;&emsp;&emsp;Untuk pembelian obat, sebagian besar
                obat di Prancis <b>tidak dijual bebas di supermarket,</b>{" "}
                melainkan di pharmacie atau apotek, kecuali untuk obat ringan
                yang dijual bebas tanpa resep dokter. Ketika dokter memberikan
                ordonnance atau resep obat, kamu dapat pergi ke farmasi terdekat
                manapun dan memberikan resep tersebut untuk membeli obat yang
                dibutuhkan.
              </p>
              <br />
              <p>
                {" "}
                &emsp;&emsp;&emsp;&emsp;Apabila pengobatanmu membutuhkan stok
                obat yang kamu harus beli lagi, kamu tidak akan bisa membeli
                obat yang sebelumnya sudah dibeli tanpa resep. Apabila kamu
                membutuhkan obat lebih banyak, kamu harus kembali ke dokter
                untuk meminta resep baru atau menjelaskan ke doktermu
                kemungkinan membuat resep yang memperbolehkan kamu membeli obat
                yang sama secara berulang dengan resep yang sama
              </p>
            </Glassmorphism>
          </div>
        </section>
        <section className="text-primary p-10 max-w-4xl mx-auto">
          <h2 className="text-center">TITRE DE SÉJOUR - CARTE DE SÉJOUR</h2>
          <div className="grid grid-cols-2 py-10 gap-10">
            <div>
              <p>
                &emsp;&emsp;&emsp;&emsp;Setelah tahun pertama tinggal di Prancis
                dengan VLS-TS, izin tinggal untuk tahun berikutnya disebut{" "}
                <b>Titre de séjour (TDS).</b> TDS ini berbeda dengan Visa VLS-TS
                dan OFII, karena bentuknya kartu seperti kartu kredit, dengan
                foto, identitas, alamat dan data diri lainnya. Permohonan
                pembuatan TDS{" "}
                <b>
                  harus diajukan setidaknya 2 bulan sebelum habisnya masa
                  berlaku VLS-TS.
                </b>{" "}
                Setelah jadi, TDS mempunyai masa berlaku{" "}
                <b>dari 6 bulan atau 1 semester sampai beberapa tahun,</b>{" "}
                berdasarkan sisa tahun ajaran jurusanmu. Misalkan licencemu sisa
                2 tahun, kamu akan mendapatka n TDS berlaku 2 tahun.
              </p>
              <br />
              <p>
                Proses pengajuan pembuatan TDS untuk pertama kalianya dibagi
                menjadi dua langkah besar, dengan urutan berikut:{" "}
              </p>
              <ul className="ml-5 list-decimal">
                <li>
                  <p>
                    Mengajukan pembuatan <b>récépissé d'été</b>
                  </p>
                </li>
                <li>
                  <p>Mengajukan pembuatan titre de séjour</p>
                </li>
              </ul>
      
            </div>
            <div className="text-center">
              <Image src={diagram} />
            </div>
          </div>
          <h3 className="py-10 text-center">
            1. MENGAJUKAN PEMBUATAN RÉCÉPISSÉ D'ÉTÉ
          </h3>
          <p>
            &emsp;&emsp;&emsp;&emsp;Untuk VLS-TS yang habis masa berlaku antara
            <b> Juni - September,</b> langkah pertama yang dilakukan adalah
            mengurus permintaan récépissé d'été. Dokumen ini adalah bukti
            perpanjangan VLS-TS selama <b>tiga</b> bulan, contohnya VLS-TS yang
            habis bulan Agustus akan diperpanjang masa berlakunya sampai
            November. Dokumen ini berguna agar permintaan TDS di langkah ke-2
            dilakukan ketika tahun ajaran berikutnya sudah mulai, dan juga
            mengantisipasi agar mahasiswa internasional dapat pulang ke negara
            masing- masing di masa liburan, dan tetap mempunyai wewenang untuk
            kembali ke Prancis untuk tahun ajaran baru.
          </p>
          <div className="grid grid-cols-2 py-10 gap-x-20">
            <Neuromorphism>
              <h3 className="text-center text-red_pallet">Option 1</h3>
            </Neuromorphism>
            <div>
              <Neuromorphism>
                <h3 className="text-center text-red_pallet">Option 2</h3>
              </Neuromorphism>
            </div>
          </div>
          <p>
            Ketika datang ke administrasi atau prefektur, kamu harus membawa
            dokumen berikut ini dalam bentuk <b> fotokopi dan asli:</b>
          </p>
          <ul className="list-decimal max-w-3xl mx-auto">
            <li>
              <p>
                Paspor aktif dan fotokopi halaman identitas, halaman visa dan
                halaman dengan cap masuk wilayah Prancis
              </p>
            </li>
            <li>
              <p>Visa yang masa berlakunya akan habis</p>
            </li>
            <li>
              <p>Akta kelahiran dan terjemahan Prancisnya</p>
            </li>
            <li>Certificat de scolarité tahun ajaran sebelumnya</li>
            <li>
              <p>
                Bukti tempat tinggal di Prancis selama 6 bulan terakhir, bisa
                dalam bentuk:
              </p>
              <ul className="list-disc ml-5">
                <li>
                  <p>Faktur listrik atau gas apabila atas namamu</p>
                </li>
                <li>
                  <p>Attestation d'hébergement</p>
                </li>
                <li>
                  <p>2 foto identitas yang diambil dengan Photomaton</p>
                </li>
              </ul>
            </li>
            <li>
              <p>
                Setelah memberikan dokumen-dokumen di atas, kamu akan mendapat
                konfirmasi berupa email atau SMS dari prefektur/administrasi
                sekolah yang menyatakan récépissé d'étému sudah jadi dan dapat
                diambil, biasanya setelah 1 bulan.
              </p>
            </li>
          </ul>

          <h3 className="text-center py-10">
            2. MENGAJUKAN PEMBUATAN TITRE DE SÉJOUR
          </h3>
          <p>
            Setelah récépissé d'été mendekati masa habis, kamu akan melanjutkan
            pembuatan TDS. Penting dicatat bahwa langkah 1 hanya berlaku untuk
            visa yang habis Juni - September, untuk periode lainnya bisa
            langsung ke langkah ini.
          </p>
          <div className="grid grid-cols-2 py-10 gap-x-20">
            <button id="modal">
              <Glassmorphism>
                <h3 className="text-center text-red_pallet">Option 1</h3>
              </Glassmorphism>
            </button>
            <div>
              <Glassmorphism>
                <h3 className="text-center text-red_pallet">Option 2</h3>
              </Glassmorphism>
            </div>
          </div>
          <p>
            Sebelum melakukan persiapan dokumen apapun,
            termasuk membuat janji temu di prefektur, pastikan lagi untuk
            <b> menanyakan detil terbaru dari pihak universitas.</b> Mereka akan
            membantu dengan kelengkapan dokumen dan instruksi tambahan.
            <br /> <br />
            Dokumen yang diperlukan dalam bentuk{" "}
            <b>asli dan fotokopi</b> adalah:
            <br />
            1. Paspor aktif dan
            fotokopi halaman identitas, halaman visa dan halaman dengan cap
            masuk
            <br />
            &emsp;&emsp;&emsp;wilayah
            Perancis <br />
            2. Visa atau
            récépissé d'été yang masa berlakunya akan habis <br />
            3. Akta kelahiran
            dan terjemahan Prancisnya <br />
            4. Certificat de
            scolarité tahun ajaran sebelumnya <br />
            5. Bukti tempat
            tinggal di Prancis selama 6 bulan terakhir, bisa dalam bentuk:{" "}
            <br />
            a.
            Faktur listrik atau gas apabila atas namamu <br />
            b.
            Attestation d'hébergement <br />
            6. 3 foto identitas
            yang diambil dengan Photomaton <br />
            7. Nilai tahun
            sebelumnya atau relevé de notes <br />
            8. Attestation
            d'assiduité aux cours et de présentation aux examens dari
            universitas <br />
            9. Bukti pendanaan
            tahun ajaran berikutnya <b>dengan minimum 615€ per bulan:</b> <br />
            a.
            <b>
              {" "}
              Apabila didanai oleh orang luar Perancis, seperti keluarga di
              Indonesia,
            </b>{" "}
            dalam bentuk surat
            <br />
            pernyataan
            dari bank adanya transfer dana sebesar 615€ setiap bulan,
            diterjemahkan dalam
            <br />
            bahasa
            perancis. <br />
            b.
            <b> Apabila penerima beasiswa,</b> dalam bentuk attestation de
            bourse yang menyatakan jumlah
            <br />
            dan
            durasi beasiswa-nya <br />
            c.
            <b> Apabila kerja di Prancis,</b> dalam bentuk 3 bulletins de paie
            terakhir <br />
            d.
            <b>Apabila mempunyai akun Prancis,</b> dalam bentuk attestation
            bancaire dengan saldo <br />
            &emsp;&emsp;&emsp;setidaknya
            3 x 615€ = 1845€ dan menyatakan bahwa kamu adalah klien bank dengan
            kemampuan finansial yang cukup.
          </p>
          <div className="flex flex-row gap-x-10 pt-10">
            <div>
              Ketika dokumen sudah lengkap dan sudah
              diperiksa oleh pihak universitas kalau ada, pastikan kamu hadir
              jauh lebih awal dari jam buka Student Welcome Desk, atau jauh
              lebih awal dari jam janji temu apabila di prefektur. Pastikan
              dokumen lengkap, karena permintaan tidak akan diproses apabila
              tidak lengkap, dan kamu harus datang di hari lain. Total waktu
              menyerahkan dokumen beserta menjelaskan situasi di Prancis sekitar
              15-30 menit. Apabila dokumen lengkap dan diterima, kamu akan
              langsung diberikan récépissé yang kedua, namun kali ini disebut
              récépissé de demande de carte de séjour, yang berlaku 3 bulan dari
              hari menyerahkan dokumen. Récépissé ini digunakan sebagai bukti
              TDS sedang dibuat dan kamu bisa gunakan untuk keluar negeri,
              selama bersamaan dengan visa yang sudah habis masa berlakunya.
            </div>
            <div className="mt-10">
              <Image src={ktp_front} layout="fixed" width={300} height={200} />
            </div>
          </div>
          <div className="flex flex-row py-10 gap-x-10">
            <div>
              &emsp;&emsp;&emsp;&emsp;Setelah 1 bulan, bisa lebih, kamu akan
              menerima SMS dari prefektur apabila TDSmu sudah jadi dan dapat
              diambil. Kamu bisa datang kapanpun, tanpa membuat janji temu,
              selama jam buka prefektur, dengan membawa timbre fiscal yang bisa
              dibeli di tabac atau lewat situs{" "}
              <a
                className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                target={"_blank"}
                href="timbres.impots.gouv.fr"
              >
                timbres.impots.gouv.fr
              </a>{" "}
              sejumlah 79€. Pastikan handphonemu nyala ketika di prefektur,
              karena kamu wajib membuktikan bahwa kamu telah menerima SMS
              konfirmasi jadinya TDSmu.
            </div>
            <div>
              <Image src={ktp_back} layout="fixed" width={300} height={200} />
            </div>
          </div>
        </section>
        <section className="text-primary p-10 max-w-4xl mx-auto">
          <h2 className="text-center">STAGES & JOBS ÉTUDIANTS</h2>
          <div className="flex flex-row gap-x-10 my-10">
            <div>
              <p className="text-9xl">
                <b>60%</b>
              </p>
            </div>
            <div className="h-full my-auto">
              <p className="text-2xl ">
                Jumlah <b>Jam kerja</b> Legal di Prancis <br /> (Visa VLS-TS
                atau Titre de séjour type étudiant aktif)
              </p>
            </div>
          </div>
          <p>
            Hak ini tertulis dengan jelas di Visa atau Visa/TDS, jadi ini adalah
            bukti yang perekrut akan minta sebagai bukti legal untuk kebutuhan
            kontrak kerja. <br /> <br />
            Pilihan pekerjaan sesuai dengan batas 60% yang bisa dilakukan
            adalah:
          </p>
          <div className="my-5 ml-8">
            <ul className="list-disc list-inside">
              <li>
                <b>Part-time job atau job à temps partiel</b>
              </li>
              <p className="ml-4 my-3">
                &emsp;&emsp;&emsp;&emsp;Bisa kamu lakukan kalau ada waktu luang
                untuk kerja disamping sekolah. Untuk jam kerja, 60% waktu kerja
                yang diperbolehkan bisa sampai{" "}
                <b>21 jam per minggu atau 964 jam per tahun.</b> Tipe part-time
                job yang umum untuk mahasiswa seperti anggota dapur di restoran,
                kasir di toko, pengantar makanan atau babysitter (pastinya masih
                banyak pilihan lainnya juga!) Pekerjaan tipe ini biasa dapat
                dicari di situs{" "}
                <a
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  target={"_blank"}
                  href="leboncoin.fr"
                >
                  leboncoin.fr
                </a>{" "}
                atau bisa langsung mengajukan CV dan surat motivasi ke tempat
                kerja yang diminati. Perekrut akan menghubungi kamu via telfon
                atau email dan menjadwalkan wawancara. Kalau diterima, kamu akan
                mulai kerja dengan training.
              </p>
              <li>
                <b>Magang atau stage di perusahaan Prancis</b>
                <p className="ml-4 my-3">
                  &emsp;&emsp;&emsp;&emsp;Beberapa program jurusan di Prancis
                  <b> mewajibkan</b> magang kapanpun di tahun ajarannya, artinya
                  ada yang magang di awal tahun ajaran, pertengahan tahun atau
                  akhir tahun. Tujuan dari magang tersebut bisa mencari
                  pengalaman di dunia kerja dengan melakukan projek di
                  perusahaan dengan topik yang berhubungan dengan jurusanmu.
                  Umumnya magang akhir tahun dimulai dari pertengahan semester
                  kedua tahun ajaran tersebut, dengan durasi dari 2 minggu
                  sampai 6 bulan. Untuk mencari magang bisa dilakukan di
                  leboncoin.fr seperti mencari part-time job, namun karena
                  biasanya magang cenderung lebih terspesialisasi di satu
                  jurusan, lebih baik lagi mencari di situs kerja profesional
                  seperti{" "}
                  <a
                    className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    target={"_blank"}
                    href="linkedin.fr"
                  >
                    linkedin.fr
                  </a>{" "}
                  ,
                  <a
                    className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    target={"_blank"}
                    href="indeed.fr"
                  >
                    indeed.fr
                  </a>
                  ,atau{" "}
                  <a
                    className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    target={"_blank"}
                    href="glassdoor.fr"
                  >
                    glassdoor.fr
                  </a>
                  . Proses merekrut untuk magang bisa memakan waktu sampai
                  berbulan-bulan karena lebih formal dan panjang daripada part
                  time job.
                </p>
              </li>
            </ul>
          </div>
          <h3 className="text-center mt-10">
            Recruitment Process Untuk Magang
          </h3>
          <div className="my-8">
            <Glassmorphism>
              <Image src={magang} />
            </Glassmorphism>
          </div>
          <p>
            &emsp;&emsp;&emsp;&emsp;Berdasarkan hukum di Prancis, magang yang
            berdurasi di atas 2 bulan harus digaji dengan jumlah yang disebutkan
            di kontrak, namun ada juga beberapa perusahaan yang tetap membayar
            magang ataupun menawarkan gratifikasi dalam bentuk lain walaupun di
            bawah 2 bulan. Untuk detail lebih dalam tentang magang untuk
            jurusanmu, pastikan tanya dari <b>awal tahun ajaran</b> dengan
            bagian administrasi atau service stagiaire universitasmu mengenai
            kewajiban magang, proses merekrut, penandatanganan kontrak, koreksi
            CV dan surat motivasi, sampai meminta koneksi perusahaan-perusahaan
            yang mencari magang.
            <br /> <br />
            <b>Situs untuk CV, surat motivasi dan wawancara Prancis:</b>
          </p>
          <br />
          <div className="pb-10">
            <ul className="list-disc list-inside">
              <li>
                <a
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  target={"_blank"}
                  href="https://fr.linkedin.com/learning/rediger-un-cv/bienvenue-dans-rediger-un-cv-2"
                >
                  linkedin.com/learning/rediger-un-cv/bienvenue-dans-rediger-un-cv-2
                </a>
              </li>
              <li>
                <a
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  target={"_blank"}
                  href="linkedin.com/learning/rediger-une-lettre-demotivation/bienvenue-dans-rediger-une-lettre-de-motivation"
                >
                  linkedin.com/learning/rediger-une-lettre-demotivation/bienvenue-dans-rediger-une-lettre-de-motivation
                </a>
              </li>
              <li>
                <a
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  target={"_blank"}
                  href="http://etudiant.aujourdhui.fr/etudiant/info/exemple-de-cv.html"
                >
                  http://etudiant.aujourdhui.fr/etudiant/info/exemple-de-cv.html
                </a>
              </li>
              <li>
                <a
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  target={"_blank"}
                  href="https://www.cadremploi.fr/editorial/conseils/conseils-candidature/entretienembauche/detail/article/les-20-questions-les-plus-courantes-en-entretiendembauche.html"
                >
                  cadremploi.fr/editorial/conseils/conseils-candidature/entretienembauche/detail/article/les-20-questions-les-plus-courantes-en-entretiendembauche.html
                </a>
              </li>
              <li>
                <a
                  className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
                  target={"_blank"}
                  href="https://www.pole-emploi.fr/accueil/"
                >
                  pole-emploi.fr/region/auvergne-rhone-alpes/candidat/conseils-a-lemploi/reussir-sonentretien.html
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="text-primary p-10 max-w-4xl mx-auto">
          <h2 className="text-center">Hidup Di Lyon : PROFITEZ DE LA VILLE</h2>
          <p className="text-center py-10">
            Berikut ini adalah 15 tempat-tempat khas Lyon yang harus kamu
            kunjungi. Setiap tempat menawarkan pemandangan dan aktivias yang
            berbeda!
          </p>
          <div className="bg-black w-full h-80">p</div>
        </section>
        <section className="text-primary p-10 max-w-4xl mx-auto">
          <h2 className="text-center">
            Travelling : PROFITEZ DE L’ESPACE SCHENGEN
          </h2>
          <p className="py-10 text-center">
            Setelah kamu selesai mengurus dan mendapatkan izin tempat tinggal
            OFII, kamu secara resmi penduduk Prancis dan artinya dapat menikmati
            kebebasan bepergian di zona Schengen. Selain travelling di dalam
            Prancis, kamu bisa jalan-jalan ke 25 negara Schengen lainnya. Daftar
            negara Schengen dapat dicek di situs:
          </p>
          <div className="text-center">
            <a
              className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target={"_blank"}
              href="https://ec.europa.eu/home-affairs/what-wedo/policies/borders-and-visas/visa-policy/schengen_visa_en"
            >
              ec.europa.eu/home-affairs/what-wedo/
              policies/borders-and-visas/visa-policy/ schengen_visa_en
            </a>
          </div>

          <p className="py-10 text-center">
            Travelling dapat dilakukan dengan pesawat a kereta, atau bus untuk
            opsi yang lebih murah:
          </p>
          <div className="grid grid-cols-2 grid-row-2 gap-10 max-w-lg mx-auto py-10">
            <div className="w-full">
              <Neuromorphism>
                <h3 className="text-center text-red_pallet">Option 1</h3>
              </Neuromorphism>
            </div>
            <div className="w-full">
              <Neuromorphism>
                <h3 className="text-center text-red_pallet">Option 1</h3>
              </Neuromorphism>
            </div>
            <div className="w-full">
              <Neuromorphism>
                <h3 className="text-center text-red_pallet">Option 1</h3>
              </Neuromorphism>
            </div>
            <div className="w-full">
              <Neuromorphism>
                <h3 className="text-center text-red_pallet">Option 1</h3>
              </Neuromorphism>
            </div>
          </div>
        </section>
        <section className="text-primary p-10 max-w-4xl mx-auto">
          <h2 className="text-center">Perpanjang Paspor</h2>
          <p className="py-10">
            Apabila masa berlaku paspormu habis ketika sedang tinggal di
            Prancis, warga negara Indonesia yang secara legal beralamat di Lyon
            dapat mengajukan permohonan perpanjangan paspor lewat Kedutaan Besar
            Republik Indonesia (KBRI) Paris. Permohonan ini dapat dilakukan juga
            untuk permintaan penggantian paspor karena rusak, hilang atau
            dicuri. <br /> <br /> Syarat dan instruksi untuk melakukan
            permohonan dapat diikuti secara lebih detil di situs Kementrian Luar
            Negeri:
          </p>
          <div className="text-center">
            <a
              className="underline cursor-pointer text-blue-600 hover:text-blue-800 visited:text-purple-600"
              target={"_blank"}
              href="https://kemlu.go.id/paris/id/pages/paspor_/630/etc-menu"
            >
              kemlu.go.id/paris/id/pages/ paspor_/630/etc-menu
            </a>
          </div>
          <p className="py-10">
            &emsp;&emsp;&emsp;&emsp;Secara singkat dokumen yang dibutuhkan
            adalah <b>paspor lama</b> apabila ingin melakukan perpanjangan,
            fotokopi{" "}
            <b>
              akte kelahiran, fotokopi titre de séjour, OFII atau Visa VLS-TS,
            </b>{" "}
            beserta dengan formulir permohonan paspor RI dan surat pernyataan
            tidak berkewarganegaraan asing. Apabila persiapan dokumen sudah
            lengkap, <b>kamu harus pergi ke Paris</b> untuk melakukan perekaman
            data biometrik karena tipe paspor yang dikeluarkan oleh KBRI Paris
            adalah <b>e-paspor biometrik 48 halaman.</b> <br />
            <br />
            &emsp;&emsp;&emsp;&emsp;Kamu harus membuat janji bertemu dengan
            menjelaskan kebutuhan kamu dan meminta janji lewat alamat email{" "}
            <b>konsuler.paris@kemlu.go.id</b>. Ketika sudah tiba di KBRI Paris
            dengan konfirmasi janji dan dokumen lengkap, biaya untuk layanan
            penggantian paspor yang masa <b>5 tahun berlakunya</b> sudah habis
            sebesar 35€, untuk penggantian paspor berlaku namun rusak 55€ dan
            untuk penggantian paspor hilang/tercuri 100€. <br />
            <br />
            &emsp;&emsp;&emsp;&emsp;Setelah mendapatkan konfirmasi dari KBRI
            Paris bahwa paspor baru sudah jadi, kamu bisa datang kembali ke KBRI
            Paris untuk mengambil langsung atau kamu bisa meminta KBRI Paris
            untuk mengirim paspor tersebut{" "}
            <b>lewat pos dengan biaya tambahan.</b> <br />
            <br />
            &emsp;&emsp;&emsp;&emsp;Berdasarkan pengalaman PPI Lyon, proses dari
            pertama kali membuat janji sampai paspor kembali dikirimkan ke
            alamat di Lyon memakan waktu sekitar <b>2-3 minggu kerja.</b>{" "}
            Apabila Visa VLS-TS yang berada di paspor lamamu masih <b>aktif</b>{" "}
            dan paspor penggantimu sudah jadi, pastikan{" "}
            <b>
              kamu tetap membawa paspor lama dengan Visa VLS-TS sebagai bukti
              kependudukan di Prancis
            </b>{" "}
            apabila bepergian ke luar negeri, setidaknya sampai tanggal habis
            berlaku Visa tersebut. Penting diingat kalau layanan ini tersedia
            untuk warga Indonesia yang{" "}
            <b>
              sudah terdaftar di KBRI Paris, jadi jangan lupa mendaftarkan diri
              sebelum mengajukan permohonan(lihat di Tiba di Lyon).
            </b>
          </p>
        </section>
        <section className="text-primary p-10 max-w-4xl mx-auto">
          <h2 className="text-center">EN CAS D'URGENCE</h2>
          <p className="text-center py-10">
            Dalam situasi darurat, di Prancis maupun di negara Uni Eropa,
            pastikan kamu catat dan hubungi nomor-nomor di bawah ini:
          </p>
          <div className="flex flex-row gap-x-10 mb-10 ml-7">
            <div>
              <p className="text-8xl">
                <b>15</b>
              </p>
            </div>
            <div className="h-full my-auto">
              <p className="text-xl">
                <b>SAMU Service d’aide médicale urgente</b> <br /> Situasi gawat
                darurat kesehatan
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-10 my-10 ml-7">
            <div>
              <p className="text-8xl">
                <b>17</b>
              </p>
            </div>
            <div className="h-full my-auto">
              <p className="text-xl ">
                <b>Police Secours</b> <br /> Situasi gawat darurat keamanan yang
                membutuhkan intervensi polisi
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-10 my-10 ml-7">
            <div>
              <p className="text-8xl">
                <b>18</b>
              </p>
            </div>
            <div className="h-full my-auto">
              <p className="text-xl ">
                <b>Pompiers</b> <br /> Situasi gawat darurat kebakaran dan
                kecelakaan yang membutuhkan penyelamatan
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-10 my-10">
            <div>
              <p className="text-8xl">
                <b>112</b>
              </p>
            </div>
            <div className="h-full my-auto">
              <p className="text-xl ">
                <b>Numéro d’appel d’urgence européen</b> <br /> Situasi gawat
                darurat apapun di Uni Eropa, tersedia dalam semua bahasa Eropa
              </p>
            </div>
          </div>
          <p className="text-center">
            Kalau tidak pasti dengan nomor yang harus dihubungi, segara hubungi
            15 atau 112 dan jelaskan situasi daruratmu, setelah itu mereka akan
            memberikan instruksi apa yang akan dilakukan
          </p>
        </section>
      </div>
    </>
  );
};
export default PerancisJangkaPanjang;
