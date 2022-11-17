import axios from '../axios';
import React from 'react'

const BlogA = ({ data, setRefresh }) => {
  const del = (id) => {
    axios.delete(`/blog/delete/${id}`).then((response) => setRefresh())
  }

  const date = new Date(data.createdAt).toLocaleString("en-IN")

  return (
    <div className="blog">
      <div className="blog-user-heading">
        <h1>{data.blogTitle}</h1>
      </div>
      <button className='admin-delete-button' onClick={() => del(data.id)} >
        <img className='blogfuser-delete' src="https://img.icons8.com/ios-filled/40/22C3E6/trash.png" />
      </button>
      <br />
      <p>{data.blogContent}</p>
      <h4>Likes: {data.likes?.length}</h4>
      <div>
        <b>Author: {data.author}</b><br />
        <small>{date} </small>
      </div>
    </div>
  );
};


export default BlogA;