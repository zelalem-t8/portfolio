import React from "react";

function Work(props) {
  const { title, role, organization, link } = props;

  // Inline style for the logo
  const style = {
    width: "50px", // Adjust size as needed
    height: "50px",
    borderRadius: "50%", // Circular logo
    objectFit: "cover", // Ensures the image covers the element without distortion
  };

  return (
    <div className="container bg-dark text-light my-4 p-4 rounded shadow-lg overflow-hidden">
      {/* Flexbox for logo and title on the same line */}
      <div className="flex items-center mb-3 space-x-3">
        <h3 className="font-bold text-lg">{title}</h3> {/* Title */}
      </div>
      <div className="flex items-center mb-3 space-x-3">
        <h3 className="font-bold text-lg">{organization}</h3> {/* Title */}
      </div>
      {/* Description */}
      <div className="text-justify mb-3">
        <p>{role}</p>
      </div>
      {/* Link */}
      <div className="text-left">
        <a href={link} className="btn btn-primary">
          {link}
        </a>
      </div>
    </div>
  );
}

export default Work;
