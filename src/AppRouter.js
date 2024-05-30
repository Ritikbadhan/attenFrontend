import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpUser from "./pages/SignUpUser";
import { SignIn } from "./pages/SignIn";
import { ErrorPage } from "./pages/NotFound";
import SignInAdmin from "./pages/SignInAdmin";
import SignUpAdmin from "./pages/SignUpAdmin";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInAdmin />} />
        <Route path="/signup-admin" element={<SignUpAdmin />} />

        <Route path="/signup-user" element={<SignUpUser />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
