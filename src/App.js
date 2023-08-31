import { Route, Routes } from "react-router-dom";

import "./App.css";
import MultiStepForm from "./components/form/MultiStepForm";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import IdeaList from "./components/ideaList/IdeaList";
import IdeaDetail from "./components/ideaList/IdeaDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<MultiStepForm />} />
        <Route path="idea-list" element={<IdeaList />} />
        <Route path="idea-detail/:ideaId" element={<IdeaDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
