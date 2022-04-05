import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./Elements/Home";
import UsersPage from "./Elements/UsersPage";
import User from "./Elements/User";
import PostsPage from "./Elements/PostsPage";
import Post from "./Elements/Post";
import PhotosPage from "./Elements/PhotosPage";
import Photo from "./Elements/Photo";
import AlbumsPage from "./Elements/AlbumsPage";
import Album from "./Elements/Album";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UsersPage" element={<UsersPage />} />
        <Route path="/UsersPage/:id" element={<User />} />
        <Route path="/PostsPage" element={<PostsPage />} />
        <Route path="/PostsPage/:id" element={<Post />} />
        <Route path="/PhotosPage" element={<PhotosPage />} />
        <Route path="/PhotosPage/:id" element={<Photo />} />
        <Route path="/AlbumsPage" element={<AlbumsPage />} />
        <Route path="/AlbumsPage/:id" element={<Album />} />
      </Routes>
    </div>
  );
}

export default App;
