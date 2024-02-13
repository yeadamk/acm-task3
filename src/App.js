import React, { useState } from "react";
import logo from "./logo.png";
import "./app.css";
import Post from "./Post";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";

function App() {

  const [posts, setPosts] = useState([]);

  const addPost = (title, content) => {
    const newPost = { id: posts.length + 1, title, content, likes: 0 };
    setPosts([...posts, newPost]);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
    addPost(title, content);
    event.target.title.value = "";
    event.target.content.value = "";
  };

  const handleScroll = () => {
    const targetElement = document.querySelector(".blog")
    if (targetElement) {
      window.scrollTo(0, targetElement.offsetTop)
    }
  }

  return (
    <main className="app">
      <header className="app-header">
        <a
          className="app-link"
          href="https://www.yeadamkim.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="app-logo" alt="logo" />
        </a>
        <p>
          Welcome to my blog!
        </p>
        <IoIosArrowDropdownCircle className="dropdown" onClick={handleScroll}/>
      </header>
      <section className="blog" id="blog">

        <div className="post-container">
          {posts.length > 0 ? (
              posts.map(post => (
                <Post key={post.id} post={post} />
              ))
            ) : (
              <div>No posts available</div>
            )}
        </div>

        <form className="form-container" onSubmit={handleFormSubmit}>
          <input type="text" name="title" placeholder="Post Title" required />
          <textarea name="content" placeholder="Post Content" required></textarea>
          <button type="submit">Add Post</button>
        </form>

        <IoMdAddCircle className="addPost" onClick={addPost}/>

      </section>
      <footer><span>© 2024 Yeadam Kim</span></footer>
    </main>
  );
}

export default App;
