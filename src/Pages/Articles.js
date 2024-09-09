import Article from "../components/Article";
import Navbar from "../components/Navbar";
import INFO from "../data/user";
function Articles() {
  return (
    <div>
      <Navbar />
      {INFO.articles.map((article, index) => (
        <div className="all-projects-project" key={index}>
          <Article
            title={article.title}
            description={article.description}
            link={article.link}
          />
        </div>
      ))}
    </div>
  );
}
export default Articles;
