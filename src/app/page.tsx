'use client';
import HomeContent from "./HomeContent";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskForm from "./components/TaskForm";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContent />}></Route>
        <Route path="/addForm" element={<TaskForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
