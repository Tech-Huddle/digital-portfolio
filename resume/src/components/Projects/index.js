import "./index.css";

import React from "react";

const Projects = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="p-2">
      <div className="m-2 p-2 border-l-2 border-blue-800">

          <div className="chompa"></div>

        <div className="flex justify-between border-b-2 border-blue-800">
          <div className="ml-2 text-lg font-bold text-blue-800">Project 1</div>
          <div >Jan 2023- May 2023</div>
        </div>

        <div className="m-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          aliquam veritatis deserunt nulla quos commodi porro cumque, doloribus
          suscipit praesentium? Quibusdam nemo eaque harum totam sapiente
          deleniti libero quis optio.
        </div>
        <div className="m-2 flex gap-3">
          <div className="bg-blue-500 px-3 py-1 rounded-lg text-sm text-white ">
            Python
          </div>
          <div className="bg-blue-500 px-3 py-1 rounded-lg text-sm text-white ">
            JavaScript
          </div>
          <div className="bg-blue-500 px-3 py-1 rounded-lg text-sm text-white ">
            Django
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Projects;
