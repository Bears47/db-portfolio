import React from "react";
import { ChipIcon } from "@heroicons/react/solid";

export default function Profile() {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <section id="profile" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Where I’ve Worked
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I am a highly professional individual with many years experience
            working within my field of expertise. My previous positions have
            enabled me to develop extensive experience and knowledge within the
            Maintenance and Compliance industry.
          </p>
        </div>

        <div className="md:flex content-center flex-wrap -m-4 px-20">
          <div class="md:flex md:w-1/2 lg:w-1/2 px-2 py-2">
            <div className="px-3 py-3 relative w-full border-4 border-gray-800 bg-gray-900">
              <ul
                className="flex flex-col mb-0 list-none pt-0 pb-4 space-y-1 w-full pl-0"
                role="tablist"
              >
                <li className="-mb-px mr-2 flex-auto text-left">
                  <a
                    className={
                      "text-sm font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-white bg-blue-600"
                        : "text-blue-600 bg-gray-800")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Elan - Weston-super-Mare
                  </a>
                </li>
                <li className="-mb-px mr-2 flex-auto text-left">
                  <a
                    className={
                      "text-sm font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-white bg-blue-600"
                        : "text-blue-600 bg-gray-800")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Country Court Care - Weston-super-Mare
                  </a>
                </li>
                <li className="-mb-px mr-2 flex-auto text-left">
                  <a
                    className={
                      "text-sm font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 3
                        ? "text-white bg-blue-600"
                        : "text-blue-600 bg-gray-800")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Notaro Care Homes - Weston-super-Mare
                  </a>
                </li>
              </ul>
              {/*               <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                project
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                title
              </h1>
              <p className="leading-relaxed">description</p>
 */}{" "}
            </div>
          </div>

          <div class="md:flex md:w-1/2 lg:w-1/2 px-2 py-2">
            <div className="px-2 py-4 relative w-full border-4 border-gray-800 bg-gray-900">
              <div className="relative flex flex-row min-w-0 break-words w-full mb-2 mt-0 text-left">
                <div className="px-1 py-2 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <p className="font-bold text-lavender">Site Technician</p>
                      <p className="text-gray-400 text-xs mt-1">
                        February 2019 - Present
                      </p>
                      <p className="text-gray-400 body-font text-sm">
                        <br /> Support the Estates team in delivering the
                        operational site management of the Elan building and
                        grounds. Ensuring a safe environment for staff and
                        pupils. Carrying out routine maintenance and compliance
                        checks including Fire alarm testing ,electrical ,gas and
                        water systems.
                        <p>
                          <br /> Work closely with external contractors. Ensure
                          site activity log books are completed in an accurate
                          manner and maintained in accordance with current legal
                          and compliance legislation. Undertake regular site
                          inspections and building maintenance duties
                          identifying defects record, repair and maintenance
                          requirements as appropriate.
                        </p>
                        <p>
                          <br /> Paint and decorate areas within school as
                          required. Ensure outside play equipment is regularly
                          inspected. Oversee energy usage and the schools
                          environmental responsibilities.
                        </p>
                      </p>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <p className="font-bold text-lavender">Maintenance</p>
                      <p className="text-gray-400 text-xs mt-1">
                        March 2015 to February 2019
                      </p>
                      <p className="text-gray-400 body-font text-sm">
                        <br /> Routine maintenance checks to include. Water
                        temperature tests . Fire alarm testing Fire door
                        checking Hospital bed checking (give training) Emergency
                        Light testing.
                        <p>
                          <br /> Ensure all maintenance and grounds equipment
                          and tools are maintained satisfactory Complete both
                          planned and reactive maintenance tasks in an efficient
                          and effective manner within agreed timescales and
                          standards Undertake small project work as redirected
                          such as painting/decorating and other tasks
                          appropriate to skill set.
                        </p>
                        <p>
                          <br /> Observe safe working practices in carrying out
                          the required duties and ensure that instructions
                          specified by technical contractors and manufacturers
                          are adhered to
                        </p>
                      </p>
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <p className="font-bold text-lavender">Maintenance</p>
                      <p className="text-gray-400 text-xs mt-1">
                        September 2014 to March 2015
                      </p>
                      <p className="text-gray-400 body-font text-sm">
                        <br /> Undertake all decorating to home. General
                        plumbing and carpentry. Comply with all health and
                        safety fire and water regulations. Loller legionella and
                        cosh. Transportation of residents to and from
                        appointments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
