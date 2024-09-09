function Article(props) {
  const { title, date, description, link } = props;
  return (
    <div className="bg-blue-100 p-2 m-2">
      <div className="text-lg p-4 m-4 ">{title}</div>
      <div className="article-date">{date}</div>
      <div className="article-description">{description}</div>
      <div className="article-link">
        <a href={link}>Read More</a>
      </div>
    </div>
  );
}
export default Article;
