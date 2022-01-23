import Hero from "../components/Hero";
import OrgCard from "../components/OrgCard";
import sem from "../images/hero/hero2.png";
import idham from "../images/member/idham.jpg";
import aaf from "../images/member/aaf.jpg";
import perli from "../images/member/perli.jpg";
import adid from "../images/member/adid.jpg";
import naresha from "../images/member/naresha.jpg";
import salwa from "../images/member/salwa.jpg";
import adam from "../images/member/adam.jpg";
import farel from "../images/member/farel.jpg";
import gayuh from "../images/member/gayuh.jpg";
import kevin from "../images/member/kevin.jpg"; 
import bari from "../images/member/bari.jpg"
import coleta from "../images/member/coleta.jpg"
import talenta from "../images/member/talenta.jpg"
import zahra from "../images/member/zahra.jpg"
import faal from "../images/member/faal.jpg"
import clara from "../images/member/clara.jpg"
import endarman from "../images/member/endarman.jpeg"
import fahri from "../images/member/fahri.jpg"
const Organization = () => {
  return (
    <>
    <div className="w-screen overflow-y-hidden">
      <Hero img={sem} title={"Organization"} />
    </div>
      <div className="layout md:p-0 p-10">
        <section className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-y-10 mt-10 ">
          <div className="md:col-span-3">
            <div className="mx-auto md:w-1/3">
              <OrgCard name={"Idham Habibie"} title={"Ketua"} image={idham} />
            </div>
          </div>
          <OrgCard
            name={"Ahmad Aflah Isnaini"}
            title={"Bendahara"}
            image={aaf}
          />
          <div className="md:-mt-10">
            <OrgCard name={"Hammam Mujadid"} title={"Wakil"} image={adid} />
          </div>
          <OrgCard
            name={"Pearliani Fatima Harum"}
            title={"Sekretaris"}
            image={perli}
          />
        </section>
        <section className="py-5">
          <h2 className="text-center">Social Media</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-y-10 mt-10">
            <OrgCard
              name={"Naresha Pragyata Fuady"}
              title={"Social Media"}
              image={naresha}
            />
            <div className="md:-mt-10">
              <OrgCard
                name={"Salwaa Qaanita"}
                title={"Social Media"}
                image={salwa}
              />
            </div>
            <OrgCard name={"Adam Satria"} title={"Social Media"} image={adam} />
            <OrgCard
              name={"Farrel Ardan Susilo"}
              title={"Social Media"}
              image={farel}
            />
            <OrgCard
              name={"Gayuh Kautaman"}
              title={"Social Media"}
              image={gayuh}
            />
            <OrgCard
              name={"Kevin Katriel Godi"}
              title={"Social Media"}
              image={kevin}
            />
          </div>
        </section>
        <section className="py-5">
        <h2 className="text-center">Event Organizer</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-y-10 mt-10">
        <OrgCard
              name={"Nazly Bari Muhammad"}
              title={"Event Organizer"}
              image={bari}
            />
            <div className="md:-mt-10">
            <OrgCard
              name={"Colleta Oneida Nathania"}
              title={"Event Organizer"}
              image={coleta}
            />
            </div>
            <OrgCard
              name={"Talenta Miracle Tobing"}
              title={"Event Organizer"}
              image={talenta}
            />
             <OrgCard
              name={"Imaduddin Salma Faalih"}
              title={"Event Organizer"}
              image={faal}
            />
             <OrgCard
              name={"Clara Avila Dea Permata"}
              title={"Event Organizer"}
              image={clara}
            />
             <OrgCard
              name={"Zahra Kurniawati"}
              title={"Event Organizer"}
              image={zahra}
            />
        </div>
        </section>
        <section className="flex md:flex-row flex-col md:gap-0 gap-10 justify-around py-10">
          <div>
            <h2 className="text-center ">Dewan Penasihat</h2>
            <div className="md:mt-0 mt-5">
            <OrgCard
              name={"Endarman Saputra"}
              title={"Dewan Penasihat"}
              image={endarman}
              />
              </div>
          </div>
          <div>
            <h2 className="text-center">Badan Musyawarah</h2>
            <div className="md:mt-0 mt-5">
            <OrgCard
              name={"Muhammad Fahri Khalid"}
              title={"Badan Musyawarah"}
              image={fahri}
              />
              </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Organization;
