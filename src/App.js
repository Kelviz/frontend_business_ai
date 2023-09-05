import { Route, Routes } from "react-router-dom";

import "./App.css";
import MultiStepForm from "./components/form/MultiStepForm";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import IdeaList from "./components/ideaList/IdeaList";
import IdeaDetail from "./components/ideaList/IdeaDetail";
import Login from "./components/account/Login";
import { Provider } from "react-redux";
import store from "./store";
import SignUp from "./components/account/SignUp";
import Activate from "./components/account/Activate";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<MultiStepForm />} />
          <Route path="idea-list" element={<IdeaList />} />
          <Route path="idea-detail/:ideaId" element={<IdeaDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="activate/:uid/:token" element={<Activate />} />
        </Routes>

        <Footer />
      </Provider>
    </>
  );
}

export default App;
