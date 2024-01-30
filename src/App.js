import logo from './logo.png';
import './App.css';
import { IoIosArrowDropdownCircle } from "react-icons/io";

function App() {

  const handleScroll = () => {
    const targetElement = document.querySelector(".Blog")
    if (targetElement) {
      window.scrollTo(0, targetElement.offsetTop)
    }
  }

  return (
    <main className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.yeadamkim.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>
          Welcome to my blog!
        </p>
        <IoIosArrowDropdownCircle className="Dropdown" onClick={handleScroll}/>
      </header>
      <section className="Blog" id="blog">
        <div>
          No posts available
        </div>
      </section>
    </main>
  );
}

export default App;
