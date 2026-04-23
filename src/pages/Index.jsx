import posts from "../posts.json";
import Article from "../components/Article";

function Homepage() {
  return (
    <>
      <h1>Welcome to the Homepage</h1>
      {posts.map((blog) => (
        <Article title={blog.title} date={blog.date} tags={blog.tags} />
      ))}
    </>
  );
}

export default Homepage;
