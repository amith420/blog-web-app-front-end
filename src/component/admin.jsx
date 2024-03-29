import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "../axios";
import BlogA from './blogforadmin';

const Admin = () => {
  const [blogs, setBlogs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate()
  
  const logout = () => {
    localStorage.clear()
    navigate("/")
  }
  const del = (id) => {
    axios.delete(`/blog/delete/${id}`).then((response) => setRefresh())
  }

  useEffect(() => {
    if (!(localStorage.getItem("role") == "admin")) {
      return navigate('/')
    }
  }, [])

  useEffect(() => {
    axios.get("/blog/all").then((response) => {
      setBlogs(response.data.reverse())
    }).catch((error) => {
      console.log(error)
    })
  }, [refresh])

  return (
    <>
      <div className="admin-feed-div">
        <Link className="common-blog-header" to={"/homepage"}><h1>BLOG COM</h1></Link>
        <em><strong>Hi Admin</strong></em>
        <div onClick={logout}>
          <img src="https://img.icons8.com/ios-glyphs/40/F25081/logout-rounded-up--v1.png" />
        </div>
      </div>
      <div className="blog-feed-content">
        {blogs?.map((blog) => (
          <BlogA data={blog} key={blog.id} setRefresh={() => setRefresh(!refresh)} />
        ))}
      </div>
    </>
  )
}

export default Admin