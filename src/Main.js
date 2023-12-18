import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/home";
import Glossary from "./pages/Glossary/Glossary";
import { ModuleOne, ModuleTwo, ModuleThree, ModuleFour } from "./pages/Modules/exports"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route exact path="/english-school-project-react/" element={<Home />} />
        <Route path="/english-school-project-react/glossary" element={<Glossary />} />
        <Route path="/english-school-project-react/moduleone" element={<ModuleOne />} />
        <Route path="/english-school-project-react/moduletwo" element={<ModuleTwo />}/>
        <Route path="/english-school-project-react/moduleThree" element={<ModuleThree />}/>
        <Route path="/english-school-project-react/moduleFour" element={<ModuleFour />}/>
      </Routes>
    </main>
  );
};

export default Main;
