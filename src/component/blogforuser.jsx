import axios from '../axios';
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const BlogU = ({ data, setRefresh }) => {
  const del = (id) => {
    axios.delete(`/blog/delete/${id}`).then((response) => setRefresh())
  }
  const date = new Date(data.createdAt).toLocaleString("en-IN")
  return (
    <div className="blog">
      <div className="blog-user-heading">
        <h1>{data.blogTitle}</h1>
      </div>
      <Link to={`/edit/${data.id}`}>
        <img className='blogfuser-edit' src="https://img.icons8.com/external-anggara-blue-anggara-putra/40/null/external-edit-basic-user-interface-anggara-blue-anggara-putra.png" />
      </Link>
      <button className='user-delete-button' onClick={() => del(data.id)} >
        <img className='blogfuser-delete' src="https://img.icons8.com/ios-filled/40/22C3E6/trash.png" />
      </button>
      <br />
      <p>{data.blogContent}</p>
      <div>
        <h4>likes: {data.likes?.length}</h4>
        <b>Author: {data.author}</b><br/>
        <small> {date} </small>
      </div>
    </div>
  );
};


export default BlogU;