import axios from "../axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {

  const [blog, setBlog] = useState()
  const edittitleref = useRef();
  const editcontentref = useRef();
  const { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    if ((localStorage.getItem("role") == "admin")) {
      return navigate('/admin')
    }
  }, [])

  useEffect(() => {
    axios.get(`/blog/id/${id}`).then((response) => {
      setBlog(response.data)
    })
  }, [])

  function create(e) {
    e.preventDefault();

    const blogTitle = edittitleref.current.value;
    const blogContent = editcontentref.current.value;

    axios({
      method: 'put',
      url: '/blog/update',
      data: {
        id: blog?.id, blogTitle, blogContent
      }
    }).then((response) => {
      if (response.data) {
        alert("successfully edited")
        navigate("/homepage")
      } else {
        alert("blog not edited");
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
      <div className="create-blog-div">
        <Link className="common-blog-header" to={"/homepage"}><h1>BLOG COM</h1></Link>
        <em><strong>Edit Blogs</strong></em>
        <Link to={"/profile"}><img src="https://img.icons8.com/ultraviolet/40/null/test-account.png" /></Link>
      </div>
      <div className="create-form">
        <form onSubmit={create}>
          <textarea className="create-blog-title" type="text" defaultValue={blog?.blogTitle} required ref={edittitleref} /><br /> <br />
          <textarea className="create-blog-content" type="text" defaultValue={blog?.blogContent} required ref={editcontentref} /><br /><br />
          <div className="publish_button">
            <button className="login-register-create-edit-button">edit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBlog;
