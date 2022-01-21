import Glassmorphism from "../components/Glassmorphism";
import Hero from "../components/Hero";
import hero from "../images/home/hero.png";
const Budgeting = () => {
  return (
    <>
      <Hero img={hero} title={"Budgeting"} isHome={1} />
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
              <div className="grid grid-cols-2 gap-y-5">
                <h3 className="text-danger">Pengeluaran Tahunan</h3>
                <h3>Jumlah</h3>
                <div>
                  <p>Timbre Fiscal untuk OFII</p>
                  <p>CVEC</p>
                  <p>Assurance d’habitation kamu </p>
                  <p className="font-bold">TOTAL</p>
                </div>
                <div>
                  <div className="grid grid-cols-5">
                    <p>60 €</p>
                    <p className="col-span-4">
                      | 85€ untuk titre de séjour di tahun kedua
                    </p>
                  </div>
                  <p>90 €</p>
                  <div className="grid grid-cols-5">
                    <p>50 €</p>
                    <p className="col-span-4">
                      | bisa berkurang berdasarkan pilihan
                    </p>
                  </div>
                  <p className="font-bold">200 €</p>
                </div>
                <h3 className="text-danger col-span-2">
                  Pengeluaran Bulanan Essensial
                </h3>
                <div className="">
                  <p>Loyer Apartemen</p>
                  <p>Charges (Listrik, Gas, Air)</p>
                  <p>Abonnement TCL</p>
                  <p>Kartu SIM</p>
                  <p>Belanja Bahan Pangan</p>
                  <p>Belanja Kebutuhan (Pribadi)</p>
                  <p className="font-bold">Total</p>
                </div>
                <div className="grid grid-cols-5">
                  <p>400 €</p>
                  <p className="col-span-4"> | sebelum dipotong CAF</p>
                  <p>30 € </p>
                  <p className="col-span-4"> | bisa termasuk Loyer</p>
                  <p>32 € </p>
                  <p className="col-span-4"> | bisa diganti dengan carnet 10</p>
                  <p>15 € </p>
                  <p className="col-span-4"> | bisa dikurangi sampai 10 €</p>
                  <p>100 € </p>
                  <p className="col-span-4">
                    {" "}
                    | bisa dikurangi berdasarkan pola makan
                  </p>
                  <p>20 € </p>
                  <p className="col-span-4">
                    {" "}
                    | kebutuhan non pangan (kebersihan, dll)
                  </p>
                  <p className="font-bold">597 €</p>
                </div>
                <h3 className="text-danger col-span-2">
                  Pengeluaran Bulanan Tambahan Opsional
                </h3>
                <div>
                  <p>Mutuelle de Santé</p>
                  <p>Internet Apartemen</p>
                  <p>Uang saku belanja</p>
                  <p>Uang saku restoran, café</p>
                  <p>Abonnement Aktifitas (Gym, film)</p>
                  <p className="font-bold">TOTAL</p>
                </div>
                <div>
                  <p>15 €</p>
                  <p>20 €</p>
                  <p>100 €</p>
                  <p>50 €</p>
                  <p>20 €</p>
                  <p className="font-bold">205 €</p>
                </div>
                <h3 className="text-danger col-span-2">
                  Pengeluaran Sesekali Lainnya
                </h3>
                <div>
                  <p>Membeli perlatan dapur</p>
                  <p>Membeli bantal, selimut, dll</p>
                  <p>Uang saku liburan</p>
                  <p className="font-bold">TOTAL</p>
                </div>
                <div>
                  <p>50 €</p>
                  <p>50 €</p>
                  <div className="grid grid-cols-5">
                    <p>200 €</p>
                    <p className="col-span-4">
                      | liburan di dalam zona Schengen
                    </p>
                  </div>
                  <p className="font-bold">300 €</p>
                </div>
                <h3 className="text-danger">Pemasukan Di Prancis</h3>
                <h3 className="">Harga</h3>
                <div>
                  <p>APL dari CAF</p>
                  <p>Pekerjaan temps partiel lama</p>
                  <p className="font-bold">Total</p>
                </div>
                <div className="grid grid-cols-5">
                  <p>85 €</p>
                  <p className="col-span-4">
                    | bisa lebih tinggi berdasarkan loyer
                  </p>
                  <p>750 €</p>
                  <p className="col-span-4">
                    | rata-rata pendapatan temps partiel
                  </p>
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
