import { useState } from "react";

const Blog = ({data}) => {
  const [like, setlike] = useState(data.like);
  function changelike() {
    setlike(!like);
  }

  return (
    <div className="blog">
      <div className="blog-heading">
        <h1>{data.blogTitle}</h1>
        {like ? (
          <img
            onClick={changelike}
            src="https://img.icons8.com/stickers/50/null/facebook-like-skin-type-1.png"/>
        ) : (
          <img
            onClick={changelike}
            src="https://img.icons8.com/ios/50/null/facebook-like--v1.png"/>
        )}
      </div>
      <br />
      <p>{data.blogContent}</p>
      <div className="author-name">
        <small>published on 12/05/2022 10:10 </small>
        <b>{data.author}</b>
      </div>
    </div>
  );
};

export default Blog;
