import { useEffect, useState } from "react";
import axios from "../axios";
import BlogU from "./blogforuser";

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios.get(`/blog/user/${localStorage.getItem("userId")}`).then((response) => {
      setBlogs(response.data.reverse())
    }).catch((error) => {
      console.log(error);
    })
  }, [refresh]);
 
  return (
    <>
        {blogs.map((blog) => (
          <BlogU data={blog} key={blog.id} setRefresh={() => setRefresh(!refresh)}/>
        ))}
    </>
  );
};

export default MyBlog;
