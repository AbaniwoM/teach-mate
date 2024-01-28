'use client';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/TaskContent";
import 'bootstrap/dist/css/bootstrap.css';

const HomeContent = () => {
  return (
    <main className="w-screen h-screen relative bg-zinc-200 grid grid-column-2 grid-rows-2">
        <Navbar />
        <Sidebar />
        <div>
        <Content /> 
        </div>  
    </main>
  );
}

export default HomeContent;
