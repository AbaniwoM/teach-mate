'use client';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/TaskContent";

const Home = () => {
  return (
    <main className="w-screen h-screen relative bg-zinc-200 grid grid-column-2 grid-rows-2">
      <div className="col-span-2">
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
      <div> 
        <Content />
      </div>
    </main>
  );
}

export default Home;
