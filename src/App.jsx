import { useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setreadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newbookmarks = [...bookmarks, blog];
    setBookmarks(newbookmarks);
  };

const handleMarkAsRead= time =>{
  setreadingTime(readingTime + time )
  
}

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blog handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
