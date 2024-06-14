import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
import { DownloadButton } from "../../components/common/DownloadButton";
import { FormCard } from "../../components/common/FormCard";
import { ProtectedComponent } from "../../components/ProtectedComponent";

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/v51/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <ProtectedComponent>
      <section className="container mx-auto flex flex-col items-center justify-center overflow-x-auto lg:w-9/12 lg:py-0">
        {/* <div className="mx-auto flex w-9/12 flex-col items-center justify-center px-6 py-8 lg:py-0"> */}
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold dark:text-white"></span>
              <h2 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-[40px]/[48px]">
                Postman Projects
              </h2>
            </div>
          </div>
        </div>
        {/* <div className="overflow-x-auto"> */}
        <FormCard>
          <table className=" w-full overflow-x-auto text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Version
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr>
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {project.name}
                  </th>
                  <td className="px-6 py-4">{project.version}</td>
                  <td className="px-6 py-4">
                    <DownloadButton
                      url={encodeURI("/v51/projects/" + project.filename)}
                      filename={project.filename}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FormCard>
        {/* </div> */}
        {/* </div> */}
      </section>
    </ProtectedComponent>
  );
}
