import Work from "./Work";
import INFO from "../data/user";
function Works() {
  return (
    <div className="works">
      <h1 className="text-lx4">Work Experiance</h1>
      {INFO.experiance.map((work, index) => (
        <div className="all-projects-project" key={index}>
          <Work
            organizarion={work.organizarion}
            title={work.title}
            role={work.role}
            link={work.link}
          />
        </div>
      ))}
    </div>
  );
}
export default Works;
