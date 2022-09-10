import React from "react";
// import Editor from './components/Editor';
import Home from "./components/Home/Home";
import Pages from "./components/Pages";
import Pagestemp from "./components/Pages/Pagestemp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import "./components/Home/Home";
import Template from "./components/Template/Template";
import Preview from "./components/Template/Preview";
import Previewp from "./components/Pages/Previewp";
import EditorConfig from "./components/EditorConfig";
import Register from "./components/Register";
import Logout from "./components/Logout";
import UserDetailsProvider from "./Context";
// import Editonly from './components/Editonly';

function App() {
  return (
    // <>
    //   <h1 className="text-3xl text-black font-bold underline">
    //     Hello world!
    //   </h1>
    // </>
    <UserDetailsProvider >
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/editor/:id" element={<EditorConfig />} />
        <Route path="/tmpedit/:id" element={<EditorConfig />} />
        <Route path="/template/editor" element={<EditorConfig />} />
        <Route path="/pages/editor" element={<EditorConfig />} />

        <Route path="/pages" element={<Pagestemp />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/previewp/:id" element={<Previewp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* // <Route path="/register" component={Register} />
        // <Route path="/login" component={Login} /> */}
        {/*  */}
      </Routes>
    </Router>
    </UserDetailsProvider>
  );
}

export default App;
