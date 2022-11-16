import axios from "../axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateBlog = () => {

  const blogtitleref = useRef();
  const blogcontentref = useRef();
  const navigate = useNavigate();

  function create(e) {
    e.preventDefault();

    const blogTitle = blogtitleref.current.value;
    const blogContent = blogcontentref.current.value;

    axios({
      method: 'post',
      url: '/blog/create',
      data: {
        blogTitle, blogContent, author: localStorage.getItem("userName")
      }
    }).then((response) => {
      if (response.data) {
        alert("successfully created")
        navigate("/homepage")
      } else {
        alert("blog not created");
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <div className="create-blog-div">
        <Link className="common-blog-header" to={"/homepage"}><h1>BLOG COM</h1></Link>
        <em><strong>Create Blogs</strong></em>
        <Link to={"/profile"}><img src="https://img.icons8.com/ultraviolet/40/null/test-account.png" /></Link>
      </div>
      <div className="create-form">
        <form onSubmit={create}>
          <textarea className="create-blog-title" type="text" placeholder="enter title" required ref={blogtitleref} /><br /> <br />
          <textarea className="create-blog-content" type="text" placeholder="enter content" required ref={blogcontentref} /><br /><br />
          <div className="publish_button">
            <button className="login-register-create-edit-button">create</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
