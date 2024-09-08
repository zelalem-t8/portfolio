import Work from "./Work";
import INFO from "../data/user";
function Works() {
  return (
    <div className="works">
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
