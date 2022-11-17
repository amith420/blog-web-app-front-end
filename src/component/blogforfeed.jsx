import { useEffect, useState } from "react";
import axios from "../axios";

const Blog = ({ data, setUpdate }) => {
  const [like, setlike] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    data.likes.forEach(user => {
      if (user === userId) {
        setlike(true);
      }
    })
  }, [])

  console.log(userId, data.id)
  function getLike() {
    axios.patch(`/blog/like/${data.id}/${userId}`).then((response) => {
      if (response.data) {
        setlike(true);
        setUpdate()
      }
    })
  }
  function removeLike() {
    axios.patch(`/blog/remove/${data.id}/${userId}`).then((response) => {
      if (response.data) {
        setlike(false);
        setUpdate()
      }
    })
  }
  const date = new Date(data.createdAt).toLocaleString("en-IN")

  return (
    <div className="blog">
      <div className="blog-heading">
        <h1>{data.blogTitle}</h1>
        <div>
          {like ? (
            <img
              onClick={removeLike}
              src="https://img.icons8.com/stickers/50/null/facebook-like-skin-type-1.png" />
          ) :
            (
              <img
                onClick={getLike}
                src="https://img.icons8.com/ios/50/null/facebook-like--v1.png" />
            )}
          <h4>likes: {data.likes?.length}</h4>
        </div>
      </div>
      <br />
      <p>{data.blogContent}</p>
      <div className="author-name">
        <small>{date}  </small>
        <b>Author: {data.author}</b>
      </div>
    </div>
  );
};

export default Blog;
