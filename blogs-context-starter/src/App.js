import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import './App.css';
export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

 useEffect(() => {
  fetchBlogPosts();
 },[]);
  return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Header />
        <Blogs />
        <Pagination />
      </div>
  )
  
}
