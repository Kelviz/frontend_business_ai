import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, Provider, connect } from "react-redux";
import { checkAuthenticated, load_user } from "./actions/Auth";

import "./App.css";
import MultiStepForm from "./components/form/MultiStepForm";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import IdeaList from "./components/ideaList/IdeaList";
import IdeaDetail from "./components/ideaList/IdeaDetail";
import Login from "./components/account/Login";
import store from "./store";
import SignUp from "./components/account/SignUp";
import Activate from "./components/account/Activate";
import ResetPassword from "./components/account/ResetPassword";
import ResetPasswordConfirm from "./components/account/ResetPasswordConfirm";
import Layout from "./components/hocs/Layout";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<MultiStepForm />} />
          <Route path="/idea-list" element={<IdeaList />} />
          <Route path="/idea-detail/:ideaId" element={<IdeaDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
        </Routes>

        <Footer />
      </Provider>
    </>
  );
}

export default App;
