import Hero from "../components/Hero";
import OrgCard from "../components/OrgCard";
import sem from "../images/keberangkatan/keberangkatanHero.png";
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
import endarman from "../images/member/endarman.jpg"
const Organization = () => {
  return (
    <>
      <Hero img={sem} title={"Organization"} />
      <div className="layout">
        <section className="grid grid-cols-3 mx-auto gap-y-10 mt-10 ">
          <div className="col-span-3">
            <div className="mx-auto w-1/3">
              <OrgCard name={"Idham Habibie"} title={"Ketua"} image={idham} />
            </div>
          </div>
          <OrgCard
            name={"Ahmad Aflah Isnaini"}
            title={"Bendahara"}
            image={aaf}
          />
          <div className="-mt-10">
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
          <div className="grid grid-cols-3 mx-auto gap-y-10 mt-10">
            <OrgCard
              name={"Naresha Pragyata Fuady"}
              title={"Social Media"}
              image={naresha}
            />
            <div className="-mt-10">
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
        <div className="grid grid-cols-3 mx-auto gap-y-10 mt-10">
        <OrgCard
              name={"Nazly Bari Muhammad"}
              title={"Event Organizer"}
              image={kevin}
            />
        </div>
        </section>
      </div>
    </>
  );
};
export default Organization;
