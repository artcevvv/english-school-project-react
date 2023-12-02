import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Glossary from "./pages/glossary";
import { ModuleOne, ModuleTwo, ModuleThree, ModuleFour } from "./pages/Modules/exports"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/moduleone" element={<ModuleOne />} />
        <Route path="/moduletwo" element={<ModuleTwo />}/>
        <Route path="/moduleThree" element={<ModuleThree />}/>
        <Route path="/moduleFour" element={<ModuleFour />}/>
      </Routes>
    </main>
  );
};

export default Main;
