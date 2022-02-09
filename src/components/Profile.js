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
            working as a .NET developer and manager within the software and
            insurance industries. My previous positions have enabled me to
            develop extensive experience in both independently developing
            software and managing a team of analysts and developers.
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
                    Opus Energy
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
                    Transactor Global Solutions
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
                    Transactor Global Solutions
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
                      <p className="font-bold text-lavender">
                        Software Developer
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        2018 - Present
                      </p>
                      <p className="text-gray-400 body-font text-sm">
                        <br /> Establish a detailed program specification
                        through discussion with stakeholders and BSA’s.
                        <p>
                          <br /> Work in accordance with Agile, attending daily
                          scrums and working to two-week sprints
                        </p>
                        <p>
                          <br /> Independently created DTC file Builder, a
                          desktop application written in C# which builds
                          industry dataflows.
                        </p>
                      </p>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <p className="font-bold text-lavender">
                        Technical Underwriting Manager/Application Developer
                      </p>
                      <p className="text-gray-400 text-xs mt-1">2010 - 2016</p>
                      <p className="text-gray-400 body-font text-sm">
                        <br /> Managed 22 developers and analysts to ensure that
                        the software was delivered on time and within budget.
                        <p>
                          <br /> Oversaw the conceptualising of new projects and
                          organisation of the company’s work schedules and
                          workflow which involved determining start dates for
                          projects and allocating work to employees.
                        </p>
                        <p>
                          <br /> Created detailed and summarised management
                          information reports in order for relevant and high
                          quality information to be communicated across the
                          business.
                        </p>
                        <p>
                          <br /> Managed the release of software on a monthly
                          basis by overseeing the work of those involved to
                          ensure that the software was released on time.
                        </p>
                      </p>
                    </div>
                    <div
                      className={openTab === 3 ? "block" : "hidden"}
                      id="link3"
                    >
                      <p className="font-bold text-lavender">EDI Manager</p>
                      <p className="text-gray-400 text-xs mt-1">2004 - 2010</p>
                      <p className="text-gray-400 body-font text-sm">
                        <br /> Independently created EDI Manager, a desktop
                        application written in C# which enabled thousands of
                        policies to be sent to and from insurers in the form of
                        messages via FTP/SFTP on a daily basis.
                        <p>
                          <br /> Tracked EDI message logs by analysing messages
                          to ensure that they were generated correctly.
                        </p>
                        <p>
                          <br /> Monitored the EDI software to determine whether
                          any enhancements needed to be made, and where this was
                          the case, undertook development work within a timely
                          manner.
                        </p>
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
