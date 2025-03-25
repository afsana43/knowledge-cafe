import "./App.css";
import Blog from "./components/Blog/Blog";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
     <div className="md:flex">
     <Blog></Blog>
     <Bookmarks></Bookmarks>
     </div>
    </>
  );
}

export default App;
