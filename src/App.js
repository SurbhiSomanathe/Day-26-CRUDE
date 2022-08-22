import React from 'react';

import  Home  from "./components/Home";
import  AddUser  from "./components/AddUser";
import  EditUser  from "./components/EditUser";
import { GlobalProvider } from './components/context/GlobalState';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

export function App(){
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
    <GlobalProvider>  <nav>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="add">AddUser</Link>
        </li>
        <li>
        <Link to="edit/:id">EditUser</Link>
        </li>
      </nav>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
</GlobalProvider>
    </div>
  )
}

export default App