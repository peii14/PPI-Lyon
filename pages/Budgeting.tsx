import Glassmorphism from "../components/Glassmorphism";
import Hero from "../components/Hero";
import hero from "../images/home/hero.png";
const Budgeting = () => {
  return (
    <>
    <div className="w-screen overflow-y-hidden">
      <Hero img={hero} title={"Budgeting"} isHome={1} />
    </div>
      <div className="layout">
        <section className="text-center md:-mt-10 mt-0 p-7 ">
          <h2>Budgeting</h2>
          <p className="mt-5 max-w-4xl mx-auto">
            Bagian ini dapat membantu kamu membuat budgeting pengeluaran selama
            kamu tinggal di Lyon. PPI Lyon menyarankan kamu untuk membedakan
            budgeting tahunan, bulanan, sesekali, juga budgeting esensial dan
            tambahan. Tentunya ini budgeting kasar yang bisa berubah drastis
            berdasarkan kebutuhan dan pilihan kamu! Tapi angka yang dimasukkan
            berasal dari rata-rata pengeluaran dan pengalaman anggota PPI Lyon.
          </p>
        </section>
        <section className="py-10">
          <h2 className="text-center">Biaya Pengeluaran</h2>
          <div className="p-5">
            <Glassmorphism>
              <div className="grid grid-cols-2 items-center ">
                <h3 className="text-danger">Pengeluaran Tahunan</h3>
                <h3>Jumlah</h3>
                <div className="grid grid-cols-2 col-span-2 md:my-5 my-3 md:gap-0 gap-3">
                  <p>Timbre Fiscal untuk OFII</p>
                  <div className="grid md:grid-cols-5 grid-cols-4">
                    <p>60 €</p>
                    <p className="md:col-span-4 col-span-3">
                      | 85€ untuk titre de séjour di tahun kedua
                    </p>
                  </div>
                  <p>CVEC</p>
                  <p>90 €</p>
                  <p>Assurance d’habitation</p>
                  <div className="grid md:grid-cols-5 grid-cols-4">
                    <p>50 €</p>
                    <p className="md:col-span-4 col-span-3">
                      | bisa berkurang berdasarkan pilihan
                    </p>
                  </div>
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">200 €</p>
                </div>
                <h3 className="text-danger col-span-2">
                  Pengeluaran Bulanan Essensial
                </h3>
                <div className="grid grid-cols-2 col-span-2 md:my-5 my-3 md:gap-0 gap-3">
                  <p>Loyer Apartemen</p>
                  <div className="grid md:grid-cols-5 grid-cols-4">
                    <p>400 €</p>
                    <p className="md:col-span-4 col-span-3"> | sebelum dipotong CAF</p>
                  </div>
                  <p>Charges (Listrik, Gas, Air)</p>
                  <div className="grid md:grid-cols-5 grid-cols-4">
                    <p>30 € </p>
                    <p className="md:col-span-4 col-span-3"> | bisa termasuk Loyer</p>
                  </div>
                  <p>Abonnement TCL</p>
                  <div className="grid md:grid-cols-5 grid-cols-4">
                    <p>32 € </p>
                    <p className="md:col-span-4 col-span-3">
                      {" "}
                      | bisa diganti dengan carnet 10
                    </p>
                  </div>
                  <p>Kartu SIM</p>
                  <div className="grid md:grid-cols-5 grid-cols-4">
                    <p>15 € </p>
                    <p className="md:col-span-4 col-span-3"> | bisa dikurangi sampai 10 €</p>
                  </div>
                  <p>Belanja Bahan Pangan</p>
                  <div className="grid md:grid-cols-5 grid-cols-4">
                    <p>100 € </p>
                    <p className="md:col-span-4 col-span-3">
                      {" "}
                      | bisa dikurangi berdasarkan pola makan
                    </p>
                  </div>
                  <p>Belanja Kebutuhan (Pribadi)</p>
                  <div className="grid md:grid-cols-5 grid-cols-4">
                    <p>20 € </p>
                    <p className="md:col-span-4 col-span-3">
                      {" "}
                      | kebutuhan non pangan (kebersihan, dll)
                    </p>
                  </div>
                  <p className="font-bold">Total</p>
                  <p className="font-bold">597 €</p>
                </div>
                <h3 className="text-danger col-span-2">
                  Pengeluaran Bulanan Tambahan Opsional
                </h3>
                <div className="grid grid-cols-2 col-span-2 md:my-5 my-3 md:gap-0 gap-3">
                  <p>Mutuelle de Santé</p>
                  <p>15 €</p>
                  <p>Internet Apartemen</p>
                  <p>20 €</p>
                  <p>Uang saku belanja</p>
                  <p>100 €</p>
                  <p>Uang saku restoran, café</p>
                  <p>50 €</p>
                  <p>Abonnement Aktifitas (Gym, film)</p>
                  <p>20 €</p>
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">205 €</p>
                </div>
                <h3 className="text-danger col-span-2">
                  Pengeluaran Sesekali Lainnya
                </h3>
                <div className="grid grid-cols-2 col-span-2 md:my-5 my-3 md:gap-0 gap-3">
                  <p>Membeli perlatan dapur</p>
                  <p>50 €</p>
                  <p>Membeli bantal, selimut, dll</p>
                  <p>50 €</p>
                  <p>Uang saku liburan</p>
                  <div className="grid md:grid-cols-5 grid-cols-4 ">
                    <p>200 €</p>
                    <p className="md:col-span-4 col-span-3">
                      | liburan di dalam zona Schengen
                    </p>
                  </div>
                  <p className="font-bold">TOTAL</p>
                  <p className="font-bold">300 €</p>
                </div>
                <h3 className="text-danger">Pemasukan Di Prancis</h3>
                <h3 className="">Harga</h3>
                <div className="grid grid-cols-2 col-span-2 md:my-5 my-3 md:gap-0 gap-3">
                <p>APL dari CAF</p>
                <div className="grid md:grid-cols-5 grid-cols-4 ">
                  <p>85 €</p>
                  <p className="md:col-span-4 col-span-3">
                    | bisa lebih tinggi berdasarkan loyer
                  </p>
                </div>
                <p>Pekerjaan temps partiel lama</p>
                <div className="grid md:grid-cols-5 grid-cols-4 ">
                  <p>750 €</p>
                  <p className="md:col-span-4 col-span-3 ">
                    | rata-rata pendapatan temps partiel
                  </p>
                </div>
                <p className="font-bold">Total</p>
                <p className="font-bold">835 €</p>
                </div>
              </div>
            </Glassmorphism>
          </div>
        </section>
      </div>
    </>
  );
};
export default Budgeting;
