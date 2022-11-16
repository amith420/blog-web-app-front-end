import { Link, useNavigate } from "react-router-dom";
import MyBlog from "./myblog";

const Profile = () => {
  const navigate = useNavigate();
  console.log(navigate)
  const logout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <>
      <div className="profile-blog-div">
        <Link className="common-blog-header" to={"/homepage"}><h1>BLOG COM</h1></Link>
        <em><strong>Hi User</strong></em>
        <div>
          <Link to={"/profile"}>
            <img src="https://img.icons8.com/ultraviolet/40/null/test-account.png" />
          </Link>
          <Link to={"/create"}>
            <img src="https://img.icons8.com/material-sharp/40/null/add.png" />
          </Link>
          <div onClick={logout}>
            <img src="https://img.icons8.com/ios-glyphs/40/F25081/logout-rounded-up--v1.png" />
          </div>
        </div>
      </div>
      <div>
        <MyBlog />
      </div>
    </>
  );
};

export default Profile;
