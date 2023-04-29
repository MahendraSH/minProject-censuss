import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Layout1 from "./layouts/Layout1";
import Login from "./pages/Login";
import Registor from "./pages/Registor";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registor/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
};
export default App;
