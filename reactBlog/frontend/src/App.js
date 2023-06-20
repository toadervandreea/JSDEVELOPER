import React from "react";
// Import Bootstrap

import "bootstrap/dist/css/bootstrap.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css';


import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import EditUser from "./components/EditUser";
// import UserList from "./pages/UserList";
// import CreatePost from "./components/CreatePost";
// import EditPost from "./components/EditPost";
// import PostList from "./pages/PostList";
import NoPage from "./pages/NoPage";
library.add(fas, faTwitter, faFontAwesome);
function App() {
  return (
  
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route  element={<Layout />}>
            <Route index  element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="post/:id" element={<SinglePost />} />
            <Route path="mylogin" element={<Login />} />
            <Route path="myregister" element={<Register />} />
{/*           
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/user-list" element={<UserList />} />

            <Route path="/add-post" element={<CreatePost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/all-posts" element={<PostList />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
