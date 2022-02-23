import { Disclosure, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Neuromorphism from "./Neuromorphism";
import s from "../styles/Home.module.css";
const Disclose = () => {
  return (
    <>
      <div className="px-4 pt-16 max-w-4xl mx-auto">
        <Neuromorphism isMember="1">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-primary bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>CONTRAT DE LOCATION/BAIL</span>
                  <FontAwesomeIcon
                    size="1x"
                    className={`duration-500 ${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 `}
                    icon={faChevronUp}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-500 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-500 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-500 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Kontrak antara kamu (locataire) dan pemilik (propriétaire).
                    Kontrak ini akan mencantumkan total loyer yang harus
                    dibayar. Baca baik-baik setiap poin, khususnya mengenai
                    loyer dan identitasmu. Tanyakan apapun yang kurang jelas ke
                    propriétairemu.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"} className="mt-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-primary bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>DÉPÔTDE GARANTIE/CAUTION</span>
                  <FontAwesomeIcon
                    size="1x"
                    className={`duration-500 ${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 `}
                    icon={faChevronUp}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-500 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-500 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-500 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Deposit dalam bentuk uang yang akan dikembalikan ketika
                    kontrak sudah selesai dan sudah meninggalkan apartemen.
                    Deposit ini digunakan untuk membayar kerusakan selama kamu
                    di apartemen apabila ada. Biasanya disetujui di kontrak
                    berupa 1-2 bulan loyer.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"} className="mt-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-primary bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>ÉTATS DES LIEUX</span>
                  <FontAwesomeIcon
                    size="1x"
                    className={`duration-500 ${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 `}
                    icon={faChevronUp}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-500 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-500 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-500 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Tahap ketika kamu dan pemilik memverifikasi kondisi fisik
                    apartemen untuk pertama kali kamu masuk apartemen dan tahap
                    ketika kamu keluar dari apartemen. Ini dilakukan untuk
                    memastikan kerusakan yang sudah ada sebelum kamu masuk bukan
                    tanggung jawab kamu dan keadaan apartemen ketika kamu datang
                    dan ketika kamu pergi.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"} className="mt-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-primary bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    ATTESTATION D’HÉBERGEMENT / JUSTIFICATIF DE DOMICILE
                  </span>
                  <FontAwesomeIcon
                    size="1x"
                    className={`duration-500 ${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 `}
                    icon={faChevronUp}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-500 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-500 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-500 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Surat sebagai bukti bahwa kamu benar-benar tinggal di
                    apartemenmu, dilindungi oleh pemerintah Prancis di bawah
                    bail yang sudah ditandatangani oleh pemilik dan kamu.
                    Dokumen ini penting untuk semua proses administrasi prancis
                    seperti OFII, membuka akun bank dan mengurus asuransi
                    kesehatan. Apabila kamu tinggal bersama colocataire namun
                    namamu tidak tercantum di bail kamu bisa meminta teman
                    coloc-mu untuk membuatkan justificatif de domicile yang
                    menyatakan bahwa kamu benar tinggal bersama dia, dan setiap
                    kali dibutuhkan bawa justificatif ini bersama dengan bail
                    yang mencantumkan nama coloc-mu.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"} className="mt-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-primary bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>ASSURANCE D’HABITATION</span>
                  <FontAwesomeIcon
                    size="1x"
                    className={`duration-500 ${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 `}
                    icon={faChevronUp}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-500 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-500 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-500 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Setiap penduduk di Prancis harus memiliki asuransi tempat
                    tinggal untuk menjamin tempat tinggalmu ketika terjadi
                    kebakaran, perampokan atau bencana alam lainnya. Asuransi
                    ini harus dipersiapkan ketika menandatangani kontrak dan
                    ditawarkan agen-agen asuransi dan bank dengan biaya 20- 60€
                    per tahun.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"} className="mt-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-primary bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>AGARANT/CAUTION SOLIDAIRE</span>
                  <FontAwesomeIcon
                    size="1x"
                    className={`duration-500 ${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 `}
                    icon={faChevronUp}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-500 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-500 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-500 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    Individu yang akan bertanggung jawab menjamin pembayaran
                    loyer kalau kamu tidak bisa bayar, di mana individu tersebut
                    akan menandatangani surat perjanjian sebagai buktinya.
                    Seorang garant harus memiliki pekerjaan tetap di Prancis,
                    atau bisa diperluas di Uni Eropa di mana dia harus mempunyai
                    penghasilan minimal tiga kali harga loyer per bulan. Garant
                    ini biasanya diminta ketika membuat permohonan apartemen
                    baru, dan menjadi kendala untuk mahasiswa internasional
                    karena tidak adanya garant di Prancis. Sebagai solusi, kamu
                    bisa:
                    <ul className={s.listed}>
                      <li>
                        Mengajukan permohonan garant untuk mahasiswa dari
                        pemerintah Prancis melalui website visale.fr, tanpa
                        dipungut biaya dan biasanya dokumen garantor dalam
                        bentuk PDF bisa keluar dalam satu minggu. Kekurangan
                        Visale adalah loyer di atas 800€ per bulan tidak bisa
                        dijamin dengan Visale.
                      </li>
                      <li>
                        Mengajukan permohonan garant dari bank dengan membayar
                        biaya bulanan atau tahunan yang dikalkulasikan
                        berdasarkan loyermu. Garant dari bank bisa diajukan
                        untuk apartemen di atas 800€ per bulan
                      </li>
                      <li>
                        Mencari apartemen di situs seperti leboncoin.fr yang
                        tidak meminta garant. Walaupun jarang, ada beberapa
                        propriétaire yang tidak mementingkan garant dan
                        memberimu pilihan untuk membayar caution yang lebih
                        besar misal 3-6 bulan pertama. Pilihan ini tidak terlalu
                        direkomendasikan karena walau mempermudah proses
                        administrasi apartemen, garant adalah persyaratan wajib
                        yang ditentukan oleh pemerintah Prancis
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </Neuromorphism>
      </div>
    </>
  );
};
export default Disclose;
