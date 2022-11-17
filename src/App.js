import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./component/registration";
import LoginPage from "./component/login";
import BlogFeed from "./component/blogfeed";
import Profile from "./component/usernavbar";
import CreateBlog from "./component/createblog";
import EditBlog from "./component/editblog";
import Admin from "./component/admin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/homepage" element={<BlogFeed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/edit/:id" element={<EditBlog />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
