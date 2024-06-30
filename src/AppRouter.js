import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpUser from "./pages/SignUpUser";
import { SignIn } from "./pages/SignIn";
import { ErrorPage } from "./pages/NotFound";
import SignInAdmin from "./pages/SignInAdmin";
import SignUpAdmin from "./pages/SignUpAdmin";
import Home from "./App";
import NavBar from "./component/NavBar";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup-admin" element={<SignUpAdmin />} />
        <Route path="/signup-user" element={<SignUpUser />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin-admin" element={<SignInAdmin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />



        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
