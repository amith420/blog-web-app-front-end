import Blog from "./blogforfeed";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";

const BlogFeed = () => {
  const [blogs, setBlogs] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    axios.get("/blog/all").then((response) => {
      setBlogs(response.data.reverse())
    }).catch((error) => {
      console.log(error)
    })
  }, [update])

  return (
    <>
      <div className="blog-feed-div">
        <Link className="common-blog-header" to={"/homepage"}><h1>BLOG COM</h1></Link>
        <Link to={"/profile"}>
          <img src="https://img.icons8.com/ultraviolet/40/null/test-account.png" />
        </Link>
      </div>
      <div className="blog-feed-content">
        {blogs.map((blog) => (
          <Blog data={blog} key={blog.id} setUpdate={() => setUpdate(!update)} />
        ))}
      </div>
    </>
  );
};

export default BlogFeed;
