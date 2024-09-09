import React from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Works from "../components/Works";

function Home() {
  return (
    <div>
      <Navbar className="bg-black-100" />

      {/* Flex container to arrange Projects and Works side by side */}
      <div className="flex flex-wrap mt-4 ">
        {/* Projects section with 2/3 width */}
        <div className="w-full lg:w-2/3 p-4">
          <Projects />
        </div>
        {/* Works section with 1/3 width */}
        <div className="w-full lg:w-1/3 p-4 bg-gray-100">
          <Works />
        </div>
      </div>
    </div>
  );
}

export default Home;
