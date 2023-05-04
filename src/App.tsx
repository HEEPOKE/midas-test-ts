import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarCommon from "./components/Navbar";

const QuestionOnePage = lazy(() => import("./pages/QuestionOnePage"));
const QuestionTwoPage = lazy(() => import("./pages/QuestionTwoPage"));
const QuestionThreePage = lazy(() => import("./pages/QuestionThreePage"));

export default function AppRouter() {
  return (
    <>
      <NavbarCommon />
      <Router>
        <Routes>
          <Route path="/" element={<QuestionOnePage />} />
          <Route path="/two" element={<QuestionTwoPage />} />
          <Route path="/three" element={<QuestionThreePage />} />
        </Routes>
      </Router>
    </>
  );
}
