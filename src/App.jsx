import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Post from "./components/post/post";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
