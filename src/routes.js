import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import { PageNotFound } from "./pages/pageNotFound";
import Search from "./pages/Search";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Watch/:id" element={<Watch />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
